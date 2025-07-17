import React from 'react'
import { motion } from "framer-motion";
import Nurses from '../assets/thrid.jpg'

const SubsetHero = () => {
  return (
    <section className='relative w-full h-[420px] md:h-[480px] overflow-hidden'>

      <img
      src={Nurses}
      alt='/'
      className='absolute inset-0 w-full h-full object-cover object-[center_30%]'
      />

      <div className='absolute left-0 top-0 h-full w-[65%] bg-gradient-to-r from-[#041F33] via-[#041F33]/90 to-transparent z-10' />

      <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='relative z-20 px-6 md:-px-20 py-10 max-w-2xl text-white h-full flex flex-col justify-center'
      >
            <h1 className='text-3xl md:text-5xl font-bold leading-tight mb-4'>
                  Your Future in Nursing<br />Begins Here
            </h1>
            <p className='text-base md:text-lg mb-6'>
                  Take the first step toward a rewarding and accelerated nursing career with Omoze Nursing Eductors. Apply now and turn your purpose into impact.
            </p>
            <div className='flex gap-4'>
                  <button className='bg-blue-500 text-white px-5 py-2 rounded-md shadow hover:bg-blue-600 transition'>
                        Apply Now
                  </button>
                  <button className='bg-white text-sky-950 px-5 py-2 rounded-md shadow hover:bg-gray-100 transition'>
                        Contact US
                  </button>
            </div>
      </motion.div>
      
    </section>
  )
}

export default SubsetHero

