import React, { useState } from 'react'
import Dropdown from '../components/Dropdown';
import Navbar from '../components/Navbar'
import GlobalStyles from '../globalStyles';
import Player from '../pages/Player';
import { playerData } from '../pages/Player/PlayerData';

function PlayerPage() {
    const [isOpen,setIsOpen]=useState(false);
    const toggle =()=>{
      setIsOpen(!isOpen);
    }
    
    return (
        <>
            <GlobalStyles/>
   <Navbar toggle={toggle}/>
   <Dropdown isOpen={isOpen} toggle={toggle}/> 
   <Player heading="PLAYERS" data={playerData}/>
        </>
    )
}

export default PlayerPage
