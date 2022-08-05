import React from 'react'
import CardQuestions from '../../components/CardQuestions/CardQuestions'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './questinos.css'
export default function Questions() {
  return (
    <div className="HomeContainer">
    <Sidebar />
    <div className="mainContainers">
    <Navbar />
    <CardQuestions/>


    </div>

  </div>
  )
}
