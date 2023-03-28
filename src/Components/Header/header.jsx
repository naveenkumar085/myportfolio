import React from 'react';
import './header.css'
import CTA from './CTA';
import ME from '../../assets/me.JPG'
import HeaderSocals from './HeaderSocals';

const header = () => {
  return (
    <header>
      <div className="container header__container">
          <h5>Hello I'm</h5>
          <h2>Naveen Kumar</h2>
          <h5 className="text-light">Fullstact Developer</h5>
          <CTA/>
          <HeaderSocals/>
          <div className="me">
            <img src={ME} alt="me"></img>
          </div>

          <a href="#contect" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  );
}

export default header;
