import React from 'react'
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Flogo from '../assets/Flogo.png'



const links = {
  "About Us": ["Features", "Solutions", "Pricing", "Tutorials", "Updates"],
  Academic: ["Terms Conditions", "Privacy Policy", "Cookies"],
  "Student Support": ["Terms Conditions", "Privacy Policy", "Cookies"],
  Tuition: ["Help Center", "FAQ"],
};

const Footer = () => {
  return (
    <motion.footer
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className='relative bg-[#293233] text-white px-6 py-12 md:px-20 overflow-hidden'
    >

      {/* Background Image */}
      <div className='absolute inset-0'>
            <img
            src={Flogo}
            alt='/'
            className='w-full h-full object-contain object-right opacity-20 ml-96 mt-20'/>
            <div className='absolute inset-0 bg-[#053F54] opacity-90' />
      </div>

      {/* Content */}
      <div className='relative z-10 grid grid-cols-1 md:grid-cols-5 gap-10'>
            {/* Logo Desc */}
            <div className='md:col-span-1 space-y-4'>
                  <img
                  src={Flogo} 
                  alt='/'
                  className='h-10 w-auto' />
                  <p className='text-sm leading-relaxed'>
                        We don't just teach nursing - we ignite futures and transform lives through world-class education and unwavering support.
                  </p>
                  <div className='flex space-x-4 pt-2 text-lg'>
                     <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />   
                  </div>
            </div>

            {/* Links */}
            {Object.entries(links).map(([section, items], i) => (
                  <div key={i}>
                        <h3 className='font-semibold mb-2'>{section}</h3>
                        <ul className='space-y-1'>
                              {items.map((item, j) => (
                                    <li key={j}>
                                          <a
                                          href='#'
                                          className='relative group inline-block text-sm transition-all'>
                                                {item}
                                                <span className='absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300'></span>
                                          </a>
                                    </li>
                              ))}
                        </ul>
                        </div>
            ))}
      </div>
      
      <div className='relative z-10 border-t border-white/10 mt-10 pt-4 text-sm text-center'>
           &copy;2025 ThaGreat. All rights reserved 
      </div>
      
    </motion.footer>
  )
}

export default Footer
