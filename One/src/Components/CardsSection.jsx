import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaUserNurse, FaHandsHelping, FaRegLightbulb } from "react-icons/fa";
import { MdTimeline } from "react-icons/md";

const features = [
  {
    title: "Hands-On Clinical Experience",
    desc: "Learn by doing-guided clinical training that prepares you for the field",
    icon: <FaUserNurse />,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    title: "Flexible Learning Paths",
    desc: "Our blended learning model allows you to balance coursework, labs, and clinical - all on your schedule.",
    icon: <MdTimeline />,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-500",
  },
  {
    title: "NCLEX prep That Works",
    desc: "Pass the NCLEX-RN on your first try with our intensive, expert-led review sessions in a flexible hybrid format.",
    icon: <FaRegLightbulb />,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    title: "Support That Stays With You",
    desc: "From enrollment to licensure and job placement - we're here every step of the way.",
    icon: <FaHandsHelping />,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-500",
  },
];

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const CardsSection = () => {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true });

  return (
    <section className='bg-gray-50 px-6 md:px-20 py-16'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-12'>
          <div className='flex items-center space-x-2 mb-2'>
            <motion.div
              ref={lineRef}
              initial={{ width: 0 }}
              animate={{ width: isInView ? 24 : 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className='h-0.5 bg-blue-500'
            />
            <p className='text-sm text-blue-500 font-semibold'>Why Choose US</p>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Learn about ONE and what we offer
          </h2>
          <p className="text-gray-600 max-w-3xl">
            The National Center for Human Rights is an independent public body that monitors rights,
            handles complaints, and operates under Law No. 51 of 2006. It holds ‘A’ status from the
            Global Alliance of National Human Rights Institutions.
          </p>
        </div>

        {/* Cards */}
        <div className='grid md:grid-cols-2 gap-6'>
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              className='bg-gray-100 rounded-lg shadow hover:shadow-md transition-all'
              custom={idx}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={card}
            >
              <div className='p-6'>
                <div className={`p-3 rounded-md w-fit mb-4 ${f.bgColor}`}>
                  <div className={`${f.iconColor} text-2xl`}>
                    {f.icon}
                  </div>
                </div>
                <h3 className='font-semibold text-lg mb-2'>{f.title}</h3>
                <p className='text-gray-600'>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;

