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
        <div className={'relative page bg-site  text-white bg-cover bg-no-repeat'}>
            <div className="absolute bg-gradient-to-r from-primary/10 via-black/30 to-black/10 h-full w-full z-10"></div>
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

