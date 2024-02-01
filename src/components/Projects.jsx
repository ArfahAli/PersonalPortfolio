import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Clean Clothes - Laundry App',
    description:
      'A Laundry App made in React. Fully customizable and dynamic.',
    image: '/CleanClothes.png',
    githubLink: 'https://github.com/ArfahAli/Clean-Clothes-LaundaryApp',
    liveLink: 'https://clean-clothes-laundry-app.vercel.app/',

    // liveLink: 'https://project-one-live-link.com',
    tech: ['React', 'TailwindCSS', 'Firebase'],
  },
  
  {
    title: 'E-Commerce Web App',
    description: ' A fully functional E-Commerce Web App made with MERN Stack.',
    image: '/website.png',
    githubLink: 'https://github.com/ArfahAli/E-Commerce-Website---MERN-Stack',
    liveLink: 'https://fa21-bse-080.netlify.app',

    // liveLink: 'https://project-three-live-link.com',
    tech: ['React', 'Tailwind', 'MongoDB', 'Express', 'Node'],
  },
  {
    title: 'Societalize - Social Network App',
    description: 'A Campus Social Network made with React Native & Firebase.',
    image: '/societalize.png',
    githubLink: 'https://github.com/ArfahAli/societalize',
    liveLink: 'https://clean-clothes-laundry-app.vercel.app/',

    tech: ['React Native', 'Firebase', 'React Navigation', 'Expo'],
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className='bg-bgDark text-white py-16'>
      <div className='container mx-auto px-6'>
        <div ref={ref}>
          <h2 className='text-4xl font-bold text-center mb-16'>
            Projects
            <div
              className={`h-1 bg-white transition-all duration-700 ${
                inView ? 'w-[rem] md:w-[5em]' : 'w-0'
              } mx-auto mt-2`}
              style={{ transitionDelay: '300ms' }}
            />
          </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6'>
          {projects.map((project, index) => (
            <a
              href={project.liveLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div
                key={index}
                className='bg-[#1a1a1b] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-900 hover:scale-[1.03]'
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-64 object-contain gradien bg-[#ededed]
                  '
                />
                <div className='p-4'>
                  <h3 className='text-2xl font-semibold mb-4'>
                    {project.title}
                  </h3>

                  <p className='mb-8'>{project.description}</p>
                  <p className='text-gray-300 py-3'>Tech Used</p>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className='bg-purple px-3 py-1 rounded-full text-sm '
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className='flex justify-between'>
                    <a
                      href={project.liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center text-purple-500 hover:text-purple-300 transition-colors duration-300  px-4 py-1 hover:bg-gray-500 rounded-full'
                    >
                      <FaGithub className='mr-2' />
                     <a href={project.githubLink}> GitHub </a>
                    </a>
                    {/* {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center text-purple-500 hover:text-purple-300 transition-colors duration-300 px-4 py-1 hover:bg-gray-500 rounded-full'
                      >
                        <FaExternalLinkAlt className='mr-2' />
                        Live
                      </a>
                    )} */}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
