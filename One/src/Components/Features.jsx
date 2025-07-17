import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Features = () => {
  const lineRef = useRef(null)
  const isInView = useInView(lineRef, { once: true });

  const feature = [
    {
      title: 'Accelerated BSN',
      description:
      'Fast-track your nursing career with our intensive BSN program designed for career changers and second-degree student.',
      image: '/table1.jpg',
      iconColor: 'big-blue-100 text-blue-500',
      shadowColor: 'rgba(59, 130, 246, 0.4)',
      icon: faGraduationCap,
    },
    {
      title: 'Pre- Nursing Diploma',
      description:
      'Comprehensive review program to help you pass the NCLEX-RN exam on your first attempt with confidence.',
      image:'/table2.jpg',
      iconColor: 'bg-arrange-100 text-orange-500',
      shadowColor: 'rgba(249, 115, 22, 0.4)',
      icon: faClipboardList,
    },
  ];



  return (
    <section className='bg-gray-50 py-16 px-4 md:px-10'>
    <div className='max-w-7xl mx-auto'>
      {/* Header */}
      <div className='mb-10'>
        <div className='flex items-center space-x-2'>
          <motion.div
          ref={lineRef}
          initial={{ width: 0 }}
          animate={{ width: isInView ? 24 : 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='h-0.5 bg-blue-500'
          />
            <p className='text-sm text-blue-500 font-semibold'>Our Program</p>
        </div>
            <h2 className='text-3xl md:text-4xl font-bold mt-2 text-gray-800'>
                  Our Special Features We Build for you
            </h2>

            <p className='mt-4 text-gray-600 max-w-2xl'>
                EdTech is a platform that helps students in advancing their career by providing solutions
            for simple and flexible online learning, allowing you to study anywhere and anytime at
            affordable prices.   
            </p>
      </div>

      {/* Feature Cards */}
      <div className='grid md:grid-cols-2 gap-6'>
        {feature.map((f, idx) => (
          <div
          key={idx}
          className='bg-gray-100 rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300'
          >
            <img
            src={f.image}
            alt={f.title}
            className='w-full h-80 object-cover'
            />
            <div className='p-6 relative'>
              {/* Floating Icon */}
              <div
              className={`absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full w-10 h-10 flex items-center justify-center shadow-md mr-20 bg  ${f.iconColor}`}
               style={{ boxShadow: `0 4px 10px ${f.shadowColor}`}}>
                <FontAwesomeIcon icon={f.icon} className='text-xl' />
              </div>

              <h3 className='text-xl font-semibold text-gray-800 mb-2'>{f.title}</h3>
              <p className='text-gray-600 mb-4'>{f.description}</p>
              <a
              href='#'
              className='text-blue-500 font-medium hover:underline flex items-center space-x-1'>
                <span>Learn More</span>
                <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4 ml-1' />
               
              </a>
            </div>

          </div>
        ))}
      </div>
      
        
      </div>
    
      
    </section>
  )
}

export default Features
