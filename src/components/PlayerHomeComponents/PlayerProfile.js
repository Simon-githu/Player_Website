import React from 'react'
import fire from '../../firebase'
//import EmailIcon from '@material-ui/icons/Email';
//import LockIcon from '@material-ui/icons/Lock';
import { useEffect } from 'react';
//import { HiOutlineMail } from 'react-icons/hi';
import { useState } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import styled, { keyframes } from 'styled-components';
import { useHistory } from 'react-router-dom';
import {genderStyles,gender,foot,footStyles,positionStyles,positions,otherPositionStyles,otherPositions} from './DropdownStyles'
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import Swal from 'sweetalert2'

//=================================================================================================================
function PlayerProfile(userVerification) {
   const [notVerified,setNotVerified]=useState(true)
   const [userEmail,setUserEmail]=useState("")
   const [selected,setSelected]=useState("Male")
   const [otherPos,setOtherPos]=useState([])
   const[values,setValues]=useState([])
   const [mainPos,setMainPos]=useState("")
   const [name,setName]=useState("")
   const [surname,setSurname]=useState("")
   const [age,setAge]=useState("")
   const [height,setHeight]=useState("")
   const [dob,setDob]=useState(null)
   const [pob,setPob]=useState("")
  const [sex,setSex]=useState("")
  const [leg,setLeg]=useState("")
  const [currentJoined,setCurrentJoined]=useState("")
  const [previousJoined,setPreviousJoined]=useState("")
  const [currentClub,setCurrentClub]=useState("")
  const [previousClub,setPreviousClub]=useState("")
   const navigate = useHistory()
  const [nameBc,setNameBc]=useState()
  const [surnameBc,setSurnameBc]=useState()
  const [namePh,setNamePh]=useState("Name")
  const [surnamePh,setSurnamePh]=useState("Surname")
  const [heightBc,setHeightBc]=useState()
  const [heightPh,setHeightPh]=useState("Height")
  const [ageBc,setAgeBc]=useState()
  const [agePh,setAgePh]=useState("Age")
  const [pobBc,setPobBc]=useState()
  const [pobPh,setPobPh]=useState("Place of birth")
  const [sexBc,setSexBc]=useState()
  const [sexPh,setSexPh]=useState("Gender")
  const [currentJoinedBc,setCurrentJoinedBc]=useState()
  const [previousJoinedBc,setPreviousJoinedBc]=useState()
  const [currentClubBc,setCurrentClubBc]=useState()
  const [previousClubBc,setPreviousClubBc]=useState()
   //===========================================================================================================
    
     const onSubmit = ({sex}) => {
      alert(`name: ${sex}`);
    };
  
   //==========================================================================================================
   useEffect(() => {
    setSelected("Male")
    fire.auth().onAuthStateChanged(user=>{
      if(user.emailVerified==="true"){
        setNotVerified(false)
      }else{
        setNotVerified(true)
      }
      setUserEmail(user.email)
    })
  
    }, [])
    
    useEffect(()=>{
      Aos.init()
    
  },[])
  const isEmpty=(string)=>{
    if(string.trim()===''){
        return true;
    }else
    {
       return false;
    }
}
const isNumber=(number)=>{
  const regNumber ="(?:\d.*?){3,}";
  if(number.match(regNumber)){
      return true;
  }else{
      return false;
  }
}
const cancelForm=()=>{
  window.location.reload()
}
const display=(e)=>{
  var OtherPosValues = (otherPos.map((pos)=>{return pos.label}))
 
if(isEmpty(name)){
  Swal.fire({
    icon: 'error',
    title: 'Name is required',
   background:'transparent',
   backdrop:'transparent',
   showConfirmButton:false,
  })
  setNameBc("red")
}else if(isEmpty(surname)){
  Swal.fire({
    icon: 'error',
    title: 'Surname is required',
    showConfirmButton:false,
   background:'transparent',
   backdrop:'transparent',
  })
  setSurnameBc("red")
}else if(isEmpty(age)){
  Swal.fire({
    icon: 'error',
    title: 'Age is required',
    background:'transparent',
    backdrop:'transparent',
    showConfirmButton:false,
  
  })
  setAgeBc("red")
}
else if(age >35){
  Swal.fire({
    icon: 'error',
    title: 'Do not qualify',
    text: 'Over 35 years!',
    background:'transparent',
    backdrop:'transparent',
    showConfirmButton:false,
   
  })
  setAgeBc("red")
    }else if(age < 3){
      Swal.fire({
        icon: 'error',
        title: 'Do not qualify',
        text: 'Below 3 years!',
        background:'transparent',
        backdrop:'transparent',  
        showConfirmButton:false,
   
      })
  }else if(isEmpty(height)){
    Swal.fire({
      icon: 'error',
      title: 'Height is required',
      background:'transparent',
      backdrop:'transparent',
      showConfirmButton:false,
     
    })
    setHeightBc("red")
  }else if(dob == null){
    Swal.fire({
      icon: 'error',
      title: 'Date of birth is required',
     background:'transparent',
     backdrop:'transparent',
     showConfirmButton:false,
     
    })
    
  }else if(isEmpty(pob)){
    Swal.fire({
      icon: 'error',
      title: 'Place of birth is required',
      background:'transparent',
      backdrop:'transparent',
      showConfirmButton:false,
     
    })
    setPobBc("red")
  }
    else if(sex.label == undefined){
      Swal.fire({
        icon: 'error',
        title: 'Gender is required',
        background:'transparent',
        backdrop:'transparent',
        showConfirmButton:false,
     
      })   
      setSexBc("red") 
  }else if(isEmpty(currentClub)){
    Swal.fire({
      icon: 'error',
      title: 'Current club is required',
      background:'transparent',
      backdrop:'transparent',
      showConfirmButton:false,
     
    })
    setCurrentClubBc("red")
  }else if(isEmpty(currentJoined)){
    Swal.fire({
      icon: 'error',
      title: 'Current club year joined is required',
      background:'transparent',
      backdrop:'transparent',
      showConfirmButton:false,
    
    })
    setCurrentJoinedBc("red")
  }else if(currentJoined.length < 4){
    Swal.fire({
      icon: 'error',
      title: 'Invalid year joined for current club',
      text:`e.g ${moment().format("YYYY")}`,
      background:'transparent',
      backdrop:'transparent',
      showConfirmButton:false,
   
    })
    setCurrentJoinedBc("red")
  }
  else if(currentJoined > moment().format('YYYY')){
    Swal.fire({
      icon: 'error',
      title: 'Invalid year joined for current club ',
      background:'transparent',
      backdrop:'transparent',
      showConfirmButton:false,
     
    })
  }
  else if(isEmpty(previousClub)){
    Swal.fire({
      icon: 'error',
      title: 'Previous club is required',
      background:'transparent',
      backdrop:'transparent',
      showConfirmButton:false,
     
    })
    setPreviousClubBc("red")
  }else if(isEmpty(previousJoined)){
    Swal.fire({
      icon: 'error',
      title: 'Previous club year joined is required',
      background:'transparent',
      backdrop:'transparent',
      showConfirmButton:false,
     
    })
    setPreviousJoinedBc("red")
  }else if(previousJoined.length < 4){
    Swal.fire({
      icon: 'error',
      title: 'Invalid year joined for previous club',
      text:`e.g ${moment().format("YYYY")}`,
      background:'transparent',
      backdrop:'transparent',
      showConfirmButton:false,
   
    })
    setPreviousJoinedBc("red")
  }
  else if(previousJoined > moment().format('YYYY')){
    Swal.fire({
      icon: 'error',
      title: 'Invalid year joined for previous club ',
      background:'transparent',
      backdrop:'transparent',
      showConfirmButton:false,
   
    })
  }
   else if(moment(previousJoined).format("YYYY") > moment(currentJoined).format("YYYY")){
    Swal.fire({
      icon: 'error',
      title: 'Invalid year joined for previous club ',
      text:'Previous club joined year cannot be greater than current club joined year!',
      background:'transparent',
      backdrop:'transparent',
      showConfirmButton:false,
     
    })
    setPreviousJoinedBc("red")
  } 
   else if(leg.label == undefined){
    Swal.fire({
      icon: 'error',
      title: 'Foot is required',
      background:'transparent',
      backdrop:'transparent',
      showConfirmButton:false,
     
    })    
    
} else if(mainPos.label == undefined){
  Swal.fire({
    icon: 'error',
    title: 'Main position is required',
    background:'transparent',
    backdrop:'transparent',
    showConfirmButton:false,
   
  })    

}else if(OtherPosValues == ""){
  Swal.fire({
    icon: 'error',
    title: 'Other position is required',
    background:'transparent',
    backdrop:'transparent',
    showConfirmButton:false,
 
  }) 
}
else{

 fire.firestore().collection("players").doc(userEmail).update({
   Name:name,
   Surname:surname,
   Age:age,
   Height:height,
   Date_Of_Birth:moment(dob).format('DD-MM-YYYY'),
   Place_Of_Birth:pob,
   Gender:sex.label,
   Current_Club:currentClub,
   Curr_Club_Year_Joined:currentJoined,
   Previous_Club:previousClub,
   Prev_Club_Year_Joined:previousJoined,
   Foot:leg.label,
   Main_Position:mainPos.label,
   Other_Position:OtherPosValues

 }).then(res=>{
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your profile has been saved',
    showConfirmButton: false,
    timer: 1500,
   
  }).then(()=>{
    window.location.reload(false)
  })
 })

}

}
///======================================================
const  isInputNumber=(evt)=>{
  setAgeBc(" ")
  setAgePh("Age") 
  setCurrentJoinedBc("") 
  setPreviousJoinedBc("")      
  var ch = String.fromCharCode(evt.which);
  
  if(!(/[0-9]/.test(ch))){
      evt.preventDefault();
  }
 
}
//===========================
  const toPlayerHome =()=>{
    navigate.push('/player-home')
  }
  //==========================================
  const reset=()=>{
    setNameBc("")
    setNamePh("Name")
    setSurnameBc("")
    setSurnamePh("Surname")
    setCurrentClubBc("")
    
    setPreviousClubBc("")
  
    setHeightBc("")
    setPobBc("")
  }
  //==========================================
    return (
    <>

      {/* {notVerified?<div className="email-verify"
      data-aos="fade-up"
              data-aos-easing="ease-in-sine" 
                 data-aos-duration="1000"
       >
                <h2>Verify Email</h2>
                <HiOutlineMail style={{
                  
                  fontSize:"1rem",
                position:'absolute',
                top:"20%",
                right:"10%"
                }}/>
              </div>:null}
      <div className="email-card"
      data-aos="fade-up"
              data-aos-easing="ease-in-sine" 
                 data-aos-duration="1500"
      >
         <label  className="percentage"> Email</label>
          <div className="card-info">
            <h2>{userEmail}</h2>
          </div>
          <h2 class="percentage"><EmailIcon fontSize="inherit"/></h2>
      </div>

        <div class="password-card"
        data-aos="fade-up"
              data-aos-easing="ease-in-sine" 
                 data-aos-duration="2000"
        >
         <label className="percentage">Password</label>
          <div className="card-info">
            <h2 style={{marginRight:"1rem"}}>*****</h2>
        
          </div>
          <h2 className="percentage"><LockIcon fontSize="inherit"/></h2>
      </div>
      
      <div className="player-name">
       <div className="txt">
      <p>Name:      Simon</p>
       </div>
       
       <div className="btn">
      <button>Save</button>
      

       </div>
      </div>
      
     */}
     <Main
      data-aos="zoom-in"
              data-aos-easing="ease-in-sine" 
                 data-aos-duration="1000"
     >


     <ProfileBox 
    
     >
     
  {//val = values.join(",")
  }

      {//<p>{val}</p>
      }
     <ProfileSquare ></ProfileSquare>
     <ProfileSquare ></ProfileSquare>
     <ProfileSquare ></ProfileSquare>
     <ProfileSquare ></ProfileSquare>
     <ProfileSquare ></ProfileSquare>

<ProfileContainer>

<ProfileForm>
  <h2>Player Form</h2>
  
  <ProfileInput>
 
  <input  style={{borderColor:nameBc}} type="text" onKeyPress={reset} placeholder={namePh} value={name} onChange={(e)=>setName(e.target.value)}/>
 
  <input type="text" style={{borderColor:surnameBc}} placeholder={surnamePh} onKeyPress={reset} value={surname} onChange={(e)=>setSurname(e.target.value)} />
  <input type="text" style={{borderColor:ageBc}} placeholder={agePh} onKeyPress={isInputNumber} value={age} onChange={(e)=>setAge(e.target.value)}  maxLength="2"/>
  <input type="text" style={{borderColor:heightBc}} placeholder={heightPh} onKeyPress={reset} value={height} onChange={(e)=>setHeight(e.target.value )+"cm"}/>
 
  <DatePicker
  selected={dob}
  onChange={date=>setDob(date)}
  placeholderText="Date of birth"
  maxDate={new Date()}
  isClearable
  showYearDropdown
  dateFormat={"dd-MM-yyyy"}
  wrapperClassName="datepicker"
  />
  
  <input style={{borderColor:pobBc}} type="text" placeholder={pobPh} onKeyPress={reset} value={pob} onChange={(e)=>setPob(e.target.value)}/>


  </ProfileInput>

 
  <Select  options={gender} styles={genderStyles} placeholder={sexPh}  onChange={setSex}  />
 
 
  <br></br>
<PlayerInput2>
<CurrClub style={{borderColor:currentClubBc}} onKeyPress={reset} type="text" placeholder="Current Club" value={currentClub} onChange={(e)=>setCurrentClub(e.target.value)}/><label>-</label>
<CurrClubYearJoined style={{borderColor:currentJoinedBc}} onKeyPress={reset} type="text" onKeyPress={isInputNumber} maxLength="4" placeholder="Year Joined (YYYY)" value={currentJoined} onChange={(e)=>setCurrentJoined(e.target.value)}/>

  <PrevClub style={{borderColor:previousClubBc}} onKeyPress={reset} type="text" placeholder="Previous Club" value={previousClub} onChange={(e)=>setPreviousClub(e.target.value)}/><label>-</label>
  <PrevClubYearJoined style={{borderColor:previousJoinedBc}} onKeyPress={reset} type="text" onKeyPress={isInputNumber} maxLength="4" placeholder="Year Joined (YYYY)" value={previousJoined} onChange={(e)=>setPreviousJoined(e.target.value)}/>


  </PlayerInput2>
  <Select options={foot} styles={footStyles} placeholder="Foot" onChange={setLeg} />
  <Select options={positions} styles={positionStyles} placeholder="Main Position" onChange={setMainPos}/>
  <Select
   options={otherPositions} 
   styles={otherPositionStyles}
    placeholder="Other Positions"
    isMulti 
    closeMenuOnSelect={false} 
    noOptionsMessage={()=>"No other positions"}
    onChange={setOtherPos} 
     />
  <input type="submit" onClick={display} placeholder="ln"/>
  <button type="submit" onClick={cancelForm} placeholder="Cancel">Cancel</button>
</ProfileForm>

<p></p>
</ProfileContainer>
</ProfileBox>

 </Main>
</>
    )
}

