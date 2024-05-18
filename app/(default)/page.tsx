
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
            <div className="container flex flex-col items-end ">
                <AnimatedDiv
                    variants={fadeIn('down', 0.4)}
                    className='w-full h-full text-center flex flex-col gap-y-5 justify-center items-end pt-32 lg:pt-40 lg:text-right
                 mx-auto'>
                    {/*   Title   */}
                    <h1 className=' mx-auto lg:mx-0 text-4xl lg:text-4xl leading-[3rem] md:leading-[4rem] xl:text-5xl font-extrabold'> ایده هات رو به  
                        <span className='text-accent text-nowrap'> واقعیت دیجیتالی </span> <br /> تبدیل کن </h1>
                    {/*   Subtitle   */}
                    <p className='max-w-sm lg:max-w-lg mx-auto lg:mx-0 mb-10 lg:mb-16 lg:text-lg'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>

                    {/*    Projects Button    */}
                    <div className='flex justify-center lg:hidden relative'>
                        <ProjectsBtn />
                    </div>

                </AnimatedDiv>

                <AnimatedDiv
                    className="hidden lg:flex"
                    variants={fadeIn('up', 0.4)}>
                    <ProjectsBtn />
                </AnimatedDiv>
            </div>
            {/*    Image   */}
            <div className="w-[1200px] h-full absolute left-0 bottom-0">
                {/* bg image */}
                {/* <AnimatedDiv variants={fadeIn('down', 0.4)} className="bg-none lg:bg-explosion lg:bg-cover lg:bg-right lg:bg-no-repeat w-full h-full
                absolute mix-blend-color-dodge translate-z-0"></AnimatedDiv> */}

                <div className="w-full h-full max-w-[550px] max-h-[500px] xl:max-w-[650px] xl:max-h-[600px] absolute left-0 bottom-0"
                >
                    {/* Particles */}
                    <div>
                        <ParticlesContainer />
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