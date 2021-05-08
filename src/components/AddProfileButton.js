import React from 'react'
import styled, { keyframes } from 'styled-components'

function AddProfileButton() {
   
    return (
       <Button>
       <span></span>
       <span></span>
       <span></span>
       <span></span>
           Create Profile
       </Button>
    )
}

export default AddProfileButton
const animate1 = keyframes`
0%{
left:-100%
}
50%,100%{
left:100%
}
`;
const animate2 = keyframes`
0%{
top:-100%
}
50%,100%{
top:100%
}
`;
const animate3 = keyframes`
0%{
right:-100%
}
50%,100%{
right:100%
}
`;
const animate4 = keyframes`
0%{
bottom:-100%
}
50%,100%{
bottom:100%
}
`;
const Button = styled.a`
position:absolute;
-webkit-box-reflect:below 1px linear-gradient(transparent,#0005);
overflow:hidden;
top:15rem;
right:12.5rem;
text-transform:uppercase;
text-decoration:none;
transition:0.5s;
padding:25px 30px;
color:#03e9f4;
font-size:24px;
letter-spacing:4px;
cursor: pointer;
/* iphone 5/se*/
@media only screen and (device-width: 320px) and (device-height: 568px) {
    margin-right:0.5rem;
}
/* ipad pro*/
@media only screen and (device-width: 1024px){
  margin-left:20rem
}
/* ipad */
@media only screen and (device-width: 768px) {
  margin-right:2rem;
}
/* iphone x */
@media only screen and (device-width : 375px) and (device-height:812px){
  
margin-right:2rem;
}
/* Galaxy fold */
@media only screen and (device-width : 280px) {
  
  margin-right:-1rem;
  }
  /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px) {
  
  margin-right:2rem;
  }
    /* iphone 6/7/8plus */
@media only screen and (device-width : 414px) and (device-height:736px) {
  
  margin-right:3rem;
  }
  /* Moto G4,Galaxy s5*/
  @media only screen and (device-width : 360px) and (device-height:640px) {
  
  margin-right:1.5rem;
  }
  /* Pixel 2*/
  @media only screen and (device-width : 411px) and (device-height:731px) {
  
  margin-right:2.5rem;
  }
   /* Pixel 2 xl*/
   @media only screen and (device-width : 411px) and (device-height:823px) {
  
  margin-right:3rem;
  }
  @media only screen and (device-width: 540px) and (device-height: 720px) {
    margin-right:7rem;
}
@media screen and (max-width:768px){
    right:35px;
    background:rgba(255,255,255,0.05);
white-space:nowrap;
outline:none;
border:none;
border-radius:8px;
min-width:100px;
max-width:200px;
cursor:pointer;
text-decoration:none;
transition:0.3s;
display:flex;
justify-content:center;
align-items:center;
padding:${({big})=>(big?'16px 40px':'14px 24px')};
color:${({primary})=>(primary?'#fff':'#000d1a')};
font-size:${({big})=>(big?'20px':'14px')};
box-shadow: 0 15px 35px rgba(0,0,0,0.2);
backdrop-filter: blur(10px);
transition:1s;
&:hover{
transform:translateY(-2px);
}
}
&:hover{
background:#03e9f4;
color:#050801;
box-shadow:0 0 5px #03e9f4,
           0 0 25px #03e9f4,
           0 0 50px #03e9f4,
           0 0 200px #03e9f4;
}
span{
    position:absolute;
    display:block;
   
    &:nth-child(1){
    top:0;
    left:-100%;
    width:100%;
    height:2px;
    background:linear-gradient(99deg,transparent,#03e9f4);
    animation:${animate1} 1s linear infinite;
  
    }
    &:nth-child(2){
    top:-100%;
    right:0;
    width:2px;
    height:100%;
    background:linear-gradient(180deg,transparent,#03e9f4);
    animation:${animate2} 1s linear infinite;
    animation-delay:0.25s;
   
    }
    &:nth-child(3){
    bottom:0;
    right:-100%;
    width:100%;
    height:2px;
    background:linear-gradient(270deg,transparent,#03e9f4);
    animation:${animate3} 1s linear infinite;
    animation-delay:0.5s;
   
    }
    &:nth-child(4){
    bottom:-100%;
    left:0;
    width:2px;
    height:100%;
    background:linear-gradient(270deg,transparent,#03e9f4);
    animation:${animate4} 1s linear infinite;
    animation-delay:0.75s;
   
    }
  
}
`;
