import React, { useEffect, useState } from 'react';
import ProfilePreview from '../Modals/ProfilePreview/ProfilePreview';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
export default function CardProfilePreview(props) {
  const [show, setShow] = useState(false);
  const [two, setTwo] = useState(true);
  const [one, setOne] = useState(true);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  useEffect(() => {
    console.log(props.provide);
  }, [props.provide]);
  const handleClick = () => {
    props.setProvide(1);
    setOne(true);
    setTwo(false);
  };
  const handleClick2 = () => {
    setOne(false);
    setTwo(true);
    props.setProvide(0);
  };
  return (
    <div className="CardProfilePreviewContainer">
      <div className="checkboxContainerProifle">
        <div className="profileServiceTitle">
          Do you provide service online?
        </div>
        <div className="profileTwoButtons">
          <div
            style={{
              backgroundColor: `${
                props.profileData?.service_online === '1' && one && '#2691a3'
              }`,
            }}
            className={`${
              (props.profileData?.service_online === '1' || one) &&
              props.provide === 1
                ? 'selectedMenu '
                : ''
            } ${props.provide===0 ? ' forceback ':''} yesButtonProfile`}
            onClick={handleClick}
          >
            Yes
          </div>
          <div
          style={{
            backgroundColor: `${
              props.profileData?.service_online === '0' && one && '#2691a3'
            }`,
          }}
            className={`${
              (props.profileData?.service_online === '0' || two) &&
              props.provide === 0
                ? 'selectedMenu '
                : ''
            } ${props.provide===1 ? ' forceback ':''} yesButtonProfile`}
            onClick={handleClick2}
          >
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
        <ProfilePreview
          profileData={props.profileData}
          image={props.image}
          show={show}
          handleClose={hideModal}
        />
      </div>
    </div>
  );
}
