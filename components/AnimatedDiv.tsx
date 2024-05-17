'use client'

//framer motion 
import { Variants, motion } from "framer-motion";
import { PropsWithChildren } from "react";

type AdditionalProps = {
    className?: string,
    variants?: Variants
}

export default function AnimatedDiv(props: PropsWithChildren<AdditionalProps>) {
    return (
        <motion.div
            variants={props.variants}
            initial="hidden"
            animate='show'
            exit='hidden'
            className={props.className}>
            {props.children}
        </motion.div>
    );
}