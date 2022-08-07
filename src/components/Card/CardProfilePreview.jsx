import React, { useState } from 'react'
import ProfilePreview from '../Modals/ProfilePreview/ProfilePreview'

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
        <div className="saveButtonP">
            Save
        </div>
        <ProfilePreview show={show} handleClose={hideModal}/>
      </div>
    </div>
  )
}
