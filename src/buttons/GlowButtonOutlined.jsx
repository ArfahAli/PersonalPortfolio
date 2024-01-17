import React from 'react';
import './GlowButtonOutlined.css'; // Importing the custom CSS

const GlowingButtonOutlined = (props) => {
  const { text } = props;
  return (
    <a
      href='/'
      className='relative z-10 px-12 py-3 text-xl text-white  rounded-full hover:opacity-100 focus:text-black focus:bg-transparent glowingout-btn'
    >
      {text}
    </a>
  );
};

export default GlowingButtonOutlined;
