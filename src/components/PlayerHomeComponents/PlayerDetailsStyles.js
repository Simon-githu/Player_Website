
import styled from "styled-components";

const Head = styled.div`
position:absolute;

`;
//=======================================================================
const Head1 = styled.h1`
margin-bottom:10px;
`;
//====================================================================
const Details =styled.div`
h1{
    display:flexbox;


}
`;
const TitleDiv =styled.div`
display:flex;
align-items:center;
height:25px;
width:660px;
background:red;
border-radius:5px;
margin-bottom:10px;
@media only screen and (device-width: 375px) and (device-height: 812px){
   width:90%;
}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    width:98% 
}
     /* pixel 2 */
     @media only screen and (device-width : 411px) and (device-height:731px){
    width:90%
}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    width:98%
}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    width:95%;
   
}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
    width:88%
}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    width:97%
}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
    width:62%
}
`;
//===============================================================================================
const Title = styled.h2`
color:#fff;
margin-left:10px;

`;
//==========================================================================================
const NameText =styled.h2`
margin-left:10px;
position:absolute;
left:280px;
color:#fff;
@media only screen and (device-width: 375px) and (device-height: 812px){
    position:absolute;
left:160px;
}

/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    position:relative;
left:60px;
}
     /* pixel 2 */
     @media only screen and (device-width : 411px) and (device-height:731px){
        position:absolute;
left:160px;
}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    position:absolute;
left:160px;
}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    position:relative;
left:30px;
}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
    position:absolute;
left:160px;
display: flexbox;
}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    position:absolute;
left:160px;
}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
    position:absolute;
left:160px;
}
`;
//=================================================================
const DataLabel =styled.h2`
margin-left:10px;
margin-bottom:10px;

`;//==============================================================
const CurrentClubLabel =styled.h2`
margin-left:10px;
margin-bottom:10px;
@media only screen and (device-width: 375px) and (device-height: 812px){
position:absolute;
}
     /* pixel 2 */
      @media only screen and (device-width : 411px) and (device-height:731px){
        position:absolute;

}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    position:absolute;

}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    position:absolute;

}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    position:absolute;

}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
    position:absolute;


}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    position:absolute;

}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
    position:absolute;

}
`;
//===================================================================
const CurrentClubYearLabel =styled.h2`
margin-left:10px;
margin-bottom:10px;
@media only screen and (device-width: 375px) and (device-height: 812px){
position:absolute;
margin-top:5px
}

     /* pixel 2 */
      @media only screen and (device-width : 411px) and (device-height:731px){
        position:absolute;
        margin-top:5px
}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    position:absolute;
    margin-top:5px
}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
     position:absolute;
        margin-top:5px

}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
     position:absolute;
        margin-top:5px

}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
     position:absolute;
        margin-top:5px


}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
     position:absolute;
        margin-top:5px

}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
     position:absolute;
        margin-top:5px

}
`;
//=======================================================================
const PreviousClubLabel =styled.h2`
margin-left:10px;
margin-bottom:10px;
@media only screen and (device-width: 375px) and (device-height: 812px){
position:absolute;
margin-top:10px;
}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
  position:absolute;
margin-top:5px;


}
   /* pixel 2 */
   @media only screen and (device-width : 411px) and (device-height:731px){
      position:absolute;
margin-top:10px;

}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
  position:absolute;
margin-top:10px;

}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
  position:absolute;
margin-top:10px;

}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
  position:absolute;
margin-top:10px;


}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
  position:absolute;
margin-top:10px;

}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
  position:absolute;
margin-top:10px;

}
`;
//==============================================================
const PreviousClubYearLabel =styled.h2`
margin-left:10px;
margin-bottom:10px;
@media only screen and (device-width: 375px) and (device-height: 812px){
margin-top:15px;

}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    margin-top:5px;
}
     /* pixel 2 */
     @media only screen and (device-width : 411px) and (device-height:731px){
        margin-top:10px;

}


     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    margin-top:10px;

}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    margin-top:10px;

}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
    margin-top:10px;


}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    margin-top:10px;

}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
    margin-top:10px;

}
`;
//==============================================================
const DataDiv =styled.div`
display:flex;

`;
const DobStyle={
  marginLeft:170,

}
const DataDob =styled.h2`

@media only screen and (device-width: 375px) and (device-height: 812px){
  position:absolute;

}
    /* pixel 2 */
    @media only screen and (device-width : 411px) and (device-height:731px){
        position:absolute;
     
}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    position:absolute;
    margin-top:5px
}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    position:absolute;

}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    position:absolute;

}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
    position:absolute;


}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    position:absolute;

}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
    position:absolute;

}
`;
//=====================================================
const DataPob =styled.h2`

@media only screen and (device-width: 375px) and (device-height: 812px){
  position:absolute;
  left:6px;
}
    /* pixel 2 */
    @media only screen and (device-width : 411px) and (device-height:731px){
        position:absolute;
        left:6px;
}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    position:absolute;
    left:6px;
}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    position:absolute;
    left:6px;
}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    position:absolute;
    left:6px;
}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
    position:absolute;
    left:6px;

}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    position:absolute;
    left:6px;
}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
    position:absolute;
    left:6px;
}
`;

