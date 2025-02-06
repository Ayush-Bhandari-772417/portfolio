import React from 'react';
import './footer.css';
import footer_logo from '../../assets/logo.png';
import { AiOutlineUser } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaDiscord, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img src={footer_logo} alt='Footer Logo' />
          <p>I am a lifetime learner with deep interest in learning, coding, and exploring the world.</p>
        </div>
        <div className='footer-top-right'>
          <div className='footer-email-input'>
            <AiOutlineUser />
            <input type='email' placeholder='Enter your email' />
          </div>
          <div className='footer-subscribe'>Subscribe</div>
        </div>
      </div>
      <hr />
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>© 2025 Ayush Bhandari. All rights reserved.</p>
        <div className='footer-bottom-right'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <FaFacebook className='social-icon' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='social-icon' />
          </a>
          <a href='https://discord.com' target='_blank' rel='noopener noreferrer'>
            <FaDiscord className='social-icon' />
          </a>
          <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='social-icon' />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='social-icon' />
          </a>
          <a href='https://yourportfolio.com' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='social-icon' /> {/* Replace with portfolio icon if available */}
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <FaTwitter className='social-icon' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;