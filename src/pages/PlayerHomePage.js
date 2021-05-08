import React, { useState } from 'react'
import HomePageSection from '../components/PlayerHomeComponents/HomePageSection'
import PlayerHomeNav from '../components/PlayerHomeComponents/PlayerHomeNav';
import GlobalStyles from '../globalStyles';
import PlayerHomeDropdown from '../components/PlayerHomeComponents/PlayerHomeDropdown';
import { useEffect } from 'react';
import Loading from '../components/Loading';
import fire from '../firebase';



function PlayerHomePage() {
    const [isOpen,setIsOpen]=useState(false);
    const [isLoading,setIsLoading]=useState(true)
    const [userNotVerified,setUserNotVerified]=useState(true);
    const [dataAvailable,setDataAvailable]=useState(false);
    const [galleryComponent,setGalleryComponent]=useState(false);
    const [profileComponent,setProfileComponent]=useState(false);
    const [notificationComponent,setNotificationComponent]=useState(false);
    const [guideComponent,setGuideComponent]=useState(false)
    const toggle =()=>{
      setIsOpen(!isOpen);
    }
   useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  
    fire.auth().onAuthStateChanged(user=>{
      if(user.emailVerified === true){
        setUserNotVerified(false);
       
        fire.firestore().collection("players").doc(user.email).onSnapshot((snapshot)=>{
          if(snapshot.data().Name == ""){
           setDataAvailable(false)
          }else if(snapshot.data().Name !== ""){
            setDataAvailable(true)
          }
        })
      }else{
        setUserNotVerified(true)
        
      }
    
    })
   
   }, [])
  
    return (
      
        <>
      
        {
          isLoading?<Loading/>:
          <>
        <GlobalStyles/>
        <PlayerHomeNav  notVerified={userNotVerified} toggle={toggle}/>
        
        <PlayerHomeDropdown 
        isOpen={isOpen} 
        toggle={toggle}
        changeToGallery={setGalleryComponent}
        changeToProfile={setProfileComponent}
        changeToNotification={setNotificationComponent}
        changeToGuide={setGuideComponent}
        />
         
       <HomePageSection 
       loading={isLoading} 
       notVerified={userNotVerified} 
       userData={dataAvailable}
       guideComponent={guideComponent}
       galleryComponent={galleryComponent}
       profileComponent={profileComponent}
       notificationComponent={notificationComponent}
       setGalleryComponent={setGalleryComponent}
       setProfileComponent={setProfileComponent}
       setNotificationComponent={setNotificationComponent}
       setGuideComponent={setGuideComponent}
       setUserData={setDataAvailable}
       />
       
       </>
       
        }
        
        </>
    )
}

export default PlayerHomePage

