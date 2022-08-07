import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
export default function CardProfileGeographic() {
  return (
    <div className="CardProfileGeographic">
      <div className="CardProfileGeographicTitle">
        Geographic areas you operate
      </div>
      <div className="geoContainer">
        <div className="getTitle">
          <div>Select Area</div>{' '}
          <div className="iconcupp">
            <FontAwesomeIcon icon={faAngleUp} color="#2691a3" fontSize="15px" />
          </div>
        </div>
        <div className="getAreaListContainer">
          <div className="geoAreaList">Shopping</div>
          <div className="geoAreaList">Shopping</div>
          <div className="geoAreaList">Shopping</div>
          <div className="geoAreaList">Shopping</div>
        </div>
      </div>
    </div>
  );
}
