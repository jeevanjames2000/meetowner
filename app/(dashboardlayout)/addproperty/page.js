'use client';
import React, { useEffect } from 'react';
import Tabswrapper from '@/components/addproperty/tabs/Tabswrapper';
import { useUserDetails } from '@/components/zustand/useUserDetails';
import { useRouter } from 'next/navigation';

function Page() {
    const router = useRouter();
    const isLogged = useUserDetails((state) => state.isLogged);

    useEffect(() => {
        if (!isLogged) {
            router.push('/signup');
        }
    }, [isLogged]);

    if (!isLogged) {
        return null; // Or a loading spinner, placeholder, etc.
    }

    return (
        <div className='px-[80px] mt-5'>
            <div className='p-1 border border-[#699BA0] rounded-md'>
                <Tabswrapper />
            </div>
        </div>
    );
}

export default Page;
