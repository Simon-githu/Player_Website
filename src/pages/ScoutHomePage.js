import React from 'react'
import { useHistory } from 'react-router-dom'
import fire from '../firebase'

function ScoutHomePage() {
    const navigate=useHistory()
    const logout =()=>{
        fire.auth().signOut()
        navigate.push('/')
    }
    return (
        <div>
            <h1>SCOUT HOME PAGE</h1>
            <button onClick={logout}>LogOut</button>
        </div>
    )
}

export default ScoutHomePage
