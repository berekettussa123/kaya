import React from 'react';

export default function CardOverviewCheck() {
  return (
    <div className="CardOverviewCheckContainer">
      <div className="overCheckTitle">Feel about work</div>
      <div className="feelingContainer">
        <div className="singleFeeling">
          <div className="feelCounter feelColor1">1</div>
          <div className="feelTitle feelColor1">Burn OUt</div>
        </div>
        <div className="singleFeeling">
          <div className="feelCounter feelColor2">1</div>
          <div className="feelTitle feelColor2">Stressed</div>
        </div>
        <div className="singleFeeling">
          <div className="feelCounter feelColor3">1</div>
          <div className="feelTitle feelColor3">Worried</div>
        </div>
        <div className="singleFeeling">
          <div className="feelCounter feelColor4">1</div>
          <div className="feelTitle feelColor4">Frustrated</div>
        </div>
        <div className="singleFeeling ">
          <div className="feelCounter feelColor5">1</div>
          <div className="feelTitle feelColor5">Optimistic</div>
        </div>
        <div className="singleFeeling">
          <div className="feelCounter feelColor6">1</div>
          <div className="feelTitle feelColor6">Good</div>
        </div>
      </div>
      <div className="feelingButton">
        <div className="singleFeeling">
          <div className="feelCounter feelColor7"></div>
          <div className="feelTitle feelColor7">Ok</div>
        </div>
      </div>
    </div>
  );
}
