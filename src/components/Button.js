import styled from  'styled-components'
import {Link} from 'react-router-dom'

export const Button =styled(Link)`
background:rgba(255,255,255,0.05);
white-space:nowrap;
outline:none;
border:none;
border-radius:8px;
min-width:100px;
max-width:200px;
cursor:pointer;
text-decoration:none;
transition:0.3s;
display:flex;
justify-content:center;
align-items:center;
padding:${({big})=>(big?'16px 40px':'14px 24px')};
color:${({primary})=>(primary?'#fff':'#000d1a')};
font-size:${({big})=>(big?'20px':'14px')};
box-shadow: 0 15px 35px rgba(0,0,0,0.2);
backdrop-filter: blur(10px);
transition:1s;
&:hover{
transform:translateY(-2px);
}
`