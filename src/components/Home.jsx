import React, { useRef } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Footer from './Footer';
import Socials from './Socials';
import Projects from './Projects';
import Certifications from './Certificates';
import Testimonials from './Testimonials';
import Services from './Services';

const Home = () => {
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const testimonialsRef = useRef(null);

  const scrollToProjects = (e) => {
    e.preventDefault();
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCertifications = (e) => {
    e.preventDefault();
    certificationsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTestimonials = (e) => {
    e.preventDefault();
    testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='text-textLight px-10'>
      <Navbar
        onProjectsClick={scrollToProjects}
        onCertificationsClick={scrollToCertifications}
        onTestimonialsClick={scrollToTestimonials}
      />
      <Hero />
      <Skills />
      {/* Uncomment if Services component is needed
      <Services /> */}
      <div ref={projectsRef}>
        <Projects />
      </div>
      {/* <div ref={certificationsRef}>
        <Certifications />
      </div> */}
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
      <Socials />
      <Footer />
    </div>
  );
};

export default Home;
