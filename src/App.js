import React, { useState } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import fire from './firebase'
import Home from './pages/Home';
import PlayerHomePage from './pages/PlayerHomePage';
import ScoutHomePage from './pages/ScoutHomePage';
function App() {
  const navigate=useHistory();
  const [player,setPlayer]=useState(false);
  const [scout,setScout]=useState(false)

  
  useEffect(()=>{
    const authListner=()=>{
      fire.auth().onAuthStateChanged((user)=>{
        if(user){
          if(user.displayName === "Player"){
            setPlayer(true)
            navigate.push('/player-home')
            
          }else if(user.displayName === "Scout"){
            setScout(true)
            navigate.push('/scout-home')
          }
        
        }
      })
    }
    authListner()
   
},[navigate])


  return (
   <>
   
  {player?<PlayerHomePage/>:scout?<ScoutHomePage/>:<Home/>}
   </>
  );
}

export default App;
