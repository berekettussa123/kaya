import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function CardOverviewArea(props) {
  return (
    <div className="CardOverviewAreaContainer">
      <div className="overAreaTitle">Wellbeing Support vs Perceived</div>
      <div className="profileLinksPreview">
        <div className='overviewlines'>
          <div className="profileIconsModal">
            <div className="iconContainerModal">
              <FontAwesomeIcon
                icon={faLaptop}
                color="#2691a3"
                fontSize="20px"
              />
            </div>

            <div className="iconContainerModal">
              <FontAwesomeIcon
                icon={faPeopleGroup}
                color="#2691a3"
                fontSize="20px"
              />
            </div>
            <div className="iconContainerModal">
              <FontAwesomeIcon
                icon={faPiggyBank}
                color="#2691a3"
                fontSize="20px"
              />
            </div>
            <div className="iconContainerModal">
              <FontAwesomeIcon icon={faHeart} color="#2691a3" fontSize="20px" />
            </div>
            <div className="iconContainerModal">
              <FontAwesomeIcon icon={faBrain} color="#2691a3" fontSize="20px" />
            </div>
            <div className="iconContainerModal">
              <FontAwesomeIcon icon={faUsers} color="#2691a3" fontSize="20px" />
            </div>
          </div>
          <div className="divLine1"></div>
          <div className="divLine1"></div>
          <div className="divLine1"></div>
        </div>
        <div className="profileModalButton">
          <div className="buttonModalTitle">Reportod Wellbeing</div>
          <div className="buttonModalTitle">Perceived Support</div>
        </div>
      </div>
    </div>
  );
}
