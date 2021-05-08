import React, { useState } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import LoginNavbar from '../components/LoginNavbar';
import LoginSection from '../components/LoginSection';

import { SliderData } from '../data/SliderData';
import fire from '../firebase';
import GlobalStyles from '../globalStyles';
function Login() {
    const [isOpen,setIsOpen]=useState(false);
    
    const toggle =()=>{
      setIsOpen(!isOpen);
    }
    const navigate=useHistory()
  const authListner=()=>{

    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        if(user.displayName === "Player"){
          navigate.push('/player-home')
        }else if(user.displayName === "Scout"){
          navigate.push('/scout-home')
        }
      
      }
    })
  }
  useEffect(()=>{
    authListner()
},[])
    return (
        <>
        <GlobalStyles/>
        <LoginNavbar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <LoginSection/>
        </>
    )
}

export default Login
