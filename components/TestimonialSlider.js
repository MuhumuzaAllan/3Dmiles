
//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

//import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

//import required modules
import { Navigation, Pagination } from 'swiper'

// icons
import { FaQuoteLeft } from 'react-icons/fa'
import Image from 'next/image';

// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Consultant',
    message:
      'We are truly grateful for the outstanding graphics work that we have accomplished.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Client',
    message:
      'We are immensely grateful for the outstanding graphics work you have delivered. Your creativity and attention to detail have truly elevated our projects to new heights. Thank you for bringing our vision to life with such excellence.',
  },
  {
    image: '/t-avt-3.png',
    name: 'John Mclister',
    position: 'Client',
    message:
      '"Our sincerest gratitude for the incredible web app that has revolutionized our digital presence. Your expertise and innovation have elevated our user experience to new heights. Thank you for your exceptional work!"',
  },
];

const TestimonialSlider = () => {
  return <Swiper 
  navigation={true}
  pagination={{
    clickable: true
  }}
  modules={[ Navigation, Pagination]}
  className="h-[400px] "
  > {testimonialData.map((person, index) => {
    return (
      <SwiperSlide key={index}>
        <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16 '>
          {/* avatar,name, position, */}
          <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 '>
            <div className='flex flex-col justify-center text-center '>
              {/* avatar */}
              <div className='mb-2 mx-auto ' >
                <Image src={person.image} width={100} height={100} alt='' />
              </div>
              {/* name */}
              <div className='text-lg '> {person.name} </div>
              {/* position */}
              <div className='text-[12px] uppercase font-extralight tracking-widest' >{person.position}</div>
            </div>
          </div>
          {/* quote & message */}
          <div className='  flex-1 flex flex-col justify-center items-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 ' >
            {/* quote icon */}
            <div className='mb-4 '> <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' /> </div>
            {/* message */}
            <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
          </div>
        </div>
     </SwiperSlide>
    )
  } )}
  </Swiper>;
};



export default TestimonialSlider;



  
