import React from 'react';
import './hero.css';
import profile from '../../assets/profile.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/resume.pdf'; // Import the resume file

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt='Profile' />
      <h1>
        <span>Hello! I'm </span>Ayush Bhandari
      </h1>
      <p>Computer Engineering Student, a keen learner, and coding lover</p>
      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>
        <a
          // href={resume} // Link to the resume file
          // target='_blank' // Open in a new tab
          // rel='noopener noreferrer' // Security best practice
          // className='hero-resume'
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;