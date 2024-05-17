
//components
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import AnimatedProjectsBtn from "@/components/AnimatedProjectsBtn";
import AnimatedDiv from "@/components/AnimatedDiv";

import { fadeIn } from "@/variants";

export default function Home() {

    return (
        <div className='h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
            {/*    Text   */}
            <div>

                <AnimatedDiv
                    variants={fadeIn('down', 0.4)}
                    className='w-full h-full text-center flex flex-col gap-y-5 justify-center pt-32 lg:pt-40 lg:text-left
                    container mx-auto lg:ml-16'>
                    {/*   Title   */}
                    <h1 className='text-4xl leading-[3rem] md:leading-[4rem] md:text-5xl xl:text-6xl font-bold'>Transforming Ideas <br /> Into
                        <span className='text-accent'>Digital Reality</span></h1>
                    {/*   Subtitle   */}
                    <p className='max-w-sm lg:max-w-lg mx-auto lg:mx-0 mb-10 lg:mb-16 lg:text-lg'>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Cum ex officiis similique suscipit. Cum
                        dignissimos expedita hic nesciunt officia voluptates!</p>

                    {/*    Projects Button    */}
                    <div className='flex justify-center lg:hidden relative'>
                        <ProjectsBtn />
                    </div>

                </AnimatedDiv>

                <div
                    className="hidden lg:flex mx-auto lg:ml-16">
                    <AnimatedDiv
                        variants={fadeIn('up', 0.4)}>
                        <ProjectsBtn />
                    </AnimatedDiv>
                </div>
            </div>
            {/*    Image   */}
            <div className="w-[1200px] h-full absolute right-0 bottom-0">
                {/* bg image */}
                {/* <AnimatedDiv variants={fadeIn('down', 0.4)} className="bg-none lg:bg-explosion lg:bg-cover lg:bg-right lg:bg-no-repeat w-full h-full
                absolute mix-blend-color-dodge translate-z-0"></AnimatedDiv> */}
              
                <div className="w-full h-full max-w-[550px] max-h-[500px] xl:max-w-[650px] xl:max-h-[600px] absolute right-0 bottom-0"
                >
                  {/* Particles */}
                  <div>
                    <ParticlesContainer/>
                </div>
                {/* Avatar */}
                    <AnimatedDiv
                        className="size-full"
                        variants={fadeIn('up', 0.4)}>
                        <Avatar />
                    </AnimatedDiv>
                </div>
            </div>
        </div>
    )
}