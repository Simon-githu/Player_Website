import chroma from 'chroma-js'
const genderStyles = {
    control: (base, state) => ({
      ...base,
    
      background: "rgba(255,255,255,0.2)",
      border:"none",
      outline:"none",
      borderRadius:5,
      left:14,
      top:5,
      boxShadow:"0 5px 51px rgba(0,0,0,0.05)",
      borderRight:"1px solid rgba(255,255,255,0.2)",
  borderBottom:"1px solid rgba(255,255,255,0.2)",
  "&:hover": {
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "null" : "null"
  },
  
      // match with the menu
      width:200,
     color:"white",
    //  Iphone x
     "@media only screen and (device-width: 375px) and (device-height: 812px)":{
     width:325
    },
  // Moto g4
    "@media only screen and (device-width : 360px) and (device-height:640px)":{
      width:315
      },
       /* pixel 2 */
  "@media only screen and (device-width : 411px) and (device-height:731px)":{
   width:359
      } ,
                  /* pixel 2 xl */
  "@media only screen and (device-width : 411px) and (device-height:823px)":{
    width:359,
    },
     /* iphone 5/se */
    " @media only screen and (device-width : 320px) and (device-height:568px)":{
      width:280,
    },    
     /* iphone 6/7/8 */
  "@media only screen and (device-width : 375px) and (device-height:667px)":{
    width:327,
    },
     /* iphone 6/7/8 plus */
  "@media only screen and (device-width : 414px) and (device-height:736px)":{
    width:359,
    },
      /* galaxy fold */
 " @media only screen and (device-width : 280px) and (device-height:653px)":{
  width:244,
    },
    }),
    menu: (base,state) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 3,
      // kill the gap
  
     marginLeft:13.5,
      width:200,
      background: "linear-gradient(to right top,#65dfc9,#6cdbeb)",
      border:"none",
      outline:"none",
      borderColor:"#fff",
      boxShadow:"0 5px 51px rgba(0,0,0,0.05)",
      borderRight:"1px solid rgba(255,255,255,0.2)",
  borderBottom:"1px solid rgba(255,255,255,0.2)",
  color:"#fff",
  // Iphone x
  "@media only screen and (device-width: 375px) and (device-height: 812px)":{
    width:325
   },
  // Moto g4
  "@media only screen and (device-width : 360px) and (device-height:640px)":{
    width:315
    },
       /* pixel 2 */
      "@media only screen and (device-width : 411px) and (device-height:731px)":{
        width:359
           },
                           /* pixel 2 xl */
  "@media only screen and (device-width : 411px) and (device-height:823px)":{
    width:359,
    },
     /* iphone 5/se */
    " @media only screen and (device-width : 320px) and (device-height:568px)":{
      width:280,
    },    
     /* iphone 6/7/8 */
  "@media only screen and (device-width : 375px) and (device-height:667px)":{
    width:327,
    },
     /* iphone 6/7/8 plus */
  "@media only screen and (device-width : 414px) and (device-height:736px)":{
    width:359,
    },
      /* galaxy fold */
 " @media only screen and (device-width : 280px) and (device-height:653px)":{
  width:244,
    },
    }),
    singleValue: (base) => ({
      ...base,
      color: '#fff'
    }),
    dropdownIndicator:(base)=>({
      ...base,
      color:"#fff",
      "&:hover":{
        color:"#6cdbeb"
    }

    }),
    placeholder:(base)=>({
      ...base,
      color:"#fff"
    }),
    option: (styles, {  isFocused }) => {
      // const color = chroma(data.color);
      
      return {
        ...styles,
        backgroundColor: isFocused ? "#6cdbeb" : null,
        color: "white"
      };
    },
    input:(base)=>({
        ...base,

        color:"#fff"
    })
   
  };
  //-----------------------------------------------------------------------------
  const footStyles = {
    control: (base, state) => ({
      ...base,
    
      background: "rgba(255,255,255,0.2)",
      border:"none",
      outline:"none",
      borderRadius:5,
      left:14,
      top:5,
      boxShadow:"0 5px 51px rgba(0,0,0,0.05)",
      borderRight:"1px solid rgba(255,255,255,0.2)",
  borderBottom:"1px solid rgba(255,255,255,0.2)",
  "&:hover": {
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "null" : "null"
  },
      // match with the menu
      width:200,
     color:"white",
     "@media only screen and (device-width: 375px) and (device-height: 812px)":{
      width:325
     },
     "@media only screen and (device-width : 360px) and (device-height:640px)":{
      width:315
      },
      "@media only screen and (device-width : 411px) and (device-height:731px)":{
        width:359
           },
                           /* pixel 2 xl */
  "@media only screen and (device-width : 411px) and (device-height:823px)":{
    width:359,
    },
     /* iphone 5/se */
    " @media only screen and (device-width : 320px) and (device-height:568px)":{
      width:280,
    },    
     /* iphone 6/7/8 */
  "@media only screen and (device-width : 375px) and (device-height:667px)":{
    width:327,
    },
     /* iphone 6/7/8 plus */
  "@media only screen and (device-width : 414px) and (device-height:736px)":{
    width:359,
    },
      /* galaxy fold */
 " @media only screen and (device-width : 280px) and (device-height:653px)":{
  width:244,
    },
    }),
    menu: (base,state) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 3,
      // kill the gap
      top:40,
     marginLeft:13.5,
      width:200,
      background: "linear-gradient(to right top,#65dfc9,#6cdbeb)",
      border:"none",
      outline:"none",
      borderColor:"#fff",
      boxShadow:"0 5px 51px rgba(0,0,0,0.05)",
      borderRight:"1px solid rgba(255,255,255,0.2)",
  borderBottom:"1px solid rgba(255,255,255,0.2)",
  color:"#fff",
  "@media only screen and (device-width: 375px) and (device-height: 812px)":{
    width:325
   },
   "@media only screen and (device-width : 360px) and (device-height:640px)":{
    width:315
    },
    "@media only screen and (device-width : 411px) and (device-height:731px)":{
      width:359
         },
                         /* pixel 2 xl */
  "@media only screen and (device-width : 411px) and (device-height:823px)":{
    width:359,
    },
     /* iphone 5/se */
    " @media only screen and (device-width : 320px) and (device-height:568px)":{
      width:280,
    },    
     /* iphone 6/7/8 */
  "@media only screen and (device-width : 375px) and (device-height:667px)":{
    width:327,
    },
     /* iphone 6/7/8 plus */
  "@media only screen and (device-width : 414px) and (device-height:736px)":{
    width:359,
    },
      /* galaxy fold */
 " @media only screen and (device-width : 280px) and (device-height:653px)":{
  width:244,
    },
    }),
    singleValue: (base) => ({
      ...base,
      color: '#fff'
    }),
    dropdownIndicator:(base)=>({
      ...base,
      color:"#fff",
      "&:hover":{
        color:"#6cdbeb"
    }

    }),
    placeholder:(base)=>({
      ...base,
      color:"#fff"
    }),
    option: (styles, {  isFocused }) => {
      // const color = chroma(data.color);
      
      return {
        ...styles,
        backgroundColor: isFocused ? "#6cdbeb" : null,
        color: "white"
      };
    },
    input:(base)=>({
        ...base,

        color:"#fff"
    })
   
  };
  //---------------------------------------------------------------------------------
  const positionStyles = {
    control: (base, state) => ({
      ...base,
    
      background: "rgba(255,255,255,0.2)",
      border:"none",
      outline:"none",
      borderRadius:5,
      left:250,
      bottom:30,
      boxShadow:"0 5px 51px rgba(0,0,0,0.05)",
      borderRight:"1px solid rgba(255,255,255,0.2)",
  borderBottom:"1px solid rgba(255,255,255,0.2)",
  "&:hover": {
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "null" : "null"
  },
      // match with the menu
      width:205,
     color:"white",
    //  iphone x
     "@media only screen and (device-width: 375px) and (device-height: 812px)":{
      width:325,
      marginBottom:65,
      left:12,
      top:26,
     },
    //  Motot ga
     "@media only screen and (device-width : 360px) and (device-height:640px)":{
      width:315,
      marginBottom:65,
      left:12,
      top:26,
      },
      "@media only screen and (device-width : 411px) and (device-height:731px)":{
        width:359,
        marginBottom:65,
        left:12,
        top:26,
           },
                           /* pixel 2 xl */
  "@media only screen and (device-width : 411px) and (device-height:823px)":{
    width:359,
    marginBottom:65,
    left:12,
    top:26,
    },
     /* iphone 5/se */
    " @media only screen and (device-width : 320px) and (device-height:568px)":{
      width:280,
      marginBottom:65,
      left:12,
      top:26,
    },    
     /* iphone 6/7/8 */
  "@media only screen and (device-width : 375px) and (device-height:667px)":{
    width:327,
    marginBottom:65,
    left:12,
    top:26,
    },
     /* iphone 6/7/8 plus */
  "@media only screen and (device-width : 414px) and (device-height:736px)":{
    width:359,
    marginBottom:65,
    left:12,
    top:26,
    },
      /* galaxy fold */
 " @media only screen and (device-width : 280px) and (device-height:653px)":{
  width:244,
  marginBottom:65,
  left:12,
  top:26,
    }, 
    }),
    menu: (base,state) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 3,
      // kill the gap
      top:5,
    left:250,
      width:205,
      background: "linear-gradient(to right top,#65dfc9,#6cdbeb)",
      border:"none",
      outline:"none",
      borderColor:"#fff",
      boxShadow:"0 5px 51px rgba(0,0,0,0.05)",
      borderRight:"1px solid rgba(255,255,255,0.2)",
  borderBottom:"1px solid rgba(255,255,255,0.2)",
  color:"#fff",
  // iphone x
  "@media only screen and (device-width: 375px) and (device-height: 812px)":{
    width:325,
   top:60,
    left:12,
   
   },
   //  Motot ga
   "@media only screen and (device-width : 360px) and (device-height:640px)":{
    width:315,
    left:12,
    top:60,
    },
  //  pixel 2
   "@media only screen and (device-width : 411px) and (device-height:731px)":{
    width:359,
    top:60,
    left:12,
       },
                               /* pixel 2 xl */
  "@media only screen and (device-width : 411px) and (device-height:823px)":{
    width:359,
    top:60,
    left:12,
    },
     /* iphone 5/se */
    " @media only screen and (device-width : 320px) and (device-height:568px)":{
      width:280,
      top:60,
      left:12,
    },    
     /* iphone 6/7/8 */
  "@media only screen and (device-width : 375px) and (device-height:667px)":{
    width:327,
    top:60,
    left:12,
    },
     /* iphone 6/7/8 plus */
  "@media only screen and (device-width : 414px) and (device-height:736px)":{
    width:359,
    top:60,
    left:12,
    },
      /* galaxy fold */
 " @media only screen and (device-width : 280px) and (device-height:653px)":{
  width:244,
  top:60,
  left:12,
    }, 
    }),
    singleValue: (base) => ({
      ...base,
      color: '#fff'
    }),
    dropdownIndicator:(base)=>({
      ...base,
      color:"#fff",
      "&:hover":{
        color:"#6cdbeb"
    }

    }),
    placeholder:(base)=>({
      ...base,
      color:"#fff"
    }),
    option: (styles, {  isFocused }) => {
      // const color = chroma(data.color);
     
      return {
        ...styles,
        
        backgroundColor: isFocused ? "#6cdbeb" : null,
        color: "white"
      };
    },
   
        menuList: (base) => ({
          ...base,
          
      height:"150px",
         "::-webkit-scrollbar": {
           width: "9px"
         },
         "::-webkit-scrollbar-track": {
           background: "#6cdbeb"
         },
         "::-webkit-scrollbar-thumb": {
           background: "#888"
         },
         "::-webkit-scrollbar-thumb:hover": {
           background: "#555"
         }
      }),
      input:(base)=>({
          ...base,

          color:"#fff"
      })
   
  };
  //--------------------------------------------------------------------------------------------------
  const otherPositionStyles = {
    control: (base, state) => ({
      ...base,
    
      background: "rgba(255,255,255,0.2)",
      border:"none",
      outline:"none",
      borderRadius:5,
      left:13,
      bottom:20,
      boxShadow:"0 5px 51px rgba(0,0,0,0.05)",
      borderRight:"1px solid rgba(255,255,255,0.2)",
  borderBottom:"1px solid rgba(255,255,255,0.2)",
  "&:hover": {
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "null" : "null"
  },
      // match with the menu
      width:660,
     color:"white",
     "@media only screen and (device-width: 375px) and (device-height: 812px)":{
      width:325
     },
     "@media only screen and (device-width : 360px) and (device-height:640px)":{
      width:315
      },
      "@media only screen and (device-width : 411px) and (device-height:731px)":{
        width:359,
       
           } ,

             /* pixel 2 xl */
  "@media only screen and (device-width : 411px) and (device-height:823px)":{
    width:359,
    },
     /* iphone 5/se */
    " @media only screen and (device-width : 320px) and (device-height:568px)":{
      width:280,
    },    
     /* iphone 6/7/8 */
  "@media only screen and (device-width : 375px) and (device-height:667px)":{
    width:328,
    },
     /* iphone 6/7/8 plus */
  "@media only screen and (device-width : 414px) and (device-height:736px)":{
    width:359,
    },
      /* galaxy fold */
 " @media only screen and (device-width : 280px) and (device-height:653px)":{
  width:244,
    },
    }),
    menu: (base,state) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 3,
      // kill the gap
      top:14,
      left:13,
      
      width:660,
      background: "linear-gradient(to right top,#65dfc9,#6cdbeb)",
      border:"none",
      outline:"none",
      borderColor:"#fff",
      boxShadow:"0 5px 51px rgba(0,0,0,0.05)",
      borderRight:"1px solid rgba(255,255,255,0.2)",
  borderBottom:"1px solid rgba(255,255,255,0.2)",
  color:"#fff",
  "@media only screen and (device-width: 375px) and (device-height: 812px)":{
    width:325
   },
   "@media only screen and (device-width : 360px) and (device-height:640px)":{
    width:315
    },
         /* pixel 2 xl */
  "@media only screen and (device-width : 411px) and (device-height:823px)":{
    width:359,
    },
     /* iphone 5/se */
    " @media only screen and (device-width : 320px) and (device-height:568px)":{
      width:280,
    },    
     /* iphone 6/7/8 */
  "@media only screen and (device-width : 375px) and (device-height:667px)":{
    width:328,
    },
     /* iphone 6/7/8 plus */
  "@media only screen and (device-width : 414px) and (device-height:736px)":{
    width:359,
    },
      /* galaxy fold */
 " @media only screen and (device-width : 280px) and (device-height:653px)":{
  width:244,
    },
    }),
    singleValue: (base) => ({
      ...base,
      color: '#fff'
    }),
    dropdownIndicator:(base)=>({
      ...base,
      color:"#fff",
      "&:hover":{
        color:"#6cdbeb"
    }

    }),
    placeholder:(base)=>({
      ...base,
      color:"#fff"
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : null,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
        cursor: isDisabled ? "not-allowed" : "default",
  
        ":active": {
          ...styles[":active"],
          backgroundColor:
            !isDisabled && (isSelected ? data.color : color.alpha(0.3).css())
        }
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css()
      };
    },

    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color
    }),

    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.color,
        color: "white"
      }
    }),
  

        menuList: (base) => ({
          ...base,
          
      height:"100px",
         "::-webkit-scrollbar": {
           width: "9px"
         },
         "::-webkit-scrollbar-track": {
           background: "#6cdbeb"
         },
         "::-webkit-scrollbar-thumb": {
           background: "#888"
         },
         "::-webkit-scrollbar-thumb:hover": {
           background: "#555"
         }
      }),
      input:(base)=>({
          ...base,

          color:"#fff"
      })
   
  };
