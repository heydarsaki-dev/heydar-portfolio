//components
import AboutTabs from '@/components/AboutTabs';
import AnimatedDiv from '@/components/AnimatedDiv';
import Avatar from '@/components/Avatar';
import Circles from '@/components/Circles';
import { fadeIn } from '@/variants';

const About = () => {
    return <div className="h-screen bg-primary/30 pt-36 lg:pt-10 text-center lg:text-left">
        <Circles />
        {/* avatar img */}
        {/* <AnimatedDiv variants={fadeIn('left', 0.2)}
            className='hidden lg:flex absolute -right-64 bottom-0 max-w-[550px] max-h-[500px] xl:max-w-[550px] xl:max-h-[500px]'>
            <Avatar className='scale-x-[-1]' />
        </AnimatedDiv> */}
        <AnimatedDiv variants={fadeIn('down', 0.2)}
         className='mx-[10%] h-full flex flex-col items-center lg:items-start lg:mt-24 lg:flex-row'>
            <div className='flex-1 flex flex-col justify-center'>
                <h3 className='h3'>
                    Captivating <span className='text-accent'>stories</span> birth magnificent designs.
                </h3>
                <p className='max-w-[500px] mx-auto lg:mx-0 mb-6 lg:mb-12 px-2 lg:px-0'>10 years ago, I began freelancing as a developer. Since then, I've done
                    remote work for agencies, counsulted for startups, and collaborated on digital products for business and consumer use.
                </p>
            </div>
            <div className='w-full flex flex-col lg:max-w-[48%] h-[480px] lg:h-auto'>
                <AboutTabs />
            </div>
            <div>
            </div>
        </AnimatedDiv>
    </div>;
};

export default About;
