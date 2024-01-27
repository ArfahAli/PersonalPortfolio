import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
const testimonialsData = [
  {
    id: 1,
    name: 'Mukhtiar Zamin',
    handle: '@mukhtiarzamin',
    avatar: 'https://source.unsplash.com/random/128x128?sig=2',
    testimonial:
      'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
    hashtag: '#gettingtheidea',
  },
  {
    id: 2,
    name: 'Esha Mehmood',
    handle: '@eshamehmood',
    avatar: 'https://source.unsplash.com/random/128x128?sig=3',
    testimonial:
      'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
    hashtag: '#YesorNo',
  },
  {
    id: 3,
    name: 'Ali Muhammad',
    handle: '@alimuhammad',
    avatar: 'https://source.unsplash.com/random/128x128?sig=1',
    testimonial:
      'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
    hashtag: '#right',
  },
  // ... Add more testimonials as needed
];

const TestimonialCard = ({ name, handle, avatar, testimonial, hashtag }) => {
  return (
    <div className='flex flex-col items-left p-6  bg-[#111] text-white rounded-lg shadow-lg leading-7'>
      {/* Image, name, and handle row with responsive adjustments */}
      <div className='flex items-center'>
        <img
          className='rounded-full w-16 h-16 object-cover'
          src={avatar}
          alt={name}
        />
        <div className='ml-4'>
          <p className='font-semibold'>{name}</p>
          <p className='text-sm text-gray-400'>{handle}</p>
        </div>
        {/* Twitter Icon with right alignment and responsive size */}
        <FaLinkedin
          className='ml-auto text-blue-400'
          style={{
            fontSize: '1.7rem',
          }}
        />
      </div>

      {/* Testimonial text with responsive margin-top */}
      <p className='mt-4 text-gray-300'>{testimonial}</p>
      <p className='text-blue-400'>{hashtag}</p>

      {/* Footer icon with right alignment */}
      <div className='flex justify-end w-full pt-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-blue-400'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        ></svg>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <section className='py-12'>
      <div className='container mx-auto px-2'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-semibold text-white' ref={ref}>
            Testimonials
          </h2>
          <div
            className={`h-1 bg-white transition-all duration-700 ${
              inView ? 'w-[15rem]' : 'w-0'
            } mx-auto mt-2`}
            style={{ transitionDelay: '300ms' }}
          />
        </div>
        <div className='grid  grid-cols-1 lg:grid-cols-3 gap-20'>
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
