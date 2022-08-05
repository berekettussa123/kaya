import React from 'react';
import './listOfResources.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons' // <-- import styles to be used
import { faStar } from '@fortawesome/free-solid-svg-icons' // <-- import styles to be used
import { red } from '@material-ui/core/colors';
// import { faCoffee } from '@fortawesome/free-brands-svg-icons' // <-- import styles to be used

export default function ListOfResources() {
  return (
    <div className="listResourceContainer">
      <div className="listResourceTitle">Sleeping well Tips</div>
      
          <div className="resourceCategory">Sleep Issues</div>
          <div className="resourceIconContainer">
            <div className='removeIcon'>Remove</div>
            <div><FontAwesomeIcon icon={faThumbsUp} color="#2691a3" size='2x' /></div>
            <div className='iconandrating'>
              <div className="iconcontainer"><FontAwesomeIcon icon={faStar} color="#2691a3" size='1x' /></div>
              <div className="rating">4.5</div>
            </div>
          </div>
        
    </div>
  );
}
