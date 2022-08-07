import { border } from '@mui/system'
import React, { useState } from 'react'
import TitleList from '../Modals/TitleLists/TitleList';

export default function SmallCards(props) {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  return (
    <div style={{borderLeft:`{${props.border === "none" && props.border}}!important`}} className='SmallCardsContainer'>
      <div className="smallCardTitle">
      {props.title}
      </div>
      <div className="smallBody">

      </div>
      <div className="textAreaLink" onClick={showModal}>View All</div>
          <TitleList show={show} handleClose={hideModal}/>
    </div>
  )
}
