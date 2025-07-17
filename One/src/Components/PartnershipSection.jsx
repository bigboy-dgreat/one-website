import React, { useRef, useState } from 'react'
import { motion, useInView } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react"
import Nurse from '../assets/fourth.jpg'


const partners = [
      {
            title: "Feature Pacific Oasis System, LLC",
            content: "A trusted name healthcare staffing and operations since 2002. Pacific Oasis System provides top-tier registered nurses, licensed vocational nurses, and caregivers to a wide range of healthcare facilities. Their commitment to quality care, compassion, and workforce excellence supports our mission to raise the next generation of skilled nurses.",
      },
      {
            title: "Heartland Care, LLC",
            content: "Partnered with us to create seamless transition from classroom to clinical through mentorship and recruitment pathways.",
      },
      {
            title: "Trusted Track Record",
            content: "Decades of shared experience ensures our students are job-ready and professionally supported post-graduation",
      },
]

const PartnershipSection = () => {
      const [openIndex , setOpenIndex] = useState(0);
      const lineRef = useRef(null)
      const isInView = useInView(lineRef, { once: true })

      const toggle = (index) => {
            setOpenIndex(index === openIndex ? -1 : index)
      }
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
                        <p className='text-sm text-blue-500 font-semibold'>Affiliate</p>
                 </div>

                 <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partnership and Affiliation
          </h2>
          <p className="text-lg max-w-2xl">
            Proudly connected to leading healthcare organizations that strengthen your path from classroom to career
          </p>
        </motion.div>

        {/* Content */}
        <div className='mt-12 grid md:grid-cols-2 gap-10 items-start'>
            <motion.img
            src={Nurse}
            alt=''
            className='w-full rounded-lg shadow-md'
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            />

            <div>
                  {partners.map((p, idx) =>{
                        const isOpen = openIndex === idx;
                        return (
                              <motion.div
                              key={idx}
                              className='mb-4 border-b pb-4'
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              viewport={{ once: true }}
                              >
                                    <button
                                    onClick={() => toggle(idx)}
                                    className='w-full text-left flex justify-between items-center text-lg font-medium'>
                                    {p.title}
                                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </button>
                                    {isOpen && (
                                          <motion.p
                                          className='mt-2 text-gray-600'
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          transition={{ duration: 0.3 }}
                                          >
                                                {p.content}
                                          </motion.p>
                                    )}
                              </motion.div>
                        )
                  })}
            </div>
        </div>


            
      </div>
      
    </section>
  )
}

export default PartnershipSection
