import React, { useRef, useState, useCallback, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { AiOutlineSmallDash } from 'react-icons/ai';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { CgMoreVerticalR, CgCloseO } from 'react-icons/cg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const openMenu = useCallback(() => {
    menuRef.current.style.right = '0';
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    menuRef.current.style.right = '-350px';
    setIsMenuOpen(false);
  }, []);

  // Handle scroll to update active menu item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'services', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY + 100 >= element.offsetTop) {
          setMenu(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="navbar" className="navbar">
      <img src={logo} alt="Ayush Bhandari's Logo" />
      {!isMenuOpen && (
        <div className="nav-mob-open" onClick={openMenu}>
          <CgMoreVerticalR />
        </div>
      )}
      <nav>
        <ul ref={menuRef} className="nav-menu">
          <div onClick={closeMenu} className="nav-mob-close">
            <CgCloseO />
          </div>
          <li><AnchorLink className="anchor-link" href="#home"><p onClick={() => setMenu('home')}>Home</p></AnchorLink>{menu === 'home' ? <AiOutlineSmallDash /> : <></>}</li>
          <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu('about')}>About</p></AnchorLink>{menu === 'about' ? <AiOutlineSmallDash /> : <></>}</li>
          <li><AnchorLink className="anchor-link" offset={50} href="#experience"><p onClick={() => setMenu('experience')}>Experience</p></AnchorLink>{menu === 'experience' ? <AiOutlineSmallDash /> : <></>}</li>
          <li><AnchorLink className="anchor-link" offset={50} href="#projects"><p onClick={() => setMenu('projects')}>Projects</p></AnchorLink>{menu === 'Projects' ? <AiOutlineSmallDash /> : <></>}</li>
          <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => setMenu('contact')}>Contact</p></AnchorLink>{menu === 'contact' ? <AiOutlineSmallDash /> : <></>}</li>
          </ul>
      </nav>
    </header>
  );
};

export default Navbar;