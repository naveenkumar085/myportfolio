import React from 'react';

import Header from './Components/Header/header';
import Nav from './Components/Nav/nav';
import About from './Components/About/about';
import Experience from './Components/Experience/experience';
import Contect from './Components/Contect/contect';
import Footer from './Components/Footer/footer';



const App =() =>{
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Contect/>
        <Footer/>


    </div>
  );
}

export default App;
