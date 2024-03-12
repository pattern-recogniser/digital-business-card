import { useState } from 'react'
import userPic from './assets/anjali.jpg'
import Title from './Title.jsx'
import Buttons from './Buttons.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
export default function App() {

  return (
    <div class="container">
        <img src={userPic} className="profile-pic" alt="headshot" />
        <Title/>
        <Buttons/>
        <Content/>
        <Footer/>
    </div>
  )
}

