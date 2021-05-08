import styled from 'styled-components';

export const PlayerContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const PlayerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const PlayerCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const PlayerImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px white;
`;

export const PlayerHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;


export const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
 
`;

export const PlayerDesc = styled.p`
  margin-bottom: 1rem;
  color:red;
  text-align:center;
  text-transform:uppercase;
  transform:translateY(600px);
  transition:0.5s;
  opacity:0;
`;

export const PlayerFoot = styled.p`
  margin-bottom: 1rem;
  color:red;
  text-align:center;
  text-transform:uppercase;
  transform:translateY(-600px);
  opacity:0;
  transition:0.5s;
`;
export const PlayerAbility = styled.p`
  margin-bottom: 1rem;
  color:red;
  text-align:center;
  text-transform:uppercase;
  transform:translateY(700px);
  transition:0.5s;
  opacity:0;
`;
export const PlayerPosition = styled.p`
  margin-bottom: 1rem;
  color:red;
  text-align:center;
  text-transform:uppercase;
  transform:translateY(800px);
  transition:0.5s;
  opacity:0;
`;


export const PlayerButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: green;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: white;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: black;
  }
`;
export const Section = styled.section`
width: 100%;
height: 100%;
padding:4rem 0rem;
display:flex;
justify-content:center;
align-items:center
`;
export const Video =styled.video`
object-fit: cover;
   width: 100%;
   height: 100%;
   position: fixed;
   z-index: -1;
`;
export const ContainerDiv= styled.div`
position: relative;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
margin:40px 0;


`;

export const ImgDiv= styled.div`
img{

 
    max-width:100%;
  max-height:100%;
 
  
}
`;
export const ContentBxDiv= styled.div`
 
`;