export default PlayerProfile
const Main = styled.main`
  font-family: "Poppins", sans-serif;
    min-height: 100vh;
    background:linear-gradient(to right top,"#65dfc9","#6cdbeb");
    display:flex;
    align-items: center;
    justify-content: center;
/* iphone x */
@media only screen and (device-width : 375px) and (device-height:812px){
  min-height:150vh
  }
  /* Moto G4 */
@media only screen and (device-width : 360px) and (device-height:640px){
  min-height:190vh
  }  
  /* pixel 2 */
  @media only screen and (device-width : 411px) and (device-height:731px){
    min-height:160vh
    }
      /* pixel 2 xl */
  @media only screen and (device-width : 411px) and (device-height:823px){
    min-height:140vh
    }
     /* iphone 5/se */
     @media only screen and (device-width : 320px) and (device-height:568px){
    min-height:240vh
    }     /* iphone 6/7/8 */
  @media only screen and (device-width : 375px) and (device-height:667px){
    min-height:180vh
    }
     /* iphone 6/7/8 plus */
  @media only screen and (device-width : 414px) and (device-height:736px){
    min-height:160vh
    }
      /* galaxy fold */
  @media only screen and (device-width : 280px) and (device-height:653px){
    min-height:210vh
    }
`;

const ProfileContainer=styled.div`
position: relative;
width:700px;
min-height:500px;
background:rgba(255,255,255,0.1);
border-radius:10px;
display:flex;
justify-content:center;
align-items:center;
backdrop-filter:blur(5px);
box-shadow:0 25px 45px rgba(0,0,0,0.1);
border:1px solid rgba(255,255,255,0.5);
border-right:1px solid rgba(255,255,255,0.2);
border-bottom:1px solid rgba(255,255,255,0.2);
/* iphone x */
@media only screen and (device-width : 375px) and (device-height:812px){
  width:95%;
  position:absolute;
  right:0.5rem;
 top:4rem;
 
  }
  /* MOto g4 */
  @media only screen and (device-width : 360px) and (device-height:640px){
    width:95%;
  position:absolute;
  right:0.5rem;
 top:4rem;
  }  
  /* pixel 2 */
  @media only screen and (device-width : 411px) and (device-height:731px){
    width:95%;
  position:absolute;
  right:0.5rem;
 top:4rem;
    }
        /* pixel 2 xl */
  @media only screen and (device-width : 411px) and (device-height:823px){
    width:95%;
  position:absolute;
  right:0.5rem;
 top:4rem;
    }
     /* iphone 5/se */
     @media only screen and (device-width : 320px) and (device-height:568px){
      width:95%;
  position:absolute;
  right:0.5rem;
 top:4rem;
    }     /* iphone 6/7/8 */
  @media only screen and (device-width : 375px) and (device-height:667px){
    width:95%;
  position:absolute;
  right:0.5rem;
 top:4rem;
    }
     /* iphone 6/7/8 plus */
  @media only screen and (device-width : 414px) and (device-height:736px){
    width:95%;
  position:absolute;
  right:0.5rem;
 top:4rem;
    }
      /* galaxy fold */
  @media only screen and (device-width : 280px) and (device-height:653px){
    width:95%;
  position:absolute;
  right:0.5rem;
 top:4rem;
    }
p{
  position: relative;
  color:#fff;
  font-size:24px;
  font-weight:600;
  letter-spacing:1px;
 bottom:36px;
 

  &::before{
    content:'';
    position:absolute;
    right:10px;
    width:675px;
    height:2px;
    background:#fff;
    @media only screen and (device-width: 375px) and (device-height: 812px){
    display:none
     
    }
      /* Moto G4 */
@media only screen and (device-width : 360px) and (device-height:640px){
display:none
  }  
  /* pixel 2 */
  @media only screen and (device-width : 411px) and (device-height:731px){
display:none
  }  
      /* pixel 2 xl */
      @media only screen and (device-width : 411px) and (device-height:823px){
    display:none;
    }
     /* iphone 5/se */
     @media only screen and (device-width : 320px) and (device-height:568px){
    display:none;
    }     /* iphone 6/7/8 */
  @media only screen and (device-width : 375px) and (device-height:667px){
   display:none;
    }
     /* iphone 6/7/8 plus */
  @media only screen and (device-width : 414px) and (device-height:736px){
  display:none;
    }
      /* galaxy fold */
  @media only screen and (device-width : 280px) and (device-height:653px){
   display:none
    }
  }
}
`;
const ProfileBox=styled.div`
display:flex;


`;
const ProfileInput=styled.div`
 input{
padding:6px;
   margin:10px 15px;
   background:rgba(255,255,255,0.2);
   border:none;
   outline:none;
  height:40px;
   border-radius:5px;
   border:1px solid rgba(255,255,255,0.5);
border-right:1px solid rgba(255,255,255,0.2);
border-bottom:1px solid rgba(255,255,255,0.2);
font-size:14px;
letter-spacing:1px;
color:#fff;
box-shadow:0 5px 51px rgba(0,0,0,0.05);

&::placeholder{
  color:#fff;
}
/* iphone x */
@media only screen and (device-width : 375px) and (device-height:812px){
 width:92%;
 
  }
  @media only screen and (device-width : 360px) and (device-height:640px){
    width:92%;
  } 
   /* pixel 2 */
   @media only screen and (device-width : 411px) and (device-height:731px){
width:92%
  }   
      /* pixel 2 xl */
      @media only screen and (device-width : 411px) and (device-height:823px){
    width:92%
    }
     /* iphone 5/se */
     @media only screen and (device-width : 320px) and (device-height:568px){
    width:92%
    }     /* iphone 6/7/8 */
  @media only screen and (device-width : 375px) and (device-height:667px){
   width:92%
    }
     /* iphone 6/7/8 plus */
  @media only screen and (device-width : 414px) and (device-height:736px){
    width:92%
    }
      /* galaxy fold */
  @media only screen and (device-width : 280px) and (device-height:653px){
  width:92%
    }
 }
`;
const ProfileForm=styled.div`

position: relative;
width:100%;
height:100%;

h2{
  position: relative;
  color:#fff;
  font-size:24px;
  font-weight:600;
  letter-spacing:1px;
  margin-bottom:40px;
  margin-top:10px;
  margin-left:15px;

  &::before{
    content:'';
    position:absolute;
    left:0;
    bottom:-10px;
    width:80px;
    height:4px;
    background:#fff;
    

  }
 

}
input{

  &[type="submit"]{
  background:#fff;
  
  cursor: pointer;
  
  padding:6px;
  margin:30px 15px;
   
   border:none;
   outline:none;
  
   border-radius:5px;
   border:1px solid rgba(255,255,255,0.5);
border-right:1px solid rgba(255,255,255,0.2);
border-bottom:1px solid rgba(255,255,255,0.2);
font-size:14px;
letter-spacing:1px;
color:#000;
box-shadow:0 5px 51px rgba(0,0,0,0.05);

}
}
button{
  background:#fff;
  color:#000;
  height:30px;
  border:none;
   outline:none;
   border-radius:5px;
   border:1px solid rgba(255,255,255,0.5);
border-right:1px solid rgba(255,255,255,0.2);
border-bottom:1px solid rgba(255,255,255,0.2);
font-size:14px;
letter-spacing:1px;
color:#000;
box-shadow:0 5px 51px rgba(0,0,0,0.05);
cursor: pointer;
  
  padding:6px;
  margin:30px 15px;
   
}
`;
const animate = keyframes `
0%,100%{
transform:translateY(-40px)
}
50%{
transform:translateY(40px)
}
`;

