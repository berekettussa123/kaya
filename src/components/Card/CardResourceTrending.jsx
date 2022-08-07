import React, { useState } from 'react';
import TitleList from '../Modals/TitleLists/TitleList';

export default function CardResourceTrending() {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className="CardResourceTrending">
      <div className="trendingTitle">Your Trending Resources</div>
      <div className="trendingContainer"></div>
      <div className="textAreaLink" onClick={showModal}>
        View All
      </div>
      <TitleList show={show} handleClose={hideModal} />{' '}
    </div>
  );
}
