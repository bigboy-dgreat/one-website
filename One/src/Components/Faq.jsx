import React, { useRef, useState } from 'react'
import { motion, useInView } from "framer-motion";
import { FaWhatsapp,
       FaPhoneAlt, 
       FaEnvelope, 
       FaPlus, FaMinus } from 'react-icons/fa';
       import telecom from '../assets/telecom.png'
       import faqs from './faqData';

const Faq = () => {
      const [openIndex, setOpenIndex] = useState(0)
      const lineRef = useRef(null)
      const isInView = useInView(lineRef, { once: true })
      

  return (
    <section className='px-6 md:px-20 py-20 bg-gray-50 text-gray-900'>
      <div className='max-w-6xl max-auto'>
            <div className='flex items-center space-x-2'>
                  <motion.div
                  ref={lineRef}
                  initial={{ width: 0 }}
                  animate={{ width: isInView ? 24 : 0}}
                  transition={{ duration: 0.6, ease: 'easeOut'}}
                  className='h-0.5 bg-blue-500'
                  />
                  <p className='text-sm text-blue-500 font-semibold'>
                        FAQ
                  </p>
            </div>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
                  <h2 className='text-3xl md-text-4xl font-bold mb-4'>
                        Questions other people are asking
                  </h2>
            </motion.div>

            <div className='flex flex-col md:flex-row gap-8 mb-8'>
                  <div className='md:w-1/3 flex flex-col items-center md:items-start'>
                  <img
                  src={telecom}
                  alt='/'
                  style={{
                        width: '555px',
                        height: '494px',
                        borderRadius:'12px',
                        objectFit: 'cover',
                  }}
                  className='mb-6'
                  />
                  <div className=' rounded-lg shadow p-6 w-full'>
                        <p className='text-gray-700 text-center md:text-left mb-3'>
                              Connect with an Admission Specialist to learn more about the Omoze Nursing Educator application process
                        </p>
                    <div className='flex flex-col gap-6 text-sm text-[#032d3c]'>
                        <div>
                              <h4 className='text-gray-600 mb-1'>Whatsapp</h4>
                             <a href="https://wa.me/2349021039064" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                                    <FaWhatsapp className='text-green-500 text-xl' />
                                    <span className='font-semibold text-base'>+234 902 103 9064</span>
                                    </a>
                             
                        </div>

                        <div>
                              <h4 className='text-gray-600 mb-1'>Phone number</h4>
                              <a href="tel:+2347037290197" className="flex items-center gap-2 hover:underline">

                                    <FaPhoneAlt className='text-sky-500 text-xl' />
                                    <span className='font-semibold text-bold'>
                                          +234 703 729 0197
                                    </span>
                              </a>
                        </div>

                        <div>
                              <h4 className='text-gray-600 mb-1'>Email 
                                    address
                              </h4>
                              <a href="mailto:warrinocarrylast@protonmail.com" className="flex items-center gap-2 hover:underline">
                                    <FaEnvelope className='text-sky-500 text-xl' />
                                    <span className='font-semibold text-base'>
                                          warrinocarrylast@protonmail.com
                                    </span>
                                    </a>
                        </div>
                    </div>
                        {/* --- */}
                  </div>
                  </div>

                  <div className='md:w-2/3'>
                  <ul className='divide-y divide-gray-200 rounded-lg'>
                        {faqs.map((f, idx) => (
                              <li key={idx} className='p-4'>
                                    <button
                                    className='w-full text-left flex justify-between items-center font-medium'
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    >
                                          <span>{f.question}</span>
                                         {openIndex === idx ?(
                                          <FaMinus className='w-4 h-4 text-gray-700' />
                                         ) : (
                                          <FaPlus className='w-4 h-4 text-gray-700' />
                                         )}
                                    </button>
                                    {openIndex === idx && (
                                          <div className='mt-2 text-gray-600'>{f.answer}</div>
                                    )}
                              </li>
                        ))}

                  </ul>
                  </div>

            </div>
      </div>
      
    </section>
  )
}

export default Faq
