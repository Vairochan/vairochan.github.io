    import React, { useState, useEffect } from 'react';
    
    const Header = () => {
      const [scrolled, setScrolled] = useState(false);
      
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
          <div className="container header-content">
            <div className="logo">
              <a href="#home">Vairochan</a>
            </div>
            <nav className="nav">
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
      );
    };
    
    export default Header;
    