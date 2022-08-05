import React from 'react';
import './card.css';
import profilecircle from '../../assets/images/profile-circle.png';
import Logo from '../../assets/images/Logo.png';
export default function Card(props) {
  const widt = 298.22;
  const heig = 135;
  return (
    <>
   <div style={{ width: `${widt}px`, height:`${heig}px` }} className="cardContainer">
      <div className="addLogo">
        <img src={Logo} alt="" />
        Add a Logo
      </div>
      <div className="helpButton">
        <div className="navHelpButton">
          <img src={profilecircle} alt="" />
        </div>
        <div className="navButtonTitle">
          <p>Upload</p>
        </div>
      </div>
      
    </div>
    
    
    
    </>
  );
}
