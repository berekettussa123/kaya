import React, { useEffect } from 'react'
import './sidebar.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import KAYA from '../../assets/images/KAYA.png'
import Home from '../../assets/images/Home.png'
import profilecircle from '../../assets/images/profile-circle.png'
import category from '../../assets/images/category.png'
import axios from 'axios';
export default function Sidebar() {


    // useEffect(() => {
    //     const fetchPosts = async () => {
    //       const res = await axios.get("https://partnerdev.kayawellbeingindex.com/api/getPartnerInformation/21")
         
    //       console.log("Hi"+res)
    //     };

    //     fetchPosts();
    //   }, []);
    

  return (
    <div className='sidebarContainer'>
        <div className="logoContainer">
            <img src={KAYA} alt="kaya" />
        </div>
        <div className="sidebarButtonContainer">
            <Link to={'/'}>


            <div className="sidebarButtonListItem">
                <div className="sidebarButtonIcon">
                    <img src={Home} alt="" />
                </div>
                <div className="sidebarButtonTitle">
                    <p>Overview</p>
                </div>
            </div>
            </Link>
            <Link to={'/profile'}>
            <div className="sidebarButtonListItem">
                <div className="sidebarButtonIcon">
                    <img src={profilecircle} alt="" />
                </div>
                <div className="sidebarButtonTitle">
                    <p>Profile</p>
                </div>
            </div>
            </Link >
            <Link to={'/services'}>
            <div className="sidebarButtonListItem">
                <div className="sidebarButtonIcon">
                    <img src={category} alt="" />
                </div>
                <div className="sidebarButtonTitle">
                    <p>Services</p>
                </div>
            </div>
            </Link>
            <Link to={'/resources'}>
            <div className="sidebarButtonListItem">
                <div className="sidebarButtonIcon">
                    <img src={profilecircle} alt="" />
                </div>
                <div className="sidebarButtonTitle">
                    <p>Resources</p>
                </div>
            </div>
            </Link >
            <Link to={'/surveys'}>
            <div className="sidebarButtonListItem">
                <div className="sidebarButtonIcon">
                    <img src={profilecircle} alt="" />
                </div>
                <div className="sidebarButtonTitle">
                    <p>Surveys</p>
                </div>
            </div>
            </Link>
            <Link to={'/questions'}>
            <div className="sidebarButtonListItem">
                <div className="sidebarButtonIcon">
                    <img src={profilecircle} alt="" />
                </div>
                <div className="sidebarButtonTitle">
                    <p>Questions</p>
                </div>
            </div>
            </Link>
            <Link to={'/'}>
            <div className="sidebarButtonListItem">
                <div className="sidebarButtonIcon">
                    <img src={profilecircle} alt="" />
                </div>
                <div className="sidebarButtonTitle">
                    <p>Ongoing</p>
                </div>
            </div>
            
            </Link>

        </div>

      
    </div>
  )
}
