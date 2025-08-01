'use client'
import React from "react";

export const FormContext = React.createContext();

function FormContextProvider({ children }) {
    const [form, setFormData] = React.useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem("cardform");
            if (saved) {
                return JSON.parse(saved);
            }
        }
        return {
            cardholderName: "",
            cardNumber: "",
            month: "",
            year: "",
            cvc: "",
        };
    });

    // React.useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         localStorage.setItem("cardform", JSON.stringify(form));
    //     }
    // }, [form]);

    return (
        <FormContext.Provider value={{ formData: form, setFormData }}>
            {children}
        </FormContext.Provider>
    );
}

export default FormContextProvider;
