import React, { useState } from 'react'
import './Modal.css'
import TextField from '@material-ui/core/TextField';
import {MDBAnimation} from 'mdbreact'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Swal from 'sweetalert2';
import fire from '../firebase'
import { useHistory } from 'react-router-dom';


function Modal() {
 //===============================================================================================
const [user,setUser]=useState(" ");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
  const [scout,setScout]=useState(false);
  const [player,setPlayer]=useState(false);
  const [slogin,setScoutLogin]=useState(false);
  const [plogin,setPlayerLogin]=useState(false);
  const [clickLogin,setClickLogin]=useState(true)
  const [clickRegister,setClickRegister]=useState(false)
 const navigate=useHistory();
const [emailError,setEmailError] = useState("");
const [passwordError,setPasswordError] = useState("");
const [regDisabled,setRegDisabled]=useState(true);
const [logDisabled,setLogDisabled]=useState(true)
  //===========================================================================================
  const handleClickRegister=()=>{
      setClickRegister(true)
      setClickLogin(false)
      setEmail("")
      setPassword("")
      setPasswordError("")
      setEmailError("")
      setPlayerLogin(false)
    setScoutLogin(false)
  }  
//================================================================================================
  const handleClickLogin=()=>{
    setClickLogin(true);
    setClickRegister(false)
    setEmail("")
    setPassword("")
    setPasswordError("")
    setEmailError("")
    setPlayerLogin(false)
    setScoutLogin(false)
}  

//==================================================================================================================
//Setting Scout Button
const scoutLogin=()=>{
    setScout(true);
    setPlayer(false)
    setScoutLogin(true)
   setUser("Scout")
   setLogDisabled(false)
  }
//=========================================================================================================================
//Setting Player Button
  const playerLogin=()=>{
    setScout(false);
    setPlayer(true)
    setPlayerLogin(true)
    setUser("Player")
    setLogDisabled(false)
  }
  //=======================================================================================================================
  //Scout Cancel Login Button
 const cancelScoutLogin=()=>{
      setScoutLogin(false)
      setEmail("")
      setPassword("")
      setLogDisabled(true)
      setPasswordError("");
  setEmailError("")
  }
  //=======================================================================================================================
  //Player Cancel Login Button
  const cancelPlayerLogin=()=>{
    setPlayerLogin(false)
    setEmail("")
    setPassword("")
    setLogDisabled(true)
    setPasswordError("");
  setEmailError("")
  }
  //=======================================================================================================================
  //Scout Register Button
  const scoutRegister=()=>{
    setScout(true);
    setPlayer(false)
    setScoutLogin(true)
   setUser("Scout")
   setRegDisabled(false)
  }
//=======================================================================================================================
//Player Register Button
const playerRegister=()=>{
    setScout(false);
    setPlayer(true)
    setPlayerLogin(true)
    setUser("Player")
    setRegDisabled(false)
  }
//=======================================================================================================================
//Scout Cancel Register Button
const cancelScoutRegister=()=>{
    setScoutLogin(false)
    setEmail("")
    setPassword("")
    setRegDisabled(true)
    setPasswordError("");
  setEmailError("")
}
//=======================================================================================================================
//Player Cancel Register Button 
const cancelPlayerRegister=()=>{
  setPlayerLogin(false)
  setEmail("")
  setPassword("")
  setRegDisabled(true)
  setPasswordError("");
  setEmailError("")
}
//=======================================================================================================================
//Player Register Button Database
  const pRegister= ()=>{
      localStorage.setItem("User",user)
     
      if(isEmpty(email)){
        setEmailError('Must not be empty')
    }else if(!isEmail(email)){
     setEmailError('The email address is badly formatted')
    }else if(isEmpty(password)){
        setPasswordError("Must not be empty")
    }else{
      fire.auth().createUserWithEmailAndPassword(email,password).then((res)=>{
        const usr = fire.auth().currentUser
          usr.sendEmailVerification().then(()=>{
            let timerInterval
Swal.fire({
  title: 'Enjoy the game',
  background:"transparent",
  
  timer: 2400,
 
  timerProgressBar: false,
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
      Swal.fire({
        title: '<strong>WELCOME!<br> Player </strong> ',
        allowOutsideClick:false,
        icon: 'info',
        html:
        `<strong>${usr.email}</strong>`+'<br></br>'+
          'A link has been sent to your <b>email</b>, ' +
          'please click the link to verify your profile. ',
          
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Okay!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        confirmButtonColor:"#33C7FF"
        
      })
    }
  })

          }).catch((error)=>{
            Swal.fire("Error!","error");
          })
        if(user ==="Player"){
            res.user.updateProfile({displayName:user})
            fire.firestore().collection("players").doc(res.user.email).set({
                Email:email,
                Password:password,
                Role:user,
                Id:res.user.uid,
                Name:"",
                Surname:"",
                Age:"",
                Height:"",
                Date_Of_Birth:"",
                Place_Of_Birth:"",
                Gender:"",
                Current_Club:"",
                Curr_Club_Year_Joined:"",
                Previous_Club:"",
                Prev_Club_Year_Joined:"",
                Foot:"",
                Main_Position:"",
                Other_Position:""
            })
          navigate.push('/player-home')
        }
        setEmail("")
    setPassword("")
    setPlayerLogin(false)
    setRegDisabled(true)
  
    
      }).catch((err)=>{
         console.log(err)
        switch(err.code){
            case "auth/email-already-in-use":
                setEmailError("The email address is already in use")
                break;
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
            
            case "auth/argument-error":
              setEmailError(err.message)
              
                 
         break;
         case "auth/weak-password":
            
         setPasswordError(err.message)
          
          
        }
      })
    }
  }
  //=======================================================================================================================
  //Scout Register Button Database
  const sRegister =()=>{
    localStorage.setItem("User",user)
     
    if(isEmpty(email)){
        setEmailError('Must not be empty')
    }else if(!isEmail(email)){
     setEmailError('The email address is badly formatted')
    }else if(isEmpty(password)){
        setPasswordError("Must not be empty")
    }else{
      fire.auth().createUserWithEmailAndPassword(email,password).then((res)=>{
        if(user ==="Scout"){
            res.user.updateProfile({displayName:user})
            fire.firestore().collection("scouts").doc(res.user.email).set({
                Email:email,
                Password:password,
                Role:user,
                Id:res.user.uid
            })
        }
        setEmail("")
    setPassword("")
    setScoutLogin(false)
    setRegDisabled(true)
      }).catch((err)=>{
        switch(err.code){
            case "auth/email-already-in-use":
                setEmailError("The email address is already in use")
                break;
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
         
         case "auth/argument-error":
              setEmailError(err.message)
              
                 
         break;
         case "auth/weak-password":
            
         setPasswordError(err.message)
          
          
        }
      })
    }
  }

