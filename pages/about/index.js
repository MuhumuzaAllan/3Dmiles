
import React, { useState } from 'react'

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


//  data
const aboutData = [
  {
    id: 1,
    title: 'skills',
    info: [
      {
        id: 1,
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
        id: 2,
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    id: 2,
    title: 'awards',
    info: [
      {
        id: 1,
        title: 'Galactic Problem solver NASA SPACE APPS ',
        stage: '2023 - 2024',
      },
      {
        id: 2,
        title: 'Figma Design Achievement Awards - Finalist',
        stage: '2023 - 2024',
      },
    ],
  },
  {
    id: 3,
    title: 'experience',
    info: [
      {
        id: 1,
        title: 'UX/UI Designer - Flawless Designs',
        stage: '2023 - date',
      },
      {
        id: 2,
        title: 'Web Developer - Muhuan developers',
        stage: '2023 - date',
      },
      {
        id: 3,
        title: 'React native Mobile Apps Development',
        stage: '2024 - date',
      },
    ],
  },
  {
    id: 4,
    title: 'value',
    info: [
      {
        id: 1,
        title: 'Our Expert Team of Web Developers',
        stage: '2023 - Present',
      },
      {
        id: 2,
        title: 'Successful Website Projects',
        stage: '2023 - present',
      },
      {
        id: 3,
        title: 'Client Satisfaction and Recognition',
        stage: '2023 - present',
      },
    ],
  },
];


//compoents
import Circles from '../../components/Circles'
import Avatar from '../../components/Avatar'

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

//counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0)
  console.log(index)

  return <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
    {/* avatar img */}
    <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex absolute bottom-0 -left-[370px]'>
      <Avatar />
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6' >
      {/* text */}
      <div className='flex-1 flex flex-col justify-center ' >
        <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' 
        className='h2' >Captivating <span className='text-accent' > stories </span> birth magnificent designs. </motion.h2>
        <motion.p variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' 
        className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
          16 months ago, a journey unfolded filled with challenges and triumphs.Dreams faced obstacles but determination prevailed,As the end drew near, they stood stronger, saying, "We took a chance, and we succeeded."
        </motion.p>
        {/* counters */}
        <motion.div variants={fadeIn('right', 0.6)} initial='hidden' animate='show' exit='hidden'
        className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 '>
          <div className='flex flex-1 xl:gap-x-6'>
            {/* experience */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ' >
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                <CountUp start={0} end={16} duration={5}  />+
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >Months of experience</div>
            </div>
              {/* clients */}
          <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ' >
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                <CountUp start={0} end={40} duration={5}  />+
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >Satisfied clients</div>
          </div>
          {/* finished projects */}
          <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ' >
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                <CountUp start={0} end={56} duration={5}  />+
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >Finished projects</div>
            </div>
            {/* awards */}
            <div className='relative flex-1 ' >
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                <CountUp start={0} end={8} duration={5}  />+
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >Winning awards</div>
            </div>
          </div>
        
        </motion.div>
      </div>
      {/* info */}
      <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden'
      className='flex flex-col w-full xl:max-w-[48%] h-[480px] '>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 '>
          {aboutData.map((item, itemIndex) => {
          return (
            <div key={itemIndex} 
            className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} 
            onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </div>
          )
          })}
        </div>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4  items-center xl:items-start '>
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white /60'>
                {/* title */}
                <div className='font-light mb-2 md:mb-0' >{item.title} </div>
                <div className='hidden md:flex' >-</div>
                <div >{item.stage}</div>
                <div className='flex gap-x-4 ' >
                   {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                      <div key={itemIndex} className='text-2xl text-white ' > {icon} </div>
                     ) 
                     })}
                  </div>
                
               </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  </div>;
};

export default About;
