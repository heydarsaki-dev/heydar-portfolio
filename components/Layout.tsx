'use client'

import React, { PropsWithChildren } from "react";

//components
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import TopLeftImg from '@/components/TopLeftImg' 

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={'w-full h-full bg-site text-white bg-cover bg-no-repeat'}>
            <TopLeftImg />
            <Nav />
            <Header />
            {/* <PageTransitionEffect> */}
                {/* <Transition/> */}
                {children}
            {/* </PageTransitionEffect> */}
        </div>


    );
}

