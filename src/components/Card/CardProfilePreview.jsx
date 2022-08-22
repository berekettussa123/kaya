import React, { useState } from 'react'
import ProfilePreview from '../Modals/ProfilePreview/ProfilePreview'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
export default function CardProfilePreview(props) {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
const handleClick =()=>{
  
}
  return (
    <div className='CardProfilePreviewContainer'>
      <div className="checkboxContainerProifle">
        <div className="profileServiceTitle">
        Do you provide service online?
        </div>
        <div className="profileTwoButtons">
          <div className="yesButtonProfile">
            Yes
          </div>
          <div className="yesButtonProfile">
            No
          </div>
        </div>
      </div>
      <div className="previewButtons">
        <div className="previewButton " onClick={showModal}>
            Preview
        </div>
        <div className="saveButtonP" onClick={props.saveProfile}>
            Save
        </div>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.open}
        onClick={props.handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        <ProfilePreview profileData={props.profileData} image={props.image} show={show} handleClose={hideModal}/>
      </div>
    </div>
  )
}
