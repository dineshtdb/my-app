'use client'
import { assets, blog_data } from '@/Assets/assets';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
const page = ({params}) => {
  const [data,setdata]=useState(null);
  const fetchdata=()=>{
    for(let i=0;i<blog_data.length;i++){
      if(Number(params.id)==blog_data[i].id){
          setdata(blog_data[i]);
          break;
      }
    }
  }
  useEffect(()=>{
    fetchdata();
  },[])
  return (data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between item-center'>
        <Image src={assets.logo} width={180} className='w-[130px] sm:w-auto'/>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get Start</button>
      </div> 
      <div className='text-center my-24'>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        <Image src={data.author_img} width={60} height={60} className='mx-auto mt-6 border border-white rounded-full'/>
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
      <Image className='border-4 border-white' src={data.image} height={720} width={1280}/>
      <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>
      <p>{data.description} </p>
      <h3 className='my-5 text-[18px] font-semibold'>MMMMMMMMMMMMMMMMMMMMMMMMM</h3>
      <p className='my-3'>mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
      <div className='my-24'>
        <p className='text-black font font-semibold my-4'>Share the artical</p>
        <div className='flex'>
          <Image src={assets.facebook_icon}/>
          <Image src={assets.googleplus_icon}/>
          <Image src={assets.twitter_icon}/>
        </div>
      </div>
    </div>
    </>:<></>
  )
}

export default page