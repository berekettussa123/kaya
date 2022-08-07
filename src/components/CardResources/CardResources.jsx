import React from 'react';
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
  return (
    <div className="cardsContainer">
      <div className="FirstcardsContainer">
        <CardIconAndTitle title="Wellbeign Scored" icon="category" />
        <CardIconAndTitle title="Surveys Running" icon="survey" />
        <CardIconAndTitle title="Surveys Actioned" icon="actioned" />
      </div>
      <div
        // style={{ height: '410px', width: `638px` }}
        className="FirstcardsContainer secondCardContainer ResourceRight"
      >
        <div className="leftContainer">
          <div className="leftAreaUpload">
            <CardAreaResource />
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
    </div>
  );
}
