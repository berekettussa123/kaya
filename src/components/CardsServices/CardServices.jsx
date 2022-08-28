import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Card from '../Card/Card';
import CardArea from '../Card/CardArea';
import CardContact from '../Card/CardContact';
import CardEditlogin from '../Card/CardEditlogin';
import CardIconAndTitle from '../Card/CardIconAndTitle';
import CardInput from '../Card/CardInput';
import CardListofIcon from '../Card/CardListofIcon';
import CardSocialmedia from '../Card/CardSocialmedia';
import CardTextArea from '../Card/CardTextArea';
import CardUpload from '../Card/CardUpload';
import CardWellBeing from './CardWellBeing';

export default function CardServices() {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState();
  const [wellbeing, setWellbeing] = useState();
  const [promoted, setPromoted] = useState();
  const [profileData, setProfileData] = useState();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getPartnerInformation/${user.success.partnerId}`
      );

      setProfileData(res.data);
      // setState({});
    };
    // console.log(profileData)

    fetchPosts();
  });
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getServicesStatsForPartner/${user.success.partnerId}`
      );

      setServices(res.data);
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getWellbeingServices/${user.success.partnerId}`
      );

      setWellbeing(res.data);
    };
    
    fetchPosts();
    // console.log(wellbeing)
  }, [wellbeing]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getPromotedAreas/${user.success.partnerId}`
      );

      setPromoted(res.data);
    };

    fetchPosts();
  }, [promoted]);
  return (
    <div className="cardsContainer">
      <div className="FirstcardsContainer">
        <CardIconAndTitle
          servicesProvided={services?.servicesProvided}
          title="Service Provided"
          icon="category"
        />
        <CardIconAndTitle
          servicesProvided={services?.supportedAreasCount}
          title="Supported Areas"
          icon="global"
        />
        <CardIconAndTitle
          servicesProvided={services?.promotedAreasCount}
          title="Promoted Areas"
          icon="like"
        />
      </div>
      <div
        // style={{ height: '410px', width: `638px` }}
        className="FirstcardsContainer secondCardContainer"
      >
        
        <CardArea profileData={profileData}/>
        <CardWellBeing
          wellbeing={wellbeing}
          desc="Top wellbeing services"
          width={215}
        />
        {/* <CardTextArea/> */}
      </div>
      <div className="FirstcardsContainer secondCardContainer">
        <CardWellBeing
          wellbeing={wellbeing}
          desc="Service Requested"
          request="request"
          width={215}
        />
        <CardListofIcon promoted={promoted} />
        <CardUpload />
      </div>
      
      <div className="gap" style={{width:'100%',backgroundColor:'white',height:'60px'}}></div>
    </div>
  );
}
