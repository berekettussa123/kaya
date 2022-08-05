import React from 'react'
import CardServeys from '../../components/CardServeys/CardServeys'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './surveys.css'
export default function Surveys() {
  return (
    <div className="HomeContainer">
    <Sidebar />
    <div className="mainContainers">
    <Navbar />
    <CardServeys/>


    </div>

  </div>
  )
}
