// links
import Link from 'next/link'

//icons
import {RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine, RiYoutubeLine, } from 'react-icons/ri'

const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg' >
    <Link href={'https://www.youtube.com/@muhumuzaallan7915'} className='hover:text-accent transition-all duration-300 ' > <RiYoutubeLine /> </Link>
    <Link href={'https://www.facebook.com/profile.php?id=61552736139715'} className='hover:text-accent transition-all duration-300 ' > <RiFacebookLine /> </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300 ' > <RiInstagramLine /> </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300 ' > <RiDribbbleLine /> </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300 ' > <RiBehanceLine /> </Link>
    <Link href={'https://www.pinterest.com/mileslegend/'} className='hover:text-accent transition-all duration-300 ' > <RiPinterestLine /> </Link>
  </div>;
};

export default Socials;