const ProfileSquare = styled.div`
position: absolute;
backdrop-filter:blur(5px);
box-shadow:0 25px 45px rgba(0,0,0,0.1);
border:1px solid rgba(255,255,255,0.5);
border-right:1px solid rgba(255,255,255,0.2);
border-bottom:1px solid rgba(255,255,255,0.2);
background:rgba(255,255,255,0.1);
border-radius:10px;
animation:${animate} 10s linear infinite;



&:nth-child(1){
  top:80px;
  right:370px;
  width:100px;
  height: 100px;
  animation-delay:calc(-1s);
  /* iphone x */
@media only screen and (device-width : 375px) and (device-height:812px){
 left:17rem
 
  }
    /* Moto g4*/
@media only screen and (device-width : 360px) and (device-height:640px){
 left:17rem
 
  }
   /* pixel 2 */
   @media only screen and (device-width : 411px) and (device-height:731px){
left:17rem;
  }  
      /* pixel 2 xl */
      @media only screen and (device-width : 411px) and (device-height:823px){
   left:17rem;
    }
     /* iphone 5/se */
     @media only screen and (device-width : 320px) and (device-height:568px){
    left:17rem;
    }     /* iphone 6/7/8 */
  @media only screen and (device-width : 375px) and (device-height:667px){
    left:17rem;
    }
     /* iphone 6/7/8 plus */
  @media only screen and (device-width : 414px) and (device-height:736px){
   left:17rem;
    }
      /* galaxy fold */
  @media only screen and (device-width : 280px) and (device-height:653px){
   left:17rem;
    }
}

&:nth-child(2){
  top:330px;
  right:1108px;
  width:120px;
  height: 120px;
  z-index:2;
  animation-delay:calc(-5s);
  /* iphone x */
@media only screen and (device-width : 375px) and (device-height:812px){
  left:-6rem
 
  }
      /* Moto g4*/
@media only screen and (device-width : 360px) and (device-height:640px){
 left:-6rem
 
  }
   /* pixel 2 */
   @media only screen and (device-width : 411px) and (device-height:731px){
left:-6rem;
  }  
      /* pixel 2 xl */
      @media only screen and (device-width : 411px) and (device-height:823px){
   left:-6rem;
    }
     /* iphone 5/se */
     @media only screen and (device-width : 320px) and (device-height:568px){
   left:-6rem;
    }   
      /* iphone 6/7/8 */
      @media only screen and (device-width : 375px) and (device-height:667px){
  left:-6rem
    }
     /* iphone 6/7/8 plus */
  @media only screen and (device-width : 414px) and (device-height:736px){
   left:-6rem
    }
      /* galaxy fold */
  @media only screen and (device-width : 280px) and (device-height:653px){
    left:-6rem
    }
}

&:nth-child(3){
  top:470px;
  right:345px;
  width:80px;
  height: 80px;
  z-index:2;
  animation-delay:calc(-3s);
   /* iphone x */
@media only screen and (device-width : 375px) and (device-height:812px){
  top:2rem;
  right:10rem
 
  }
      /* Moto g4*/
@media only screen and (device-width : 360px) and (device-height:640px){
top:2rem;
right:10rem
  }
   /* pixel 2 */
   @media only screen and (device-width : 411px) and (device-height:731px){
top:2rem;
right:10rem;
  }  
      /* pixel 2 xl */
      @media only screen and (device-width : 411px) and (device-height:823px){
        top:2rem;
right:10rem;
    }
     /* iphone 5/se */
     @media only screen and (device-width : 320px) and (device-height:568px){
      top:2rem;
right:10rem;
    }     /* iphone 6/7/8 */
  @media only screen and (device-width : 375px) and (device-height:667px){
    top:2rem;
right:10rem;
    }
     /* iphone 6/7/8 plus */
  @media only screen and (device-width : 414px) and (device-height:736px){
    top:2rem;
right:10rem;
    }
      /* galaxy fold */
  @media only screen and (device-width : 280px) and (device-height:653px){
    top:2rem;
right:10rem;
    }
}

&:nth-child(4){
  top:650px;
  right:1000px;
  width:50px;
  height: 50px;
  z-index:2;
  animation-delay:calc(-9s);
     /* iphone x */
@media only screen and (device-width : 375px) and (device-height:812px){
 left:15rem;
top:58.8rem;
 
  }
       /* Moto g4*/
@media only screen and (device-width : 360px) and (device-height:640px){
  left:10rem;
top:58.8rem;
  }
   /* pixel 2 */
   @media only screen and (device-width : 411px) and (device-height:731px){
left:15rem;
top:65rem;
  }  
  
      /* pixel 2 xl */
      @media only screen and (device-width : 411px) and (device-height:823px){
        left:15rem;
top:65rem;
    }
     /* iphone 5/se */
     @media only screen and (device-width : 320px) and (device-height:568px){
      left:13rem;
top:78rem;
    }     /* iphone 6/7/8 */
  @media only screen and (device-width : 375px) and (device-height:667px){
    left:15rem;
top:70rem;
    }
     /* iphone 6/7/8 plus */
  @media only screen and (device-width : 414px) and (device-height:736px){
    left:15rem;
top:65rem;
    }
      /* galaxy fold */
  @media only screen and (device-width : 280px) and (device-height:653px){
    left:10rem;
top:58.8rem;
    }
}

&:nth-child(5){
  top:60px;
  right:900px;
  width:60px;
  height: 60px;
  z-index:2;
  animation-delay:calc(-7s);

  @media only screen and (device-width : 375px) and (device-height:812px){
    right:-3rem;
  top:50rem;

  }
       /* Moto g4*/
@media only screen and (device-width : 360px) and (device-height:640px){
  right:-3rem;
  top:50rem
  }
   /* pixel 2 */
   @media only screen and (device-width : 411px) and (device-height:731px){
right:-3rem;
top:50rem
  }  
      /* pixel 2 xl */
      @media only screen and (device-width : 411px) and (device-height:823px){
        right:-3rem;
top:50rem
    }
     /* iphone 5/se */
     @media only screen and (device-width : 320px) and (device-height:568px){
      right:-3rem;
top:50rem;
    }     /* iphone 6/7/8 */
  @media only screen and (device-width : 375px) and (device-height:667px){
    right:-3rem;
top:58.8rem;
    }
     /* iphone 6/7/8 plus */
  @media only screen and (device-width : 414px) and (device-height:736px){
    right:-3rem;
top:50rem;
    }
      /* galaxy fold */
  @media only screen and (device-width : 280px) and (device-height:653px){
    right:-3rem;
top:50rem;
    }

`;
const PlayerInput2 = styled.div`
label{
  color:white
}
input{
padding:6px;
   margin:10px 15px;
   background:rgba(255,255,255,0.2);
   border:none;
   outline:none;
  height:40px;
   border-radius:5px;
   border:1px solid rgba(255,255,255,0.5);
border-right:1px solid rgba(255,255,255,0.2);
border-bottom:1px solid rgba(255,255,255,0.2);
font-size:14px;
letter-spacing:1px;
color:#fff;
box-shadow:0 5px 51px rgba(0,0,0,0.05);

&::placeholder{
  color:#fff;
}

}
`;
const CurrClubYearJoined =styled.input`
@media only screen and (device-width: 375px) and (device-height: 812px){
     width:110px;
    
    }
           /* Moto g4*/
@media only screen and (device-width : 360px) and (device-height:640px){
  width:110px;
  }
  
  /* pixel 2 */
  @media only screen and (device-width : 411px) and (device-height:731px){
width:110px;
  }  
        /* pixel 2 xl */
        @media only screen and (device-width : 411px) and (device-height:823px){
       width:110px;
    }
     /* iphone 5/se */
     @media only screen and (device-width : 320px) and (device-height:568px){
      width:110px;
    }     /* iphone 6/7/8 */
  @media only screen and (device-width : 375px) and (device-height:667px){
    width:110px;
    }
     /* iphone 6/7/8 plus */
  @media only screen and (device-width : 414px) and (device-height:736px){
    width:110px;
    }
  

`;
const PrevClubYearJoined =styled.input`
@media only screen and (device-width: 375px) and (device-height: 812px){
     width:110px;
     
    }
               /* Moto g4*/
@media only screen and (device-width : 360px) and (device-height:640px){
  width:110px;
  }
   /* pixel 2 */
   @media only screen and (device-width : 411px) and (device-height:731px){
width:110px;
  }  
       /* pixel 2 xl */
       @media only screen and (device-width : 411px) and (device-height:823px){
       width:110px;
    }
     /* iphone 5/se */
     @media only screen and (device-width : 320px) and (device-height:568px){
      width:110px;
    }     /* iphone 6/7/8 */
  @media only screen and (device-width : 375px) and (device-height:667px){
    width:110px;
    }
     /* iphone 6/7/8 plus */
  @media only screen and (device-width : 414px) and (device-height:736px){
    width:110px;
    }
`;
const CurrClub =styled.input`
@media only screen and (device-width: 375px) and (device-height: 812px){
     width:175px;
     
    }
               /* Moto g4*/
@media only screen and (device-width : 360px) and (device-height:640px){
  width:160px;
  }

     /* iphone 5/se */
     @media only screen and (device-width : 320px) and (device-height:568px){
      width:125.8px;
    }     /* iphone 6/7/8 */
  @media only screen and (device-width : 375px) and (device-height:667px){
    width:160px;
    }
     /* iphone 6/7/8 plus */
  @media only screen and (device-width : 414px) and (device-height:736px){
    width:160px;
    }
`;
const PrevClub=styled.input`
@media only screen and (device-width: 375px) and (device-height: 812px){
     width:175px;
     
    }
               /* Moto g4*/
@media only screen and (device-width : 360px) and (device-height:640px){
  width:160px;
  }
 

     /* iphone 5/se */
     @media only screen and (device-width : 320px) and (device-height:568px){
      width:125.8px;
    }     /* iphone 6/7/8 */
  @media only screen and (device-width : 375px) and (device-height:667px){
    width:160px;
    }
     /* iphone 6/7/8 plus */
  @media only screen and (device-width : 414px) and (device-height:736px){
    width:160px;
    }
`;