import React from 'react';
import './GlowingButton.css'; // Importing the custom CSS

const GlowingButton = (props) => {
  const { text } = props;
  return (
    <a
      href='/'
      className='relative z-10 px-12 py-3 text-xl text-white  rounded-full hover:opacity-100 focus:text-black focus:bg-transparent glowing-btn'
    >
      {text}
    </a>
  );
};

export default GlowingButton;
