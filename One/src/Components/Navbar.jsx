import React, { useState } from 'react';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  Bars3Icon,
  XMarkIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown2Open, setMobileDropdown2Open] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 w-full text-black z-50 shadow bg-slate-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center flex-wrap'>

        {/* Logo */}
        <div className='flex items-center flex-shrink-0'>
          <img src={logo} alt='Logo' className='text-xl w-24 sm:w-28 md:w-32' />
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex flex-wrap space-x-4 lg:space-x-8 font-medium text-sm lg:text-base'>
          <li className='hover:underline cursor-pointer'>
            <a href="#">Home</a>
          </li>

          <li
            className='relative cursor-pointer'
            onMouseEnter={() => setDropdownOpen('about')}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className='flex items-center space-x-1 hover:underline'>
              <a href='#'> About Us </a>
              <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen === 'about' ? 'rotate-180' : ''}`} />
            </div>
            {dropdownOpen === 'about' && (
              <div className='absolute top-full mt-2 w-44 bg-white text-black shadow-lg z-50 font-semibold animate-fade-in'>
                <ul className='flex flex-col items-start space-y-2 py-2'>
                  <li><a href="#" className="block px-4 py-2">Our Vision</a></li>
                  <li><a href="#" className="block px-4 py-2">Mission Statement</a></li>
                  <li><a href="#" className="block px-4 py-2">Overview</a></li>
                </ul>
              </div>
            )}
          </li>

          <li
            className='relative cursor-pointer'
            onMouseEnter={() => setDropdownOpen('academics')}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className='flex items-center space-x-1 hover:underline'>
              <a href='#'> Academics </a>
              <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen === 'academics' ? 'rotate-180' : ''}`} />
            </div>
            {dropdownOpen === 'academics' && (
              <div className='absolute top-full mt-2 w-44 bg-white text-black shadow-lg z-50 font-semibold animate-fade-in'>
                <ul className='flex flex-col items-start space-y-2 py-2'>
                  <li><a href="#" className="block px-4 py-2">Program</a></li>
                  <li><a href="#" className="block px-4 py-2">Admission</a></li>
                  <li><a href="#" className="block px-4 py-2"> Research</a></li>
                </ul>
              </div>
            )}
          </li>

          <li className='hover:underline cursor-pointer'><a href="#">Student Support</a></li>
          <li className='hover:underline cursor-pointer'><a href="#">Tuition</a></li>
        </ul>

        {/* Search & Apply */}
        <div className='hidden md:flex items-center mt-4 md:mt-0'>
          <div className='relative group transition-all duration-300 w-full'>
            <input
              type='text'
              placeholder='Search'
              className='border border-gray-300 pl-8 pr-20 py-2 rounded-md text-sm w-40 group-hover:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            <img
              src={search}
              alt='Search Icon'
              className='absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none'
            />
            <button className='absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#0D95C9] text-white text-xs px-3 py-2 rounded-md hover:bg-[#0b7eb3] transition duration-300'>
              Apply
            </button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden mt-2'>
          <button onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon className='h-6 w-6 text-black' />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-4/6 sm:w-3/5 bg-gray-100 text-black z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto scroll-smooth`}>
        <div className='flex justify-end p-4'>
          <button onClick={() => setMobileMenuOpen(false)}>
            <XMarkIcon className='h-10 w-10 p-2 border border-gray-400 rounded' />
          </button>
        </div>

        {/* Logo */}
        <div className='flex justify-center mb-6'>
          <img src={logo} alt='Logo' className='h-10 sm:h-12 animate-spin-slow mr-8' />
        </div>

        <ul className='font-normal text-center divide-y divide-gray-300 text-base'>
          <li><a href="#" className='py-6 block mr-2'>Home</a></li>

          {/* About Us Dropdown */}
          <li className='py-2'>
            <div className='flex justify-center items-center cursor-pointer' onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}>
              <span className='flex-grow ml-10 text-center font-normal'> About Us</span>
              <div className={`flex h-12 w-12 items-center justify-center rounded hover:border border-gray-400 transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`}>
                <ChevronDownIcon className='h-6 text-gray-300' />
              </div>
            </div>
            {mobileDropdownOpen && (
              <ul className='mt-2 w-full flex flex-col items-center divide-y divide-gray-200'>
                <li><a href='' className='flex items-center block w-full py-4 px-4 hover:bg-gray-100 cursor-pointer'><ChevronRightIcon className='h-4 w-4 mr-1' /> Our Mission</a></li>
                <li><a href='' className='flex items-center py-4 hover:bg-gray-100 cursor-pointer'><ChevronRightIcon className='h-4 w-4 mr-1' /> Vision Statement</a></li>
                <li><a href='' className='flex items-center py-4 hover:bg-gray-100 cursor-pointer'><ChevronRightIcon className='h-4 w-4 mr-1' /> Overview</a></li>
              </ul>
            )}
          </li>

          {/* Academics Dropdown */}
          <li className='py-2'>
            <div className='flex justify-center items-center cursor-pointer' onClick={() => setMobileDropdown2Open(!mobileDropdown2Open)}>
              <span className='flex-grow ml-10 text-center font-normal'> Academics </span>
              <div className={`flex h-12 w-12 items-center justify-center rounded hover:border border-gray-400 transition-transform duration-300 ${mobileDropdown2Open ? 'rotate-180' : ''}`}>
                <ChevronDownIcon className='h-6 text-gray-300' />
              </div>
            </div>
            {mobileDropdown2Open && (
              <ul className='mt-2 flex flex-col items-center divide-y divide-gray-200'>
                <li><a href='' className='flex items-center py-4 hover:bg-gray-100 cursor-pointer'><ChevronRightIcon className='h-4 w-4 mr-1' /> Program</a></li>
                <li><a href='' className='flex items-center py-4 hover:bg-gray-100 cursor-pointer'><ChevronRightIcon className='h-4 w-4 mr-1' /> Admission</a></li>
                <li><a href='' className='flex items-center py-4 hover:bg-gray-100 cursor-pointer'><ChevronRightIcon className='h-4 w-4 mr-1' /> Research</a></li>
              </ul>
            )}
          </li>

          <li><a href='#' className='py-4 block w-full hover:bg-gray-100'>Student Support</a></li>
          <li><a href='#' className='py-4 block w-full hover:bg-gray-100'>Tuition</a></li>
          <li className='py-4 block w-full'></li>
        </ul>

        {/* Contact Icons */}
        <div className='flex justify-center gap-6 mt-10 text-black pb-8'>
          <DevicePhoneMobileIcon className='h-5 w-5' />
          <EnvelopeIcon className='h-5 w-5' />
          <FaInstagram className='h-5 w-5' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



