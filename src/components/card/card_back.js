"'use client';"
import React from 'react'
import Image from 'next/image'
import { FormContext } from '@/contexts/formContext'


export default function CardBack() {
    const { formData } = React.useContext(FormContext);
    const formatCVC = (cvc) => {
        if (!cvc) return '000';
        return cvc.padEnd(3, '0'); // Pad with zeros if less than 3 digits
    };
    return (
        <div className='relative h-44  w-78 bg-[url("/images/bg-card-back.png")] rounded-sm bg-cover bg-center'>


            <p className="absolute top-20 right-9 text-white tracking-wider text-xs">{formatCVC(formData.cvc)}</p>
        </div>
    )
}
