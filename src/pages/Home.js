import React, { useState } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import { SliderData } from '../data/SliderData';
import fire from '../firebase';
import GlobalStyles from '../globalStyles';

function Home() {
  const [isOpen,setIsOpen]=useState(false);
  const navigate=useHistory()
  const toggle =()=>{
    setIsOpen(!isOpen);
  }


  return (
   <>
   <GlobalStyles/>
   <Navbar toggle={toggle}/>
   <Dropdown isOpen={isOpen} toggle={toggle}/>
   <Hero slides={SliderData}/>
   
       
   </>
  );
}

export default Home;
