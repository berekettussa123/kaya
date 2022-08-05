import React from 'react';
import editbutton from '../../assets/images/edit-2.png';
export default function CardEditlogin() {
  return (
    <div className="cardContainer cardContainer2 cardInput">
      <div className="contactTitle">Edit & Manage Login Information</div>

      <div className="CardInput cardInputContact">
        <input required type="text" />
        <label>username</label>
      </div>
      <div className="CardInput cardInputContact">
        <input required type="text" />
        <label>password</label>
      </div>
      <div className="helpButton">
        <div className="navHelpButton">
          <img src={editbutton} alt="" />
        </div>
        <div className="navButtonTitle">
          <p>Edit</p>
        </div>
      </div>
    
    </div>
  );
}