//=================================================
const DataAge  =styled.h2`

@media only screen and (device-width: 375px) and (device-height: 812px){
  position:absolute;
  left:-72px
}
    /* pixel 2 */
    @media only screen and (device-width : 411px) and (device-height:731px){
        position:absolute;
        left:-72px
}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    position:absolute;
    left:-72px
}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    position:absolute;
    left:-72px
}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    position:absolute;
    left:-72px
}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
    position:absolute;

    left:-72px
}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    position:absolute;
    left:-72px
}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
    position:absolute;
    left:-72px
}
`;
//========================================================
const DataHeight  =styled.h2`

@media only screen and (device-width: 375px) and (device-height: 812px){
  position:absolute;
  left:-51px
}
    /* pixel 2 */
    @media only screen and (device-width : 411px) and (device-height:731px){
        position:absolute;
  left:-51px
}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    position:absolute;
  left:-51px
}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    position:absolute;
  left:-51px
}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    position:absolute;
  left:-51px

}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
    position:absolute;
  left:-51px


}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    position:absolute;
  left:-51px

}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
    position:absolute;
  left:-51px

}
`;
//==========================================================
const DataGender  =styled.h2`

@media only screen and (device-width: 375px) and (device-height: 812px){
  position:absolute;
  left:-46px
}
    /* pixel 2 */
    @media only screen and (device-width : 411px) and (device-height:731px){
        position:absolute;
        left:-46px
}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    position:absolute;
    left:-46px
}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    position:absolute;
    left:-46px
}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    position:absolute;
    left:-46px
}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
    position:absolute;

    left:-46px
}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    position:absolute;
    left:-46px
}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
    position:absolute;
    left:-46px
}
`;
//======================================================
const DataFoot  =styled.h2`

@media only screen and (device-width: 375px) and (device-height: 812px){
  position:absolute;
  left:-70px
}
    /* pixel 2 */
    @media only screen and (device-width : 411px) and (device-height:731px){
        position:absolute;
        left:-70px
}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    position:absolute;
    left:-70px
}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    position:absolute;
    left:-70px
}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    position:absolute;
    left:-70px
}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
    position:absolute;
    left:-70px

}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    position:absolute;
    left:-70px
}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
    position:absolute;
    left:-70px
}
`;
//==========================================================
const DataMainPosition   =styled.h2`

@media only screen and (device-width: 375px) and (device-height: 812px){
  position:absolute;
  left:-30px
}
    /* pixel 2 */
    @media only screen and (device-width : 411px) and (device-height:731px){
        position:absolute;
        left:-30px
}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    position:absolute;
    left:-33px
    
}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
   position:absolute;
        left:-30px

}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
   position:absolute;
        left:-30px

}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
   position:absolute;
        left:-30px


}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
   position:absolute;
        left:-30px

}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
   position:absolute;
        left:-30px

}
`;
//======================================================
const DataCurrentClub   =styled.h2`

@media only screen and (device-width: 375px) and (device-height: 812px){
  
}

/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){


    
}
`;

