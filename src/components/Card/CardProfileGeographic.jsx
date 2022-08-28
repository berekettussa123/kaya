import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
export default function CardProfileGeographic(props) {
  const handleClick=(item)=>{
    props.setGeographic(
      props.geographic?.includes(item)
        ? props.geographic.filter((n) => n !== item)
        : () => [...props?.geographic, item]
    );
  }
 
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
          {props.areas &&
            Object.values(props.areas)?.map((item) => (
              <div  className={`${
                props?.geographic?.includes(item)
                  ? 'backAdd '
                  : ''
              } geoAreaList`} onClick={()=>handleClick(item)}>{item}</div>
            ))}
          {/* <div className="geoAreaList">Geographic Area2</div>
          <div className="geoAreaList">Geographic Area3</div>
          <div className="geoAreaList">Geographic Area4</div>
          <div className="geoAreaList">Geographic Area4</div> */}
        </div>
      </div>
    </div>
  );
}
