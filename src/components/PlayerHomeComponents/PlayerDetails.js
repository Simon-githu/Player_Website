import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import fire from '../../firebase'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {FaEye} from 'react-icons/fa'
import {Head,Head1,Details,TitleDiv,Title,NameText,DataLabel,DataDob,DobStyle,DataAge,
        DataHeight,DataGender,DataFoot,DataMainPosition,DataOtherPosition,DataOtherPosition1,DataOtherPosition2,
        DataOtherPosition3,ViewDiv,DataCurrentClub,CurrentClubYearLabel,DataCurrentJoined,DataDiv,PreviousClubLabel,
        DataPreviousClub,PreviousClubYearLabel,DataPreviousJoined,DataPob,CurrentClubLabel
        }from '../PlayerHomeComponents/PlayerDetailsStyles'

function PlayerDetails({data}) {

const [name,setName]=useState("")
const [surname,setSurname]=useState("")
const [age,setAge]=useState("")
const [height,setHeight]=useState("")
const [dob,setDob]=useState("")
const [pob,setPob]=useState("")
const [gender,setGender]=useState("")
const [currentClub,setCurrentClub]=useState("")
const [currentJoined,setCurrJoined]=useState("")
const [previousClub,setPreviousClub]=useState("")
const [previousJoined,setPreviousJoined]=useState("")
const [foot,setFoot]=useState("")
const [mainPosition,setMainPos]=useState("")
const [otherPosition,setOtherPos]=useState([]);

    useEffect(()=>{
        if(data){
          const usr=fire.auth().currentUser.email
          fire.firestore().collection("players").doc(usr).onSnapshot((snapshot)=>{
                      setName(snapshot.data().Name)
                      setSurname(snapshot.data().Surname)
                      setAge(snapshot.data().Age)
                      setHeight(snapshot.data().Height)
                      setDob(snapshot.data().Date_Of_Birth)
                      setPob(snapshot.data().Place_Of_Birth)
                      setGender(snapshot.data().Gender)
                      setCurrentClub(snapshot.data().Current_Club)
                      setCurrJoined(snapshot.data().Curr_Club_Year_Joined)
                      setPreviousClub(snapshot.data().Previous_Club)
                      setPreviousJoined(snapshot.data().Prev_Club_Year_Joined)
                      setFoot(snapshot.data().Foot)
                      setMainPos(snapshot.data().Main_Position)
                      setOtherPos(snapshot.data().Other_Position)
                          
          })
        
        }
        
      },[data])
      const pos=[]
      const pos1=[]
      const pos2=[]
      const pos3=[]
   if(otherPosition && otherPosition.length){   
if( otherPosition.length>3){
  
  for(var i = 0;i<3;i++){
    pos1.push(otherPosition[i])
}
for(i=3;i<6;i++){
  pos2.push(otherPosition[i])
}
for(i=6;i<9;i++){
  pos3.push(otherPosition[i])
}

}else{
  for(i=0;i<2;i++){
    pos.push(otherPosition[i])
  }
}}
    return (
     
        <Head>
      
            <Head1>Profile</Head1>
            <Details>
            <TitleDiv
             data-aos="fade-up"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
            <Title><b>Player Data</b></Title>
            <NameText>{name} {surname}</NameText>
            </TitleDiv>
            <DataDiv
             data-aos="fade-up"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
            <DataLabel>Date of Birth:</DataLabel>
            <DataDob style={DobStyle}>{dob}</DataDob>
            </DataDiv>
            <DataDiv
             data-aos="fade-up"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
            <DataLabel>Place of Birth:</DataLabel>
            <DataPob style={{marginLeft:"164px"}} >{pob}</DataPob>
            </DataDiv>
            <DataDiv
             data-aos="fade-up"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
            <DataLabel>Age:</DataLabel>
            <DataAge style={{marginLeft:"244px"}}>{age}</DataAge>
            </DataDiv>
            <DataDiv
             data-aos="fade-up"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
            <DataLabel>Height:</DataLabel>
            <DataHeight style={{marginLeft:"221px"}}>{height}</DataHeight>
            </DataDiv>
            <DataDiv
             data-aos="fade-up"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
            <DataLabel>Gender:</DataLabel>
            <DataGender style={{marginLeft:"216px"}}>{gender}</DataGender>
            </DataDiv>
            <DataDiv
             data-aos="fade-up"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
            <DataLabel>Foot:</DataLabel>
            <DataFoot style={{marginLeft:"241px"}}>{foot}</DataFoot>
            </DataDiv>
           
            <TitleDiv
             data-aos="fade-up"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
            <Title><b>Player Positions</b></Title>
          
            </TitleDiv>
            <DataDiv
             data-aos="fade-up"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
            <DataLabel>Main Position:</DataLabel>
            <DataMainPosition  style={{marginLeft:"165px"}}>{mainPosition}</DataMainPosition>
            </DataDiv>
            <DataDiv
             data-aos="fade-up"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
           
            <DataLabel>Other Positions:</DataLabel>
             
            {otherPosition&& otherPosition.length&&otherPosition.length<3?<DataOtherPosition  style={{marginLeft:"149px"}}>{pos.join(",")}</DataOtherPosition>:(<>
             <DataOtherPosition1  style={{marginLeft:"149px"}}>{pos1.join(",")}</DataOtherPosition1>
             <DataOtherPosition2 >{pos2.join(",")}</DataOtherPosition2>
             <DataOtherPosition3 >{pos3.join(",")}</DataOtherPosition3>
             </>
            )}
             <ViewDiv> <h2>View</h2>
                <FaEye style={{
                  
                  fontSize:"1.5rem",
                position:'absolute',
                top:"10%",
                right:"10%"
                }}/>
                </ViewDiv>
            
            </DataDiv>
            <TitleDiv
             data-aos="fade-up"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
            >
            <Title><b>Player Clubs</b></Title>
          
            </TitleDiv>
            <DataDiv
             data-aos="fade-up"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
            >
            <CurrentClubLabel>Current Club:</CurrentClubLabel>
            <DataCurrentClub style={{marginLeft:"172px"}}>{currentClub}</DataCurrentClub>
            </DataDiv>
            <DataDiv
             data-aos="fade-up"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
            >
            <CurrentClubYearLabel >Year Joined:</CurrentClubYearLabel>
            <DataCurrentJoined style={{marginLeft:"181px"}}>{currentJoined}</DataCurrentJoined>
            </DataDiv>
            <DataDiv
             data-aos="fade-up"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
            >
            <PreviousClubLabel>Previous Club:</PreviousClubLabel>
            <DataPreviousClub style={{marginLeft:"163px"}}>{previousClub}</DataPreviousClub>
            </DataDiv>
            <DataDiv
             data-aos="fade-up"
              
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
            >
            <PreviousClubYearLabel>Year Joined:</PreviousClubYearLabel>
            <DataPreviousJoined style={{marginLeft:"181px"}}>{previousJoined}</DataPreviousJoined>
            </DataDiv>
            </Details>
            
        </Head>
    )
}

export default PlayerDetails
