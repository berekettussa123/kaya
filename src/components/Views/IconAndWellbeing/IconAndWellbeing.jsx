import React from 'react';
import './iconAndWellbeing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
export default function IconAndWellbeing() {
  return (
    <div>
      <div className="centerIconAndTitleContainer">
        <div className="centerIconAndTitle">
          <div className="centerIcon">
            <FontAwesomeIcon icon={faCoins} color="#2691a3" size="2x" />
          </div>
          <div className="centerTitle">
            Financial <br /> Wellbeing
          </div>
        </div>
        <div className="centerIconAndTitle">
          <div className="centerIcon">
            <FontAwesomeIcon icon={faSmile} color="#2691a3" size="2x" />
          </div>
          <div className="centerTitle">
            Emotional <br /> Wellbeing
          </div>
        </div>
        <div className="centerIconAndTitle">
          <div className="centerIcon">
            <FontAwesomeIcon icon={faRunning} color="#2691a3" size="2x" />
          </div>
          <div className="centerTitle">
            Physical <br /> Wellbeing
          </div>
        </div>
        <div className="centerIconAndTitle">
          <div className="centerIcon">
            <FontAwesomeIcon icon={faBrain} color="#2691a3" size="2x" />
          </div>
          <div className="centerTitle">
            Mental <br /> Wellbeing
          </div>
        </div>
        <div className="centerIconAndTitle">
          <div className="centerIcon">
            <FontAwesomeIcon icon={faUsers} color="#2691a3" size="2x" />
          </div>
          <div className="centerTitle">
            Social <br /> Wellbeing
          </div>
        </div>
        <div className="centerIconAndTitle">
          <div className="centerIcon">
            <FontAwesomeIcon
              icon={faHandshakeSimple}
              color="#2691a3"
              size="2x"
            />
          </div>
          <div className="centerTitle">
            Societal <br /> Wellbeing
          </div>
        </div>
      </div>
    </div>
  );
}
