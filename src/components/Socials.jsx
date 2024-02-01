import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Socials = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/web-and-app-developer-expert/',
      color: '#0077b5',
      label: 'LinkedIn',
    },
    {
      icon: FaGithub,
      url: 'https://github.com/ArfahAli',
      color: '#333',
      label: 'GitHub',
    },
    {
      icon: FaFacebook,
      url: 'https://www.facebook.com/alif.ain.1800',
      color: '#4267B2',
      label: 'Facebook',
    },
    {
      icon: FaTwitter,
      url: 'https://twitter.com/',
      color: '#1DA1F2',
      label: 'Twitter',
    },
    {
      icon: FaInstagram,
      url: 'https://www.instagram.com/arfah_ali_/',
      color: '#E1306C',
      label: 'Instagram',
    },
  ];

  return (
    <div className='text-white pt-20'>
      <div className='container mx-auto px-2 text-center'>
        <div ref={ref}>
          <h2 className='text-4xl font-bold mb-6'>
            Connect with Me
            <div
              className={`h-1 bg-white transition-all duration-700 ${
                inView ? 'w-[10em]' : 'w-0'
              } mx-auto mt-2`}
              style={{ transitionDelay: '300ms' }}
            />
          </h2>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-16 mt-16'>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-110  '
              aria-label={social.label}
            >
              <social.icon
                className='text-6xl '
                style={{ color: social.color }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;
