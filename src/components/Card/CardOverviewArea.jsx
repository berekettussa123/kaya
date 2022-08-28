import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function CardOverviewArea(props) {
  console.log(props?.wellbeingTotals?.financial_perceived);
  return (
    <div className="CardOverviewAreaContainer">
      <div className="overAreaTitle">Wellbeing Support vs Perceived</div>
      <div className="profileLinksPreview">
        <div className="overviewlines">
          <div className="profileIconsModal">
            <div
              style={{
                width: `${props?.wellbeingTotals?.financial_support}rem`,
                transform: `translateX(${props?.wellbeingTotals?.financial_support}rem)`,
              }}
              className="lineDark line1"
            ></div>
            <div
              style={{
                width: `${props?.wellbeingTotals?.financial_perceived}rem`,
                transform: `translateX(${props?.wellbeingTotals?.financial_perceived}rem)`,
              }}
              className="lineLight line2"
            ></div>
            <div className="iconContainerModal">
              <FontAwesomeIcon icon={faCoins} color="#2691a3" fontSize="20px" />
            </div>
            <div
              style={{
                width: `${props?.wellbeingTotals?.professional_support}rem`,
                transform: `translateX(${props?.wellbeingTotals?.professional_support}rem)`,
              }}
              className="lineDark line3"
            ></div>
            <div
              style={{
                width: `${props?.wellbeingTotals?.professional_perceived}rem`,
                transform: `translateX(${props?.wellbeingTotals?.professional_perceived}rem)`,
              }}
              className="lineLight line4"
            ></div>

            <div className="iconContainerModal">
              <FontAwesomeIcon
                icon={faRunning}
                color="#2691a3"
                fontSize="20px"
              />
            </div>
            <div
              style={{
                width: `${props?.wellbeingTotals?.mental_support}rem`,
                transform: `translateX(${props?.wellbeingTotals?.mental_support}rem)`,
              }}
              className="lineDark line5"
            ></div>
            <div
              style={{
                width: `${props?.wellbeingTotals?.mental_perceived}rem`,
                transform: `translateX(${props?.wellbeingTotals?.mental_perceived}rem)`,
              }}
              className="lineLight line6"
            ></div>
            <div className="iconContainerModal">
              <FontAwesomeIcon icon={faSmile} color="#2691a3" fontSize="20px" />
            </div>
            <div
              style={{
                width: `${props?.wellbeingTotals?.physical_support}rem`,
                transform: `translateX(${props?.wellbeingTotals?.physical_support}rem)`,
              }}
              className="lineDark line7"
            ></div>
            <div
              style={{
                width: `${props?.wellbeingTotals?.physical_perceived}rem`,
                transform: `translateX(${props?.wellbeingTotals?.physical_perceived}rem)`,
              }}
              className="lineLight line8"
            ></div>
            <div className="iconContainerModal">
              <FontAwesomeIcon
                icon={faHandshake}
                color="#2691a3"
                fontSize="20px"
              />
            </div>
            <div
              style={{
                width: `${props?.wellbeingTotals?.social_support}rem`,
                transform: `translateX(${props?.wellbeingTotals?.social_support}rem)`,
              }}
              className="lineDark line9"
            ></div>
            <div
              style={{
                width: `${props?.wellbeingTotals?.social_perceived}rem`,
                transform: `translateX(${props?.wellbeingTotals?.social_perceived}rem)`,
              }}
              className="lineLight line10"
            ></div>
            <div className="iconContainerModal">
              <FontAwesomeIcon icon={faBrain} color="#2691a3" fontSize="20px" />
            </div>
            <div
              style={{
                width: `${props?.wellbeingTotals?.societal_support}rem`,
                transform: `translateX(${props?.wellbeingTotals?.societal_support}rem)`,
              }}
              className="lineDark line11"
            ></div>
            <div
              style={{
                width: `${props?.wellbeingTotals?.societal_perceived}rem`,
                transform: `translateX(${props?.wellbeingTotals?.societal_perceived}rem)`,
              }}
              className="lineLight line12"
            ></div>
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
          <div
            className="buttonModalTitle"
            style={{ backgroundColor: '#93D3C5' }}
          >
            Perceived Support
          </div>
        </div>
      </div>
    </div>
  );
}
