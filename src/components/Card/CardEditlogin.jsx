import React from 'react';
import editbutton from '../../assets/images/edit-2.png';
export default function CardEditlogin(props) {
  return (
    <div className="cardContainer cardContainer2 cardInput">
      <div className="contactTitle">Edit & Manage Login Information</div>

      <div className="CardInput cardInputContact">
        <input required type="text" name='username' defaultValue={props?.LoginData[0]} onChange={props.handleChange}/>
        <label>username</label>
      </div>
      <div className="CardInput cardInputContact">
        <input required type="password" name='password' defaultValue={props?.LoginData[1]} onChange={props.handleChange}/>
        <label>password</label>
      </div>
      {/* <div className="helpButton">
        <div className="navHelpButton">
          <img src={editbutton} alt="" />
        </div>
        <div className="navButtonTitle">
          <p>Edit</p>
        </div>
      </div> */}
    
    </div>
  );
}
