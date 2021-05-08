import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { PlayerHomeMenuData } from '../../data/PlayerHomeMenuData'
import { Button } from '../Button'
import {FaTimes} from 'react-icons/fa'

const DropdownContainer = styled.div`
position: fixed;
z-index:999;
width:100%;
height:100%;
background:linear-gradient(to right top, #65dfc9, #6cdbeb);
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-out;
opacity:${({isOpen})=>(isOpen?'1':'0')};
top:${({isOpen})=>(isOpen?'0':'-100%')};

`;
const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`;
const CloseIcon = styled(FaTimes)`
color: #fff;
`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(4,80px);
text-align:center;
margin-bottom:4rem;

@media screen and (max-width:480px){
    grid-template-rows:repeat(4,60px)
}
`;
const DropdownLink = styled(Link)`
display:flex;
align-items:center;
justify-content:center;
color: #fff;
font-size:1.5rem;
text-decoration:none;
list-style:none;
color: #fff;
cursor:pointer;
transition:0.2s ease-in-out;

&:hover{
    color: black
}
`;
const BtnWrapper = styled.div`
display:flex;
justify-content:center
`;

function PlayerHomeDropdown({isOpen,toggle,changeToGallery,changeToProfile,changeToNotification,changeToGuide}) {
    const GalleryChange=()=>{
        changeToGallery(true);
        changeToProfile(false);
        changeToNotification(false)
        changeToGuide(false);
    }
    const ProfileChange=()=>{
        changeToGallery(false);
        changeToProfile(true);
        changeToNotification(false);
        changeToGuide(false);
    }
    const NotificationChange=()=>{
        changeToNotification(true);
        changeToGallery(false);
        changeToProfile(false);
        changeToGuide(false)
    }
    const GuideChange=()=>{
        changeToGuide(true)
        changeToNotification(false);
        changeToGallery(false);
        changeToProfile(false);
    
    }
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
<Icon onClick={toggle} >
<CloseIcon/>
</Icon>
<DropdownWrapper>
    <DropdownMenu>
        
            <DropdownLink onClick={ProfileChange}>
            Profile
            </DropdownLink>
            <DropdownLink onClick={GalleryChange}>
            Gallery
            </DropdownLink>
            <DropdownLink onClick={NotificationChange}>
            Notifications
            </DropdownLink>
            <DropdownLink onClick={GuideChange}>
            Guide
            </DropdownLink>
    </DropdownMenu>
    <BtnWrapper>
        <Button primary="true" round="true" big="true" to="/contact">
            End-Game
        </Button>
      
    </BtnWrapper>
    <br/>
   { /*<BtnWrapper>
        <Button primary="true" round="true" big="true" to="/contact">
            Register
          
        </Button>
      
    </BtnWrapper>*/}
</DropdownWrapper>
        </DropdownContainer>
            
        
    )
}

export default PlayerHomeDropdown
