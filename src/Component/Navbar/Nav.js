import React from 'react'
import "./Nav.css";

function Nav() {
  return (
    <div className='navbar'>
     <div className='title'>
        <h2>iMeet</h2>
     </div>
     <div className='title01'>
        <a href=''>Home</a>
        <a href=''>About</a>
        <a href=''>Contact</a>
     </div>
    </div>
  )
}

export default Nav