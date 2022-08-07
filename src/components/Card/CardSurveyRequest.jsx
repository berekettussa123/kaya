import React, { useState } from 'react'
import TitleList from '../Modals/TitleLists/TitleList';

export default function CardSurveyRequest() {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  
  return (
    <div className='CardResourceTrending CardSurveyTrending'>
        <div className="trendingTitle">
        Service Requested
        </div>
        <div className="trendingContainer requestContainer">

        </div>
        <div className="textAreaLink" onClick={showModal}>View All</div>
      <TitleList show={show} handleClose={hideModal}/>
    </div>
  )
}
