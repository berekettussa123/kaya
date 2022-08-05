import React from 'react'
import CardResources from '../../components/CardResources/CardResources'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './resources.css'
export default function Resources() {
  return (
    <div className="HomeContainer">
    <Sidebar />
    <div className="mainContainers">
    <Navbar />
    <CardResources/>


    </div>

  </div>
  )
}
