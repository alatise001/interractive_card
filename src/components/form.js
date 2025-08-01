"use client"

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useEffect } from "react"
import { FormContext } from "@/contexts/formContext"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"



const formSchema = z.object({
    cardholderName: z.string()
        .min(1, { message: "Cardholder name is required" })
        .regex(/^[a-zA-Z\s]+$/, { message: "Name can only contain letters" }),
    cardNumber: z.string()
        .min(16, { message: "Card number must be 16 digits" })
        .max(16, { message: "Card number must be 16 digits" })
        .regex(/^\d+$/, { message: "Wrong format, numbers only" }),
    month: z.string().min(2, { message: "Can't be blank" }).max(2, { message: "Month must be 2 digits" }),
    year: z.string().min(2, { message: "Can't be blank" }).max(2, { message: "Year must be 2 digits" }),
    cvc: z.string().min(3, { message: "Can't be blank" }).max(3, { message: "CVC must be 3 digits" }),
})

export default function CardForm() {

    const { formData, setFormData } = React.useContext(FormContext);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cardholderName: "",
            cardNumber: "",
            month: "",
            year: "",
            cvc: "",
        },
    })

    // console.log(form);

    useEffect(() => {
        const subscription = form.watch((value, { name, type }) => {
            // console.log('Field changed:', name, 'Type:', type, 'Value:', value)


            setFormData(value)
        })
        return () => subscription.unsubscribe()
    }, [form, form.watch, setFormData])



    const onSubmit = (data) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem("cardform", JSON.stringify(data));
        }
    }

    const formatCardNumber = (value) => {

        const digits = value.replace(/\D/g, '')


        const limitedDigits = digits.slice(0, 16)


        const formatted = limitedDigits.replace(/(\d{4})(?=\d)/g, '$1 ')

        return formatted
    }

    const handleCardNumberChange = (field) => (e) => {
        const inputValue = e.target.value
        const digitsOnly = inputValue.replace(/\D/g, '')


        field.onChange(digitsOnly)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="cardholderName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cardholder Name</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. Jane Appleseed" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Card Number</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="e.g. 1234 5678 9012 3456"
                                    value={formatCardNumber(field.value)}
                                    onChange={handleCardNumberChange(field)}
                                    maxLength={19} // 16 digits + 3 spaces
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex gap-3">
                    <div className="w-[60%] gap-2 flex flex-col">
                        <FormLabel>exp.date (MM/YY)</FormLabel>
                        <div className="w-[100%] gap-3 flex">

                            <FormField
                                control={form.control}
                                name="month"
                                render={({ field }) => (
                                    <FormItem className="w-[50%]" >
                                        <FormControl >
                                            <Input placeholder="MM" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="year"
                                render={({ field }) => (
                                    <FormItem className="w-[50%]">
                                        {/* <FormLabel>YY</FormLabel> */}
                                        <FormControl>
                                            <Input placeholder="YY" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <FormField
                        control={form.control}
                        name="cvc"
                        render={({ field }) => (
                            <FormItem className="w-fit">
                                <FormLabel>CVC</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. 123" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                </div>


                <Button className="mt-4" type="submit">Confirm</Button>
            </form>
        </Form>
    )
}