const DataCurrentJoined   =styled.h2`

@media only screen and (device-width: 375px) and (device-height: 812px){
  margin-top:5px;
  position:relative;
  left:-10px;
 
}
   /* pixel 2 */
   @media only screen and (device-width : 411px) and (device-height:731px){
    margin-top:5px;
  position:relative;
  left:-10px;

}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    margin-top:5px;
  position:relative;
  left:-10px;
    
}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    margin-top:5px;
  position:relative;
  left:-10px;

}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    margin-top:5px;
  position:relative;
  left:-10px;

}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
    margin-top:5px;
  position:relative;
  left:-10px;


}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    margin-top:5px;
  position:relative;
  left:-10px;

}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
    margin-top:5px;
  position:relative;
  left:-10px;

}
`;
//===========================================================
const DataPreviousClub=styled.h2`

@media only screen and (device-width: 375px) and (device-height: 812px){
  position:relative;
  left:10px;
  margin-top:10px;
 
}

   /* pixel 2 */
   @media only screen and (device-width : 411px) and (device-height:731px){
    position:relative;
  left:10px;
  margin-top:10px;

}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    position:relative;
  left:10px;
  margin-top:5px;
 
    
}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    position:relative;
  left:10px;
  margin-top:10px;

}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    position:relative;
  left:10px;
  margin-top:10px;

}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
    position:relative;
  left:10px;
  margin-top:10px;


}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    position:relative;
  left:10px;
  margin-top:10px;

}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
    position:relative;
  left:10px;
  margin-top:10px;

}
`;//============================================================
const DataPreviousJoined   =styled.h2`
/* Iphone x */
@media only screen and (device-width: 375px) and (device-height: 812px){
  position:absolute;
  left:-10px;
  margin-top:15px;
}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    position:absolute;
  left:-10px;
  margin-top:5px;
}
   /* pixel 2 */
   @media only screen and (device-width : 411px) and (device-height:731px){
    position:absolute;
  left:-10px;
  margin-top:10px;

}

     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    position:absolute;
  left:-10px;
  margin-top:15px;

}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    position:absolute;
  left:-10px;
  margin-top:15px;

}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
    position:absolute;
  left:-10px;
  margin-top:15px;


}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    position:absolute;
  left:-10px;
  margin-top:15px;

}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
    position:absolute;
  left:-10px;
  margin-top:15px;

}
`;