//=======================================================================================================================
//Scout Login Button Database

const sLogin =()=>{
    localStorage.setItem("User",user)
     
    if(isEmpty(email)){
        setEmailError('Must not be empty')
    }else if(!isEmail(email)){
     setEmailError('The email address is badly formatted')
    }else if(isEmpty(password)){
        setPasswordError("Must not be empty")
    }else{
        fire.firestore().collection("scouts").doc(email).onSnapshot(doc=>{
            if(doc.exists){
      fire.auth().signInWithEmailAndPassword(email,password).then((res)=>{
        navigate.push('/scout-home')
        setEmail("")
    setPassword("")
    setScoutLogin(false)
    setRegDisabled(true)
      }).catch((err)=>{console.log(err)
        switch(err.code){
            case "auth/invalid-email":
                setEmailError(err.message)
                break;
            case "auth/user-disabled":
            case "auth/user-not-found":
          case "auth/email-already-in-use":
         case "auth/argument-error":
              setEmailError("The email address is incorrect")
              
                 
         break;
         case "auth/wrong-password":
            
         setPasswordError("The password is incorrect")
          
          
        }
    })
  
}else{
    setEmailError('The email address is incorrect')
}
})
}
}
  //============================================================================================================================
  const isEmpty=(string)=>{
      if(string.trim()===''){
          return true;
      }else
      {
         return false;
      }
  }
  const isEmail=(email)=>{
   const regEx =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(email.match(regEx)){
       return true;
   }else{
       return false;
   }
}

  //===================================================================================================================================
  //Player Login Button Database

  const pLogin=()=>{
    localStorage.setItem("User",user)
   
    if(isEmpty(email)){
        setEmailError('Must not be empty')
    }else if(!isEmail(email)){
     setEmailError('The email address is badly formatted')
    }else if(isEmpty(password)){
        setPasswordError("Must not be empty")
    }else{
    fire.firestore().collection("players").doc(email).onSnapshot(doc=>{
        if(doc.exists){
            fire.auth().signInWithEmailAndPassword(email,password).then((res)=>{
              let timerInterval
              Swal.fire({
                title: 'Welcome Back',
                text:'Enjoy the second half',
                background:"transparent",
                
                timer: 2400,
               
                timerProgressBar: false,
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
              })
                navigate.push('/player-home')
                setEmail("")
                setPassword("")
                setPlayerLogin(false)
                setRegDisabled(true)
                
            }).catch((err)=>{
               console.log(err)
              switch(err.code){
                  case "auth/invalid-email":
                    setEmailError(err.message)
                    break;
                  case "auth/user-disabled":
                  case "auth/user-not-found":
                  case "auth/email-already-in-use":
                  case "auth/argument-error":
                    setEmailError("The email address is incorrect")
                    
                       
               break;
               case "auth/wrong-password":
                  
               setPasswordError("The password is incorrect")
                
                
              }
            })
          
        }else{
            setEmailError('The email address is incorrect')
        }
    })
}
}

