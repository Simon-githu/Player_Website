import React, { useState } from 'react'
import styled,{css} from 'styled-components/macro'
import {Link, useHistory} from 'react-router-dom'
import { PlayerHomeMenuData } from '../../data/PlayerHomeMenuData'
import {CgMenuRight} from 'react-icons/cg';
import { Button } from '../Button';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import Swal from 'sweetalert2'
import fire from '../../firebase';
import { useEffect } from 'react';
import Loading from '../Loading';
import withReactContent from 'sweetalert2-react-content'
import { GiSoccerBall } from 'react-icons/gi';
const Nav = styled.nav`
height: 60px;

display:flex;
justify-content:space-between;
padding:1rem 2rem;
z-index:100;
position:fixed;
width:100%;

`;

const NavLink = css`
color:#fff;
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
cursor:pointer;
text-decoration:none;

`;
const Logo = styled(Link)`
${NavLink}
font-style:italic
`

const MenuBars =styled(CgMenuRight)`
display:none;
@media screen and (max-width:768px){
    display:block;
  background-size:contain;
  height:40px;
  width:40px;
  cursor:pointer;
  position:absolute;
  top:0;
  right:0;
  transform:translate(-50%,25%);
  color:#fff
}
`;
const NavMenu =styled.div`
display:flex;
align-items:center;
margin-right:-48px;
@media screen and (max-width:768px){
    display:none;

}
`;
const NavMenuLinks =styled(Link)`
${NavLink}
`
const NavBtn =styled.div`
display:flex;
align-items:center;
margin-right:24px;

@media screen and (max-width:768px){
    display:none;
    
}
`


const PlayerHomeNav = ({toggle}) => {
 const navigate = useHistory();
 const [isLoading, setIsLoading] = useState(true);
 useEffect(() => {

  setTimeout(() => {
    setIsLoading(false);
  }, 500);


 }, [])
 const toKickOff=()=>{
  const MySwal = withReactContent(Swal)

MySwal.fire({
  title: <p>Hello World</p>,
  footer: 'Copyright 2018',
  icon:"question",
  didOpen: () => {
    // `MySwal` is a subclass of `Swal`
    //   with all the same instance & static methods
    MySwal.clickConfirm()
  }
}).then(() => {
  return MySwal.fire({
    title: 'Logout',
  text: "Do you wish to logout?",
  icon: 'question',
  showCancelButton: true,
  confirmButtonText: 'Yes, logout!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true,
  cancelButtonColor:"red",
  confirmButtonColor:"green",
  allowOutsideClick:false
  })
}).then((res)=>{
  if (res.isConfirmed) {
    let timerInterval
    Swal.fire({
      title: 'Logging you out!',
      html: 'See you in second half',
      timer: 2000,
      timerProgressBar: false,
      background:"transparent",
    
      backdrop:'linear-gradient(to right top, #65dfc9, #6cdbeb)',
      allowOutsideClick:false,
   
      didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        fire.auth().signOut()
        navigate.push('/')
      }
    })
  } 
})
 }
 
    return (
     <> {isLoading?<Loading/>:
       <Nav>
       
           <Logo to="/player-home">PLayeR</Logo> 
           <MenuBars onClick={toggle}/>
           <NavMenu>
             {PlayerHomeMenuData.map((item,index)=>(
                 <NavMenuLinks to={item.link} key={index}>
                     {item.title}
                 </NavMenuLinks>
             ))}
           </NavMenu>
         <NavBtn>
         <Button
       
       primary="true"
      onClick={toKickOff}
     >
       End<SportsSoccerIcon/>Game
     </Button>
         </NavBtn>
       </Nav>
      }</>
    )
}

export default PlayerHomeNav
