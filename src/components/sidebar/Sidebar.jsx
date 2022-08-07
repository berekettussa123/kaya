import React, { useEffect } from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import KAYA from '../../assets/images/KAYA.png';
import Home from '../../assets/images/Home.png';
import profilecircle from '../../assets/images/profile-circle.png';
import category from '../../assets/images/category.png';
import messagetext from '../../assets/images/message-text.png';
import stickynote from '../../assets/images/stickynote.png';
import edit from '../../assets/images/edit.png';
import programmingarrows from '../../assets/images/programming-arrows.png';
import axios from 'axios';
export default function Sidebar() {
  useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("https://partnerdev.kayawellbeingindex.com/api/getPartnerInformation/21")

        console.log("Hi"+res)
      };

      fetchPosts();
    }, []);

  return (
    <div className="sidebarContainer">
      <div className="logoContainer">
        <img src={KAYA} alt="kaya" />
      </div>
      <div className="sidebarButtonContainer">
        <NavLink to={'/'}>
          <div className="sidebarButtonListItem">
            <div className="sidebarButtonIcon">
              <img src={Home} alt="" />
            </div>
            <div className="sidebarButtonTitle">
              <p>Overview</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={'/profile'}>
          <div className="sidebarButtonListItem">
            <div className="sidebarButtonIcon">
              <img src={profilecircle} alt="" />
            </div>
            <div className="sidebarButtonTitle">
              <p>Profile</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={'/services'}>
          <div className="sidebarButtonListItem">
            <div className="sidebarButtonIcon">
              <img src={category} alt="" />
            </div>
            <div className="sidebarButtonTitle">
              <p>Services</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={'/resources'}>
          <div className="sidebarButtonListItem">
            <div className="sidebarButtonIcon">
              <img src={messagetext} alt="" />
            </div>
            <div className="sidebarButtonTitle">
              <p>Resources</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={'/surveys'}>
          <div className="sidebarButtonListItem">
            <div className="sidebarButtonIcon">
              <img src={stickynote} alt="" />
            </div>
            <div className="sidebarButtonTitle">
              <p>Surveys</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={'/questions'}>
          <div className="sidebarButtonListItem">
            <div className="sidebarButtonIcon">
              <img src={edit} alt="" />
            </div>
            <div className="sidebarButtonTitle">
              <p>Questions</p>
            </div>
          </div>
        </NavLink>
        
          <div className="sidebarButtonListItem">
            <div className="sidebarButtonIcon">
              <img src={programmingarrows} alt="" />
            </div>
            <div className="sidebarButtonTitle">
              <p>Ongoing</p>
            </div>
          </div>
       
      </div>
      <div className="sidebarProfile">
        <div className="imgSidebarP">
          <img
            src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="sidebarptitleContainer">
          <div className="ptitlesidebar">Lorem, ipsum</div>
          <div className="psubtitlesidebar">Lorem ipsum dolor sit.</div>
        </div>
        <div className='threedotsp'>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </div>
    </div>
  );
}
