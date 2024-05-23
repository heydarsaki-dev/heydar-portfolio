'use client'

import { useState } from "react";
import { AboutDataType } from "./types/AboutInfoType";



// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import { it } from "node:test";


//  data
const aboutData: Array<AboutDataType> = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];


const AboutTabs = () => {
  const [index, setIndex] = useState(0)

  return <div>
    <div className='flex flex-row-reverse gap-x-4 lg:gap-x-8 mx-auto lg:mx-0 mb-4'>
      {aboutData.map((item, itemIndex) => {
        return <div className={` ${index === itemIndex &&
          'text-accent after:w-[100%] after:!bg-accent after:transition-all after:duration-300'} 
      cursor-pointer w-full
      capitalize lg:text-lg relative
      after:w-8 after:h-[2px] after:bg-white 
      after:absolute after:-bottom-1
      after:right-0`}
          onClick={() => setIndex(itemIndex)}
          key={itemIndex}>
          {item.title}
        </div>
      })}
    </div>
    <div className="py-2 lg:py-6 flex flex-col gap-y-2 lg:gap-y-4 items-center lg:items-end">
      {aboutData[index].info.map((item, itemIndex) => {
        return <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
          <div className="font-light mb-2 md:mb-0">
          {item.title}
          </div>
          <div className="hidden md:flex">-</div>
          <div>{item.stage}</div>
          <div className="flex gap-x-4">
            {item.icons?.map((icon , itemIndex) =>{
              return <div className="text-2xl text-white">
                {icon}
              </div>
            })}
          </div>
        </div>
      })}
    </div>
  </div>

};

export default AboutTabs;
