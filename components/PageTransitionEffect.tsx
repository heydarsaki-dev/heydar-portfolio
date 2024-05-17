"use client"

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

// Prevents instant page opening
function FrozenRouter(props: { children: React.ReactNode }) {
    const context = useContext(LayoutRouterContext ?? {});
    const frozen = useRef(context).current;

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    );
}


const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {

    const pathname = usePathname()

    return (
        <>
            <AnimatePresence mode={'wait'}>
                <div
                    key={pathname}
                >
                    {/* <FrozenRouter> */}
                    {children}
                    {/* </FrozenRouter> */}
                </div>
            </AnimatePresence>
        </>
    )
}
export default PageTransitionEffect;
