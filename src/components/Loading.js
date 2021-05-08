import React from 'react'
import styled from 'styled-components'

function Loading() {
    return (
        <Video src='/videos/video-5.mp4' autoPlay loop muted/>
    )
}

export default Loading
const Video =styled.video`
object-fit: cover;
width: 100%;
height: 100%;
position: fixed;
z-index: -1;
`;