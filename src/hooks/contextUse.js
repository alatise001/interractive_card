'use client'
import FormContextProvider from '@/contexts/formContext'
import { Import } from 'lucide-react'
import React from 'react'

export default function ContextUse({ children }) {
    return (
        <FormContextProvider>
            {children}
        </FormContextProvider>
    )
}
