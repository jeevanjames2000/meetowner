import Header from '@/components/header/Header'
import React from 'react'

export default function DashboardLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}       
