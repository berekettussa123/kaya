import React, { useState } from 'react';
import TitleList from '../Modals/TitleLists/TitleList';

export default function CardSurveyChallenges(props) {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  
  return (
    <div className="CardResourceTrending">
      <div className="trendingTitle">
        {props.title ? props.title : 'Top Well Being Challenges'}
      </div>
      <div className="trendingContainer"></div>
      <div className="textAreaLink" onClick={showModal}>View All</div>
      <TitleList show={show} handleClose={hideModal}/>
    </div>
  );
}
