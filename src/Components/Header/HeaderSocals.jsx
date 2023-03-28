import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'
import {AiOutlineInstagram} from 'react-icons/ai'

const HeaderSocals = () => {
  return (
    <div className='header__socials'>
    <a href="https://llinkedin.com" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com" target="_blank"><GoMarkGithub/></a>
    <a href="https://instragram.com" target="_blank"><AiOutlineInstagram/></a>
      
    </div>
  );
}

export default HeaderSocals;
