import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Logo from './Logo';
import { useState } from 'react';
const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can add the logic to send data to your server or API endpoint
    // Example using fetch:
    // fetch('YOUR_API_ENDPOINT', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
    
    console.log('Form Submitted', formData);
    // Reset form or show success message
  };

  return (
    <footer className='bg-bgDark text-white mb-2 '>
      {/* <div className='border-t border-gray-700 text-center mt-10'></div> */}
      <div className='container  py-0'>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='w-full lg:w-1/2 mb-6 lg:mb-0'>
            <Logo font='font-logoArfah' text='Arfah' />
            <p className='mt-[-23px] mb-5 text-[0.8em] mx-[9px]'>
              Your Coding Girl<span className='text-purple text-xl'>.</span>
            </p>
            <h2 className='text-3xl font-bold mb-4'>Contact Me</h2>
           <form onSubmit={handleSubmit} className='space-y-4 max-w-md mb-6'>
          <div className='flex flex-col sm:flex-row gap-4'>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              className='w-full p-2 bg-white border-2 border-gray-700 rounded focus:outline-none focus:border-purple text-black'
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type='email'
              name='email'
              placeholder='Enter Your Email'
              className='w-full p-2 bg-white border-2 border-gray-700 rounded focus:outline-none focus:border-purple text-black'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <textarea
            name='message'
            placeholder='Message'
            className='w-full p-2 bg-white border-2 border-gray-700 rounded focus:outline-none focus:border-purple text-black'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type='submit'
            className='w-full py-2 border-2 border-purple bg-[#121212] text-white rounded transition duration-300 ease-in-out hover:bg-purple'
          >
            SEND
          </button>
          <p>
                If you have any questions, please don't hesitate to contact me.
              </p>
        </form>
          </div>
          <div className='w-full lg:w-1/2 lg:text-right'>
            <h3 className='text-3xl font-semibold mb-4'>Get in Touch</h3>
            <ul className='space-y-4'>
            
              <li className='flex justify-end items-center'>
                <FaMapMarkerAlt className='mr-2' />
                <span>Arfah Ali, Wah, Pakistan</span>
              </li>
              <li className='flex justify-end items-center'>
                <FaEnvelope className='mr-2' />
                <span>arfahali994@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='border-t border-gray-700 text-center  pt-3'>
          <p className='text-md'>Made with ❤️ by Arfah.</p>

          <p className='text-sm mt-1'>
            {' '}
            All Rights Reserved© {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
