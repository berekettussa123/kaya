import React from 'react';
import Cards from '../../components/Cards/Cards';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './overview.css'
export default function Overview() {
  return (
    <div className="HomeContainer">
      <Sidebar />
      <div className="mainContainers">
      <Navbar />
      <Cards/>

      </div>

    </div>
  );
}
