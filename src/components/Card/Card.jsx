import React, { useState } from 'react';
import './card.css';
import profilecircle from '../../assets/images/profile-circle.png';
import Logo from '../../assets/images/Logo.png';
export default function Card(props) {
  const widt = 296;
  const heig = 135;
  // const [file, setFile] = useState(null);
  const handleChange=(e)=>{
    props.setFile(e.target.files[0])
    console.log(props.file)
  }
  return (
    <>
      <div
        style={{ width: `${widt}px`, height: `${heig}px` }}
        className="cardContainer"
      >
        <div className="addLogo addProfileLogoo">
          <input type="file" name={"name"} id={"name"} onChange={props?.handleChange}  accept=".png,.jpeg,.jpg"/>
          <label htmlFor={"name"}>
            <img htmlFor="" src={!props.file? (props.image?props.image:Logo): URL.createObjectURL(props.file)} alt="" />
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
