'use client'

// icons
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
    {name: 'home', path: '/', icon: <HiHome/>},
    {name: 'about', path: '/about', icon: <HiUser/>},
    {name: 'services', path: '/services', icon: <HiRectangleGroup/>},
    {name: 'work', path: '/work', icon: <HiViewColumns/>},
    {
        name: 'testimonials',
        path: '/testimonials',
        icon: <HiChatBubbleBottomCenterText/>,
    },
    {
        name: 'contact',
        path: '/contact',
        icon: <HiEnvelope/>,
    },
];

// next link
import Link from 'next/link';

// next pathname
import {usePathname, useRouter} from 'next/navigation';
import {MouseEvent} from "react";


const Nav = () => {
    const pathname = usePathname();


    return <nav
        className='flex flex-col items-center lg:justify-center gap-y-4 fixed h-max bottom-0 mt-auto lg:left-[2%] z-50 top-0 w-full lg:w-16 lg:max-w-md lg:h-screen'>
        {/*  inner  */}
        <div className='flex w-full lg:flex-col items-center
         justify-between lg:justify-center gap-y-10 px-4
          md:px-40 lg:px-0 h-[80px] lg:h-max py-8 bg-white/10
         backdrop-blur-sm text-3xl lg:text-xl lg:rounded-full
         '>
            {navData.map((link, index) => {
                return <Link
                    className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`}
                    href={link.path} key={index}>

                    {/*Tooltip*/}
                    <div
                        className='absolute pl-14 left-0 opacity-0 invisible lg:group-hover:visible lg:group-hover:opacity-100 transition-all duration-300 '>
                        <div className='bg-white relative flex
                         text-primary items-center p-[6px]
                        rounded-[3px]
                        '>
                            <div className='text-[12px] leading-none font-semibold capitalize'>
                                {link.name}
                            </div>
                            {/*triangle*/}
                            <div className='border-solid border-r-white border-r-8
                     border-y-transparent border-y-[6px] border-l-0 absolute -left-2'>

                            </div>
                        </div>
                    </div>

                    {/*icon*/}
                    <div>
                        {link.icon}
                    </div>
                </Link>
            })}
        </div>
    </nav>;
};

export default Nav;