//===============================================================================================================
  const gender = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  
  ]
  //------------------------------------------------------------------
  const foot = [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
    { value: 'both', label: 'Both' }
  
  ]
  //---------------------------------------------------------------
  const positions = [
    { value: 'center-back', label: 'Center-Back' },
    { value: 'sweeper', label: 'Sweeper' },
    { value: 'full-back', label: 'Full-Back' },
    { value: 'wing-back', label: 'Wing-Back' },
    { value: 'center-midfield', label: 'Center-Midfield' },
    { value: 'defensive-midfield', label: 'Defensive-Midfield' },
    { value: 'attecking-midfield', label: 'Attacking-Midfield' },
    { value: 'wide-midfield', label: 'Wide-Midfield' },
    { value: 'striker', label: 'Striker' },
    { value: 'center-forward', label: 'Center-Forward' },
    { value: 'winger', label: 'Winger' },
  ]
  //-----------------------------------------------------------------
  const otherPositions = [
    { value: 'center-back', label: 'Center-Back', color: "#00B8D9" },
    { value: 'sweeper', label: 'Sweeper',color: "#0052CC"  },
    { value: 'full-back', label: 'Full-Back',color: "#00875A" },
    { value: 'wing-back', label: 'Wing-Back',color: "#FF5630"  },
    { value: 'center-midfield', label: 'Center-Midfield',color: "#253858"  },
    { value: 'defensive-midfield', label: 'Defensive-Midfield',color: "#FFC400" },
    { value: 'attecking-midfield', label: 'Attacking-Midfield',color: "#36B37E" },
    { value: 'wide-midfield', label: 'Wide-Midfield',color: "#5243AA"    },
    { value: 'striker', label: 'Striker',color: "#FF8B00" },
    { value: 'center-forward', label: 'Center-Forward',color: "#666666" },
    { value: 'winger', label: 'Winger',color: "#FF5630" },
  ]
export{genderStyles,footStyles,positionStyles,otherPositionStyles,gender,foot,positions,otherPositions}  