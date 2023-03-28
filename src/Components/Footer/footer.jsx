import React from 'react';
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import {FiTwitter} from  'react-icons/fi'
const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Naveen Kumar</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#ecpereance">Experience</a></li>
        <li><a href="#contect">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://facebook.com" target={"_blank"}><AiFillFacebook/></a>
      <a href="https://instragram.com" target={"_blank"}><GrInstagram/></a>
      <a href="https://twitter.com" target={"_blank"}><FiTwitter/></a>

      </div>
      <div className="footer__copyright">
        <small>&copy; Naveen Kumar Portfolio All right reserve</small>
      </div>
    </footer>
  );
}

export default footer;
