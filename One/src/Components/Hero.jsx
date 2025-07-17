import React, { useEffect, useRef, useState } from 'react'
import Nurse1 from '../assets/first.jpg'

const Hero = () => {
      const enrollRef = useRef(null);
      const learnRef = useRef(null);
      const underlineRef = useRef(null);
      const [activeRef, setActiveRef] = useState(enrollRef);


      useEffect(() =>{
            const moveUnderline = () => {
                  const target = activeRef.current;
                  const underline = underlineRef.current;
                  if(underline && target) {
                        const { left, width } = target.getBoundingClientRect();
                        const containerLeft = target.parentElement.getBoundingClientRect().left;

                        underline.style.left = `${left - containerLeft}px`;
                        underline.style.width = `${width}px`;
                  }
            };

            moveUnderline();
            window.addEventListener("resize", moveUnderline);
            return () => window.removeEventListener("resize", moveUnderline);
      }, [activeRef])


  return (
    <section className='bg-gray-50 pt-20'>
      {/* Text Section */}
      <div className='max-w-4xl mx-auto text-center px-4 py-16'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900'>
                  Level Up Your Nursing Career with <br className='hidden sm:block' />
                  <span className='text-blue-700'>OMOZE"s Accelerated Programs</span>
            </h1>
            <p className='mt-6 text-gray-600 text-lg max-w-2xl mx-auto'>
                  We don't just teach nursing - we ignite futures and transform lives through world-class
            </p>

            {/* Buttons */}
            <div className='mt-10 relative flex justify-center gap-4 items-start group'>
                  <button
                  ref={enrollRef}
                  onMouseEnter={() => setActiveRef(enrollRef)}
                  className='bg-[#0D95C9] hover:bg-[#0b7eb3]  text-white px-6 py-3 rounded-lg text-sm font-semibold transition duration-300 z-10'>
                        Enroll Today &rarr; 
                  </button>
                  <button
                  ref={learnRef}
                  onMouseEnter={() => setActiveRef(learnRef)}
                  className='bg-blue-100 hover:bg-blue-200 text-blue-700 px-6 py-3 rounded-lg text-sm font-semibold transition duration-300 z-10'>
                        Learn More &rarr;
                  </button>

                  <span
                  ref={underlineRef}
                  className='absolute bottom-0 h-1 bg-blue-200 rounded-full transition-all duration-300 ease-in-out'/>
            </div>
            

      </div>
      <div className='w-full'>
            <img
            src={Nurse1}
            alt=''
            className='w-full object-cover'
            />
      </div>
      
    </section>
  )
}

export default Hero


