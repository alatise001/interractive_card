import React from 'react'
import Image from 'next/image'
import { FormContext } from '@/contexts/formContext'


export default function CardFront() {
    const { formData } = React.useContext(FormContext);

    const formatCardNumber = (number) => {
        if (!number) return '0000 0000 0000 0000';


        const paddedNumber = number.padEnd(16, '0');


        return paddedNumber.replace(/(.{4})/g, '$1 ').trim();
    };

    return (
        <div className='p-5 relative h-44 w-78 bg-[url("/images/bg-card-front.png")] rounded-sm bg-cover bg-center flex flex-col justify-between'>

            <Image
                src="/images/card-logo.svg"
                alt="Background"
                width={40}
                height={40}
                className=""
            />


            <div className='flex flex-col gap-2 text-white font-mono'>
                <p className=' text-lg tracking-[.195em] self-stretch'>{formatCardNumber(formData.cardNumber)}</p>

                <div className='flex justify-between'>
                    <p className='text-xs uppercase'>{formData.cardholderName || 'Jane Appleseed'}</p>
                    <p className='text-xs'>{formData.month || '00'}/{formData.year || '00'}</p>
                </div>
            </div>
        </div>
    )
}
