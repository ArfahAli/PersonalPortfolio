import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from './Logo';

const Navbar = ({
  onProjectsClick,
  onCertificationsClick,
  onTestimonialsClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className='flex justify-between items-center relative
      shadow-md bg-[#0a0a0a]'
    >
      <Logo font='font-logoArfah' text='Arfah' />
      <div className='md:hidden'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='outline-none focus:outline-none'
        >
          {isMenuOpen ? (
            <XIcon className='h-8 w-8 text-white transition duration-200 ease-in-out transform hover:rotate-180' />
          ) : (
            <MenuIcon className='h-8 w-8 text-white transition duration-200 ease-in-out transform hover:rotate-180' />
          )}
        </button>
      </div>
      <div
        className={`${
          isMenuOpen
            ? 'absolute left-0 top-full w-full bg-[#0a0a0a] z-10 flex flex-col items-start transition-all duration-300 ease-in'
            : 'hidden'
        } md:flex md:flex-row justify-start items-start`}
      >
        <button
          onClick={onProjectsClick}
          className='text-white px-5 py-2 text-[1.15em] hover:text-gray-300 hover:shadow-xs hover:-translate-y-[0.09em]'
        >
          Projects
        </button>
        <button
          onClick={onCertificationsClick}
          className='text-white px-5 py-2 text-[1.15em] hover:text-gray-300 hover:shadow-xs hover:-translate-y-[0.09em]'
        >
          Certifications
        </button>
        <button
          onClick={onTestimonialsClick}
          className='text-white px-5 py-2 text-[1.15em] hover:text-gray-300 hover:shadow-xs hover:-translate-y-[0.09em]'
        >
          Testimonials
        </button>

        <button
          className='bg-purple text-white font-bold px-8 py-2 rounded-full transition duration-300 ease-in-out transform hover:bg-purpleLighter hover:text-gray-300 hover:shadow-xl hover:-translate-y-1'
          style={{
            width: 'calc(100% - 2rem)',
            textAlign: 'center',
            marginLeft: '1rem',
            marginRight: '1rem',
          }}
          onClick={() => {
            window.open('https://linkedin.com/in/hanzlanouman', '_blank');
          }}
        >
          Get In Touch
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
