import React from 'react'
import './HomePageSection.css'
import {FaUserAlt,FaBellSlash, FaPhotoVideo} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {GiSoccerKick, GiBookmarklet}  from 'react-icons/gi'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import PlayerProfile from '../PlayerHomeComponents/PlayerProfile'
import { useEffect } from 'react'
import fire from '../../firebase'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Loading from '../Loading'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import PlayerDetails from './PlayerDetails'
import AddProfileButton from '../AddProfileButton'
import Notification from './Notification'
import Gallery from './Gallery'
import Guide from './Guide'

function HomePageSection({loading,notVerified,userData,galleryComponent,profileComponent,guideComponent,
notificationComponent,setGalleryComponent,setProfileComponent,setNotificationComponent,setGuideComponent,setUserData}) {
  const navigate =useHistory();
 const [notification,setNotification] =useState(false);
 const [profile,setProfile] = useState(true)
 const [gallery,setGallery]=useState(false)
 const [guide,setGuide]=useState(false)
const [data,setData]=useState(false)
const [playerForm,setPlayerForm] = useState(false);



  const toNotification=()=>{
    if(!notVerified){
    setNotification(true);
    setGallery(false)
    setProfile(false)
    setGuideComponent(false)
    setGalleryComponent(false)
    setProfileComponent(false)
    }
  }
const toProfile=()=>{
  if(!notVerified){
  setProfile(true);
  setNotification(false)
  setGallery(false)
  setGuideComponent(false)
  setGalleryComponent(false)
  setNotificationComponent(false)
  }
}
const toGallery=()=>{
  if(!notVerified){
  setProfile(false);
  setNotification(false)
  setGallery(true)
  setGuideComponent(false)
  setNotificationComponent(false);
  setProfileComponent(false)
  }
}
const toGuide=()=>{
  if(!notVerified){
  setProfile(false);
  setNotification(false)
  setGallery(false)
  setGuideComponent(true)
  setNotificationComponent(false);
  setProfileComponent(false)
  }
}
useEffect(()=>{
  if(userData){
  
   setData(true)
  }
},[userData])
useEffect(()=>{
if(galleryComponent){
  setProfile(false)
  setNotification(false)
  setGuide(false)
}
if(profileComponent){
  setNotification(false)
  setGallery(false)
  setGuide(false)
}
if(notificationComponent){
  setProfile(false)
  setGallery(false)
  setGuide(false)
}
if(guideComponent){
  setProfile(false)
  setGallery(false)
  setNotification(false)
}
},[galleryComponent,profileComponent,notificationComponent,guideComponent])
const logout =()=>{
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
const editProfile=()=>{
  setPlayerForm(true)
}

  useEffect(()=>{
    Aos.init()
    
},[])
    return (
     <>
     {loading?<Loading/>:playerForm?<PlayerProfile/>:
        <main className="mainDiv">
        <section className="glass">
          <div className="dashboard">
            <div className="user">
            <img src="./images/modal.jpg" alt="" style={{borderRadius:"50%"}} />
            
              <h3>Player</h3>
              {notVerified?<div className="not-verified"><p style={{color:"#65dfc9"}}>Not Verified!</p></div>:
              (<div className="verified" 
              data-aos="fade-right"
              data-aos-easing="ease-in-sine" 
                 data-aos-duration="3000"
              ><GiSoccerKick style={{color:"red",position:"absolute",left:"12px"}}/><p style={{color:"red"}}>Verified</p>
              
        
              </div>
      
              )
              
              }
            </div>
            <div className="links">
              <div 
              data-aos="fade-right"
             
              data-aos-easing="ease5in-sine" 
              data-aos-duration="1500"
              onClick={toProfile}>
              <div className="link" >
                <FaUserAlt  style={{
                  color:"#6cdbeb",
                  fontSize:"2rem"}}/>
                <h2>Profile</h2>
                </div>
              </div>
              
              <div 
              data-aos="fade-right"
             
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
               onClick={toGallery}>
           <div className="link">
               <FaPhotoVideo style={{
                 color:"#6cdbeb",
                 fontSize:"2rem"}}/>
                <h2>Gallery</h2>
                </div>
              </div>
              <div 
              data-aos="fade-right"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="2500"
              onClick={toNotification}
              >
              <div className="link">
              <FaBellSlash style={{
                color:"#6cdbeb"
              ,fontSize:"2rem"}}/>
                <h2>Notifications</h2>
                </div>
              </div>
              <div 
               data-aos="fade-right"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
              onClick={toGuide}
              >
              <div className="link">
                <GiBookmarklet style={{
                  color:"#6cdbeb",
                  fontSize:"2rem"}}/>
                <h2> Guide</h2>
                </div>
              </div>
              <div 
               data-aos="zoom-in"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
              onClick={logout}>
              <div className="pro" > <h2>Logout</h2>
                <FiLogOut style={{
                  
                  fontSize:"1.5rem",
                position:'absolute',
                top:"10%",
                right:"10%"
                }}/>
                </div> 
              </div>
            </div>
          </div>
        <div className="games"
        
        >
          <div className="home-cards">
          
          {profile?notVerified?null:userData?<PlayerDetails
          data={data}          
          />
          :<div onClick={editProfile}><AddProfileButton/></div>:
          profileComponent?notVerified?null:userData?<PlayerDetails
          data={data}/>
          :<div onClick={editProfile}><AddProfileButton/></div>:null
          }
            {gallery?<Gallery/>:galleryComponent?<Gallery/>:null}
            {notification?<Notification/>:notificationComponent?<Notification/>:null}
            {guide?<Guide/>:guideComponent?<Guide/>:null}
          </div>
         
        </div>
        </section>
        <div className="circle1"></div>
      <div className="circle2"></div>
      </main>
     }
        </>
     
    )
}

export default HomePageSection
