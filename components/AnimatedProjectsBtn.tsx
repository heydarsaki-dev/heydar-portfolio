'use client'

import ProjectsBtn from "@/components/ProjectsBtn";
import {fadeIn} from "@/variants";
import {motion} from "framer-motion";

export default function AnimatedProjectsBtn() {
    return <div>
        <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden" 
            animate='show'
             exit='hidden'>
            <ProjectsBtn/>
        </motion.div>
    </div>
}