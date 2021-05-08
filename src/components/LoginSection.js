import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { Button } from './Button';
import Modal from './Modal';
import './LoginSection.css'

import LoginNavbar from './LoginNavbar';
const SignInSection = styled.section`
height:100%;
max-height:1100px;
position:relative;
overflow:hidden

`;

const SignInWrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
position:relative;
`
const LoginVideo = styled.video`
 width:100%;
 height:100%;
 object-fit:cover;
  
`
function LoginSection() {
    const [showModal,setShowModal]=useState(false);
    const openModal=()=>{
        setShowModal(prev=>!prev);
      }

      useEffect(()=>{
          openModal();
      },[])
    return (
        <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
         <Modal />
      </div>
             
       
    )
}

export default LoginSection
