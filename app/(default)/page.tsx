//next image
import Image from "next/image";

//components
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";

import AnimatedProjectsBtn from "@/components/AnimatedProjectsBtn";

export default function Home() {

    return (
        <div className='h-full'>
            {/*    Text   */}
            <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
                <div className='text-center flex flex-col justify-center pt-20 xl:pt-30 xl:text-left
                h-full container mx-auto'>
                    {/*   Title   */}
                    <h1 className='h1'>Transforming Ideas <br /> Into
                        <span className='text-accent'>Digital Reality</span></h1>
                    {/*   Subtitle   */}
                    <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Cum ex officiis similique suscipit. Cum
                        dignissimos expedita hic nesciunt officia voluptates!</p>

                    {/*    Projects Button    */}
                    <div className='flex justify-center xl:hidden relative'>
                        <ProjectsBtn />
                    </div>
                    <div className="hidden xl:flex">
                        <AnimatedProjectsBtn />
                    </div>
                </div>
            </div>
            {/*    Image   */}
            <div className="w-[1200px] h-full absolute right-0 bottom-0">
                {/* bg image */}
                {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full
                absolute mix-blend-color-dodge translate-z-0"></div> */}
                {/* Particles */}
                <div>
                    
                </div>
                {/* Avatar */}
                <div className="w-full h-full max-w-[737px] max-h-[678px] absolute lg:right-[8%]">
                    <Avatar/>
                </div>
            </div>
        </div>
    )
}