import React from 'react';
import './profilePreview.css';
import logo from '../../../assets/images/Logo.png';
import kaya from '../../../assets/images/KAYA.png';
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
export default function ProfilePreview(props) {
  return (
    <>
    
    {props.show&&<div className="ProfilePreviewContainer">
      <div className="profileModal">
        <div className="nameAndLogo">
          <div className="imgContainerP">
            <img src={logo} alt="" />
          </div>
          <div className="profileTitleModal">Name Here</div>
          <div className="profileDescMOdal">Description here</div>
        </div>
        <div className="profileLinksPreview">
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
              <FontAwesomeIcon
                icon={faHeart}
                color="#2691a3"
                fontSize="20px"
              />
            </div>
            <div className="iconContainerModal">
              <FontAwesomeIcon
                icon={faBrain}
                color="#2691a3"
                fontSize="20px"
              />
            </div>
            <div className="iconContainerModal">
              <FontAwesomeIcon
                icon={faUsers}
                color="#2691a3"
                fontSize="20px"
              />
            </div>
          </div>
          <div className="previewEmail">Email</div>
          <div className="previewSocialModal">
            <div className="">
              <div className="iconAndInputContainer">
                <div className="iconAndInput">
                  <div className="iconContainer">
                    <FacebookIcon
                      style={{ color: '#4267B2', transform: 'rotateZ(-45deg)' }}
                    />
                  </div>
                </div>
                <div className="iconAndInput">
                  <div className="iconContainer">
                    <TwitterIcon
                      style={{ color: '#00acee', transform: 'rotateZ(-45deg)' }}
                    />
                  </div>
                </div>
                <div className="iconAndInput">
                  <div className="iconContainer">
                    <InstagramIcon
                      style={{ color: '#3f729b', transform: 'rotateZ(-45deg)' }}
                    />
                  </div>
                </div>
                <div className="iconAndInput">
                  <div className="iconContainer">
                    <YouTubeIcon
                      style={{ color: '#FF0000', transform: 'rotateZ(-45deg)' }}
                    />
                  </div>
                </div>
                <div className="iconAndInput">
                  <div className="iconContainer">
                    <LinkedInIcon
                      style={{
                        color: '#0072b1 ',
                        transform: 'rotateZ(-45deg)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profileModalButton">
            <div className="buttonIconModal">
              <FontAwesomeIcon
                icon={faGlobe}
                color="white"
                fontSize="20px"
              />
            </div>
            <div className="buttonModalTitle">Website</div>
          </div>
          <div className="cancelContainer">
              <FontAwesomeIcon
                icon={faXmark}
                color="#2691a3"
                fontSize="20px"
                onClick={props.handleClose}
              />
            
          </div>
        </div>
      </div>
    </div>}
    </>
  );
}
