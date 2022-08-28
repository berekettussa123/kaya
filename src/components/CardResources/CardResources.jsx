import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import CardArea from '../Card/CardArea';
import CardAreaResource from '../Card/CardAreaResource';
import CardBulkUpload from '../Card/CardBulkUpload';
import CardIconAndTitle from '../Card/CardIconAndTitle';
import CardListofIcon from '../Card/CardListofIcon';
import CardResourcePromote from '../Card/CardResourcePromote';
import CardResourceTrending from '../Card/CardResourceTrending';
import CardTextArea from '../Card/CardTextArea';
import CardUpload from '../Card/CardUpload';
import CardViewResource from '../Card/CardViewResource';
import './cardResources.css';

export default function CardResources() {
  const { user } = useContext(AuthContext);
  const [trend, setTrend] = useState();
 

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getSurveySummaryForPartner/${user.success.partnerId}`
      );

      setTrend(res.data);
    };

    fetchPosts();
  }, [trend]);
  return (
    <div className="cardsContainer">
      <div className="FirstcardsContainer">
      <CardIconAndTitle count={trend?.averageScore} title="Wellbeing Scored" icon="category" />
        <CardIconAndTitle count={trend?.runningSurveysCount} title="Surveys Running" icon="global" />
        <CardIconAndTitle count={trend?.completedSurveysCount} title="Surveys Actioned" icon="like" />
     </div>
      <div
        // style={{ height: '410px', width: `638px` }}
        className="FirstcardsContainer secondCardContainer ResourceRight"
      >
        <div className="leftContainer">
          <div className="leftAreaUpload">
            <CardAreaResource services="resource" />
            <CardViewResource />
          </div>
        </div>
        <div className="rightContainer">
          <div className="rightUploadContainer">
            <CardBulkUpload />
          </div>
          <div className="rightTrendingContainer">
            <CardResourceTrending />
          </div>
          <div className="rightTrendingContainer">
            <CardResourcePromote/>
          </div>
        </div>
      </div>
      
      <div className="gap" style={{width:'100%',backgroundColor:'white',height:'60px'}}></div>
    </div>
  );
}
