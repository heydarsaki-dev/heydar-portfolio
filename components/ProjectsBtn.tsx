//Next Image
import Image from 'next/image';

//Next Link
import Link from 'next/link';

//icons
import {HiArrowRight} from "react-icons/hi2";


const ProjectsBtn = () => {
  return <div className='mx-auto xl:mx-0'>
    <Link href='/work' className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat bg-center group z-10'>
      <Image src={'/rounded-text.png'} alt='' width={141} height={148} className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'/>
      <HiArrowRight className='text-4xl absolute group-hover:translate-x-2 transition-all duration-300'/>

    </Link>
  </div>;
};

export default ProjectsBtn;
