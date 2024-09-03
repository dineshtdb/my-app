import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
const Footer = () => {
  return (
    <div className='flex justify-around flex-col ga-2 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.logo_light} />
        <p className='text-sm text-white '>All Rights reserved. Copyright @me</p>
        <div className='flex'>
            <Image src={assets.facebook_icon}/>
            <Image src={assets.twitter_icon}/>
            <Image src={assets.googleplus_icon}/>
        </div>
        </div>
  )
}

export default Footer