const DataOtherPosition=styled.h2`

@media only screen and (device-width: 375px) and (device-height: 812px){
  position:absolute;
  left:5px;
  display:none
}
    /* pixel 2 */
    @media only screen and (device-width : 411px) and (device-height:731px){
        position:absolute;
  left:5px;
  display:none

}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    position:absolute;
  left:5px;
  display:none
}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    position:absolute;
  left:5px;
  display:none

}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    position:absolute;
  left:5px;
  display:none

}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
    position:absolute;
  left:5px;
  display:none


}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    position:absolute;
  left:5px;
  display:none

}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
    position:absolute;
  left:5px;
  display:none

}
`;
//=====================================================
const DataOtherPosition1=styled.h2`

padding-bottom:60px;
display:flex;
@media only screen and (device-width: 375px) and (device-height: 812px){
  position:absolute;
  left:5px;
  display:none
}
    /* pixel 2 */
    @media only screen and (device-width : 411px) and (device-height:731px){
        position:absolute;
  left:5px;
  display:none

}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    position:absolute;
  left:5px;
  display:none
}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    position:absolute;
  left:5px;
  display:none

}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    position:absolute;
  left:5px;
  display:none

}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
    position:absolute;
  left:5px;
  display:none


}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    position:absolute;
  left:5px;
  display:none

}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
    position:absolute;
  left:5px;
  display:none

}
`;
//===========================================================
const DataOtherPosition2=styled.h2`
position:absolute;
top:1.5rem;
left:292px;

@media only screen and (device-width: 375px) and (device-height: 812px){
  position:absolute;
  left:5px;
  display:none
}
    /* pixel 2 */
    @media only screen and (device-width : 411px) and (device-height:731px){
        position:absolute;
  left:5px;
  display:none

}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    position:absolute;
  left:5px;
  display:none
}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    position:absolute;
  left:5px;
  display:none

}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    position:absolute;

}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
    position:absolute;
  left:5px;
  display:none


}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    position:absolute;
  left:5px;
  display:none

}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
    position:absolute;
  left:5px;
  display:none

}
`;
//==========================================================
const DataOtherPosition3=styled.h2`
position:absolute;
top:3rem;
left:292px;
@media only screen and (device-width: 375px) and (device-height: 812px){
  position:absolute;
  left:5px;
  display:none
}
    /* pixel 2 */
    @media only screen and (device-width : 411px) and (device-height:731px){
        position:absolute;
  left:5px;
  display:none

}
/* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    position:absolute;
  left:5px;
  display:none
}
     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    position:absolute;
  left:5px;
  display:none

}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    position:absolute;
  left:5px;
  display:none

}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
    position:absolute;
  left:5px;
  display:none


}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    position:absolute;
  left:5px;
  display:none

}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
    position:absolute;
  left:5px;
  display:none

}
`;
//=============================================================
const ViewDiv =styled.div`
display:none;
@media only screen and (device-width: 375px) and (device-height: 812px){
  display:flex;
background: red;
  border-radius: 0.3rem;
  color: white;
  padding: 2px;
  position: relative;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: 1s;
  width:100px;
  position:absolute;
 bottom:0.3rem;
 left:10rem;
  &:hover {
  transform: scale(1.1);
}
  h2 {
  width: 40%;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0rem 0.5rem;
  font-size: large;}
  }
  /* Moto g4 */
@media only screen and (device-width : 360px) and (device-height:640px){
    display:flex;
   background: red;
  border-radius: 0.3rem;
  color: white;
  padding: 2px;
  position: relative;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: 1s;
  width:100px;
  position:absolute;
 bottom:0.1rem;
 left:9.5rem;
  &:hover {
  transform: scale(1.1);
}
  h2 {
  width: 40%;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0rem 0.5rem;
  font-size: large;
}
  }

     /* pixel 2 */
     @media only screen and (device-width : 411px) and (device-height:731px){
        display:flex;
   background: red;
  border-radius: 0.3rem;
  color: white;
  padding: 2px;
  position: relative;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: 1s;
  width:100px;
  position:absolute;
 bottom:0.1rem;
 left:9.5rem;
  &:hover {
  transform: scale(1.1);
}
  h2 {
  width: 40%;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0rem 0.5rem;
  font-size: large;
}

}

     /* pixel 2 xl */
@media only screen and (device-width : 411px) and (device-height:823px){
    display:flex;
   background: red;
  border-radius: 0.3rem;
  color: white;
  padding: 2px;
  position: relative;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: 1s;
  width:100px;
  position:absolute;
 bottom:0.1rem;
 left:9.5rem;
  &:hover {
  transform: scale(1.1);
}
  h2 {
  width: 40%;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0rem 0.5rem;
  font-size: large;
}

}
 /* iphone 5/se */
 @media only screen and (device-width : 320px) and (device-height:568px){
    display:flex;
   background: red;
  border-radius: 0.3rem;
  color: white;
  padding: 2px;
  position: relative;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: 1s;
  width:100px;
  position:absolute;
 bottom:0.1rem;
 left:9.5rem;
  &:hover {
  transform: scale(1.1);
}
  h2 {
  width: 40%;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0rem 0.5rem;
  font-size: large;
}  

}    
 /* iphone 6/7/8 */
@media only screen and (device-width : 375px) and (device-height:667px){
  
    display:flex;
   background: red;
  border-radius: 0.3rem;
  color: white;
  padding: 2px;
  position: relative;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: 1s;
  width:100px;
  position:absolute;
 bottom:0.1rem;
 left:9.5rem;
  &:hover {
  transform: scale(1.1);
}
  h2 {
  width: 40%;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0rem 0.5rem;
  font-size: large;
}

}
 /* iphone 6/7/8 plus */
@media only screen and (device-width : 414px) and (device-height:736px){
    display:flex;
   background: red;
  border-radius: 0.3rem;
  color: white;
  padding: 2px;
  position: relative;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: 1s;
  width:100px;
  position:absolute;
 bottom:0.1rem;
 left:9.5rem;
  &:hover {
  transform: scale(1.1);
}
  h2 {
  width: 40%;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0rem 0.5rem;
  font-size: large;
}

}
  /* galaxy fold */
@media only screen and (device-width : 280px) and (device-height:653px){
  
    display:flex;
   background: red;
  border-radius: 0.3rem;
  color: white;
  padding: 2px;
  position: relative;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: 1s;
  width:100px;
  position:absolute;
 bottom:0.1rem;
 left:9.5rem;
  &:hover {
  transform: scale(1.1);
}
  h2 {
  width: 40%;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0rem 0.5rem;
  font-size: large;
}
}
`;

export {Head,Head1,Details,TitleDiv,Title,NameText,DataLabel,DataDob,DataPob, DobStyle,DataAge,
       DataHeight,DataGender,DataFoot,DataMainPosition,DataOtherPosition,DataOtherPosition1,DataOtherPosition2,
       DataOtherPosition3,ViewDiv,DataCurrentClub,CurrentClubYearLabel,DataCurrentJoined,DataDiv,PreviousClubLabel,
       DataPreviousClub,PreviousClubYearLabel,DataPreviousJoined,CurrentClubLabel
}