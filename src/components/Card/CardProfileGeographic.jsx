import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
export default function CardProfileGeographic(props) {
  return (
    <div className="CardProfileGeographic">
      <div className="CardProfileGeographicTitle">
        Geographic areas you operate
      </div>
      <div className="geoContainer">
        <div className="getTitle">
          <div>Selected Area</div>{' '}
          <div className="iconcupp">
            {/* <FontAwesomeIcon icon={faAngleUp} color="#2691a3" fontSize="15px" /> */}
          </div>
        </div>
        <div className="getAreaListContainer">
          {props.geographicareas &&
          <div className="geoAreaList">Geographic Area1</div>
          }
          {/* <div className="geoAreaList">Geographic Area2</div>
          <div className="geoAreaList">Geographic Area3</div>
          <div className="geoAreaList">Geographic Area4</div>
          <div className="geoAreaList">Geographic Area4</div> */}
        </div>
      </div>
    </div>
  );
}
