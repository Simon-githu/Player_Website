import React,{ useEffect } from 'react';
import styled from 'styled-components';
import '../Player/Player.css'
import {Video,Section, PlayerPosition,PlayerDesc,
  ContainerDiv,ImgDiv,ContentBxDiv,PlayerFoot
  ,PlayerAbility
} from './PlayerElements';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Player = ({ heading, data }) => {
  useEffect(()=>{
    Aos.init()
})
  return (
    <>
    <Video src='/videos/video-4.mp4' autoPlay loop muted />
    <Section>
      <ContainerDiv>
      {data.map((product, index) => {
          return (
        <CardDiv
        data-aos="zoom-in"
              data-aos-easing="ease-in-sine" 
                 data-aos-duration="3000"
        >
          <ImgDiv
          
          >
 <img src={product.img} alt={product.alt}/>
          </ImgDiv>
          <ContentDiv>
            <ContentBxDiv>
            <PlayerTitle>{product.name}</PlayerTitle>
                <PlayerAge>{product.age}</PlayerAge>
                <PlayerFoot>{product.foot}</PlayerFoot>
                <PlayerDesc>Known As: #{product.desc}</PlayerDesc>
                <PlayerAbility>Ability: {product.ability}</PlayerAbility>
                <PlayerPosition>{product.price}</PlayerPosition>
            </ContentBxDiv>
          </ContentDiv>
        </CardDiv>
        )})}
      </ContainerDiv>
    </Section>
    </>
  );
};

export default Player;

const ContentDiv = styled.div`
position:absolute;
bottom:-400px;
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
z-index:10;
flex-direction:column;
backdrop-filter:blur(15px);
box-shadow:0 -10px 10px rgba(0,0,0,0.1);
border:1px solid rgba(255,255,255,0.2);
transition:0.5s;


`;
const PlayerTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  color:red;
  text-align:center;
  text-transform:uppercase;
 opacity:0;
 transform:translateY(-800px);
transition:0.5s;
line-height:1.1em;
margin:20px 0 15px;
text-transform:initial
`;
const PlayerAge = styled.p`
margin-bottom: 1rem;
color:red;
text-align:center;
text-transform:uppercase;
transform:translateY(-700px);
opacity:0;
transition:0.5s;
`;
const CardDiv= styled.div`
position: relative;
width:300px;
height:400px;
margin:20px;
overflow:hidden;
box-shadow:0 5px 15px rgba(0,0,0,0.2);
border-radius:15px;
display:flex;
justify-content:center;
align-items:center;

&:hover{

${ContentDiv}{
  bottom:0px;
}
${PlayerTitle}{
  opacity:1;
 transform:translateY(0px)
}
${PlayerAge}{
  opacity:1;
 transform:translateY(0px)
}
${PlayerFoot}{
  opacity:1;
 transform:translateY(0px)
}
${PlayerDesc}{
  opacity: 1;
  transform:translate(0px)
}
${PlayerAbility}{
  opacity: 1;
  transform:translate(0px)
}
${PlayerPosition}{
  opacity: 1;
  transform:translate(0px)
}
}
`;