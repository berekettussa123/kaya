import React from 'react';
import kayalogo from '../../assets/images/kayalogo.png';
import profilecircle from '../../assets/images/profile-circle.png';
import './navbar.css'
export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navLogo">
        <img src={kayalogo} alt="" />
      </div>
      <div className="navButton">
        <div className="signoutButton">Signout</div>
        <div className="helpAndContact">
          <div className="helpButton">
            <div className="navHelpButton">
              <img src={profilecircle} alt="" />
            </div>
            <div className="navButtonTitle">
              <p>Help</p>
            </div>
          </div>
          <div className="contactButton">
          <div className="navContactButton">
              <img src={profilecircle} alt="" />
            </div>
            <div className="navButtonTitle">
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
