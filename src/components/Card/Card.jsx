import React from 'react';
import './card.css';
import profilecircle from '../../assets/images/profile-circle.png';
import Logo from '../../assets/images/Logo.png';
export default function Card(props) {
  const widt = 296;
  const heig = 135;
  return (
    <>
      <div
        style={{ width: `${widt}px`, height: `${heig}px` }}
        className="cardContainer"
      >
        <div className="addLogo addProfileLogoo">
          <input type="file" name="logoProfile" id="logoProfile" />
          <label htmlFor="logoProfile">
            <img htmlFor="" src={Logo} alt="" />
            Add a Logo
          </label>
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
