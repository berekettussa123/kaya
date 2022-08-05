import React from 'react'
import Cards from '../../components/Cards/Cards'
import CardServices from '../../components/CardsServices/CardServices'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Services() {
  return (
    <div className="HomeContainer">
    <Sidebar />
    <div className="mainContainers">
    <Navbar />
    <CardServices/>


    </div>

  </div>
  )
}
