import React from 'react';
import './nav.css'
import{AiFillHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import{BiBook} from 'react-icons/bi'
import{RiContactsBook2Fill} from 'react-icons/ri'
// import{RiMessageLine} from 'react-icons/ri'
// import { useState } from 'react';

const nav = () => {
  // const[activeNav, setActiveNav]=useState("#")
  return (
    <nav>
      <a href='#'><AiFillHome/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#ecpereance'><BiBook/></a>
      <a href='#contect'><RiContactsBook2Fill/></a>
      {/* <a href='message'><RiMessageLine/></a> */}

    </nav>
  );
}

export default nav;