//=========================================================================================================
//Handling Email Input Value
const handleEmailChange = e =>{
    setEmail(e.target.value);
    setEmailError("");
   
    }
  //=======================================================================================================================
  //Handling Password Input Value
  const handlePasswordChange = e =>{
    
    setPassword(e.target.value)

    setPasswordError("");
    }
   //=======================================================================================================================
  
      
    
    
  
    
   
   //=============================================================================================================================
  return (
    <>
    <div className="profile-container">
     
   
    {//==============================================================================================================================
}

 {clickLogin?<MDBAnimation type="slideInRight"  ><div className="card">
    <div className="header">
        <div className="hamburger-menu">
            <div className="center"></div>
        </div>
       
        <div className="main">
            <div className="image"  >
                <div className="hover">
                    <i className="fas fa-camera fa-2x" ></i>
                </div>
            </div>
            <h3 className="name">Login</h3>
            
        </div>
    </div>

    <div className="content">
        <div className="left">
            <div className="about-container">
                {scout?(<h3 className="title">Scout</h3>):player?(<h3 className="title">Player</h3>):(<h3 className="title">Player</h3>)}
               <div className="text">
        <TextField
          label="Your Email"
          id="lEmail"
          value={email}
          margin="dense"
          variant="outlined"
          onChange={handleEmailChange}
          type="email"
          error={emailError}
          helperText={emailError}
          required
          disabled={logDisabled}
        />
        <TextField
          label="Your Password"
          id="rPassword"
          value={password}
          margin="dense"
          variant="outlined"
          onChange={handlePasswordChange}
          type="password"
          error={passwordError}
          helperText={passwordError}
          required
          disabled={logDisabled}
        />
        </div>
            </div>
            <div className="icons-container">
                <a href=" " className="icon">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href=" " className="icon">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href=" " className="icon">
                    <i className="fab fa-google-plus-g"></i>
                </a>
                <a href=" " className="icon">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
           {slogin?(<div className="buttons-wrap">
                <div className="follow-wrap" >
                    <p  className="follow" onClick={sLogin} style={{color:"white"}}>Login</p>
                </div>
                <div className="share-wrap">
                    <p  className="share" onClick={cancelScoutLogin} style={{color:"lightblue"}}>Cancel</p>
                </div>
            </div>
            ):plogin?(
              (<div className="buttons-wrap">
                <div className="follow-wrap" >
                    <p  className="follow" onClick={pLogin} style={{color:"white"}}>Login</p>
                </div>
                <div className="share-wrap">
                    <p  className="share" onClick={cancelPlayerLogin} style={{color:"lightblue"}}>Cancel</p>
                </div>
            </div>
            )
            ):(
             
              <div className="buttons-wrap">
                <div className="follow-wrap" >
                    <p  className="follow" onClick={playerLogin} style={{color:"white"}}>Player</p>
                </div>
                <div className="share-wrap">
                    <p  className="share" onClick={scoutLogin} style={{color:"lightblue"}}>Scout</p>
                </div>
            </div>)}
        </div>

        <div className="right">
            <div>
                <h3 style={{fontSize:"1.5rem"}}>Secure</h3>
                <h3 className="number-title">Future</h3>
            </div>
            <div>
                <h3 style={{fontSize:"1.5rem",color:"lightblue"}}>0</h3>
                <h3 className="number-title">Rated</h3>
            </div>
            <div>
               <div className="regHover"> <h3  style={{fontSize:"1.2rem",cursor:"pointer",color:"lightblue" }} onClick={handleClickRegister}>REGISTER</h3></div>
                <h3 className="number-title">PLayeR/ScouT</h3>
            </div>
        </div>
    </div>
</div>
</MDBAnimation> 
:null }
{//==============================================================================================================================
}


{clickRegister?
<MDBAnimation type="slideInRight"  >
<div className="card">
    <div className="header">
        <div className="hamburger-menu">
            <div className="center"></div>
        </div>
       
        <div className="main">
            <div className="image"  >
                <div className="hover">
                    <i className="fas fa-camera fa-2x" ></i>
                </div>
            </div>
            <h3 className="name">Register</h3>
            
        </div>
    </div>

    <div className="content">
        <div className="left">
            <div className="about-container">
                {scout?(<h3 className="title">Scout</h3>):player?(<h3 className="title">Player</h3>):(<h3 className="title">Player</h3>)}
               <div className="text">
               <TextField
          label="Email (required)"
          id="rEmail"
          value={email}
          error={emailError}
         helperText={emailError}
          margin="dense"
          variant="outlined"
          onChange={handleEmailChange}
          type="email"
          required
          disabled={regDisabled}
        />
       
             <TextField
          label="Password (required)"
          id="rPassword"
          value={password}
          error={passwordError}
          helperText={passwordError}
          margin="dense"
          variant="outlined"
          onChange={handlePasswordChange}
          type="password"
          required
          disabled={regDisabled}
        />
       
        </div>
            </div>
            <div className="icons-container">
                <a href=" " className="icon">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href=" " className="icon">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href=" " className="icon">
                    <i className="fab fa-google-plus-g"></i>
                </a>
                <a href=" " className="icon">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
           {slogin?(<div className="buttons-wrap">
                <div className="follow-wrap" >
                    <p  className="follow" onClick={sRegister} style={{color:"white"}}>Register</p>
                </div>
                <div className="share-wrap">
                    <p  className="share" onClick={cancelScoutRegister} style={{color:"lightblue"}}>Cancel</p>
                </div>
            </div>
            ):plogin?(
              (<div className="buttons-wrap">
                <div className="follow-wrap" >
                    <p  className="follow" onClick={pRegister} style={{color:"white"}}>Register</p>
                </div>
                <div className="share-wrap">
                    <p  className="share" onClick={cancelPlayerRegister} style={{color:"lightblue"}}>Cancel</p>
                </div>
            </div>
            )
            ):(
             
              <div className="buttons-wrap">
                <div className="follow-wrap" >
                    <p  className="follow" onClick={playerRegister} style={{color:"white"}}>Player</p>
                </div>
                <div className="share-wrap">
                    <p  className="share" onClick={scoutRegister} style={{color:"lightblue"}}>Scout</p>
                </div>
            </div>)}
        </div>

        <div className="right">
            <div>
                <h3 style={{fontSize:"1.5rem"}}>Secure</h3>
                <h3 className="number-title">Future</h3>
            </div>
            <div>
                <h3 style={{fontSize:"1.5rem",color:"lightblue"}}>0</h3>
                <h3 className="number-title">Rated</h3>
            </div>
            <div>
         
            <div className="regHover"> <h3 style={{fontSize:"1.2rem",cursor:"pointer",color:"lightblue"}} onClick={handleClickLogin}>LOGIN</h3></div>
                <h3 className="number-title">PLayeR/ScouT</h3>
            </div>
        </div>
    </div>
</div>
</MDBAnimation> 
:null}


</div>
</> 
 )}

export default Modal
