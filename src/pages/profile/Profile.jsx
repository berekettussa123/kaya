import React from 'react';
import CardProfile from '../../components/CardProfile/CardProfile';
import Cards from '../../components/Cards/Cards';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './profile.css';
export default function Profile() {
  return (
    <div className="HomeContainer">
      <Sidebar />
      <div className="mainContainers">
        <Navbar />
        <CardProfile />
      </div>
    </div>
  );
}
