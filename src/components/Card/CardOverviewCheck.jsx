import React from 'react';

export default function CardOverviewCheck(props) {
  const newFeeling = props?.feelings&& Object.values(props?.feelings)
  return (
    <div className="CardOverviewCheckContainer">
      <div className="overCheckTitle">Feel about work</div>
      <div className="feelingContainer">
        <div className="singleFeeling">
          <div className="feelCounter feelColor1">{newFeeling && newFeeling[4]}</div>
          <div className="feelTitle feelColor1">Burn OUt</div>
        </div>
        <div className="singleFeeling">
          <div className="feelCounter feelColor2">{newFeeling && newFeeling[0]}</div>
          <div className="feelTitle feelColor2">Stressed</div>
        </div>
        <div className="singleFeeling">
          <div className="feelCounter feelColor3">{newFeeling && newFeeling[1]}</div>
          <div className="feelTitle feelColor3">Worried</div>
        </div>
        <div className="singleFeeling">
          <div className="feelCounter feelColor4">{newFeeling && newFeeling[2]}</div>
          <div className="feelTitle feelColor4">Frustrated</div>
        </div>
        {/* <div className="singleFeeling ">
          <div className="feelCounter feelColor5">1</div>
          <div className="feelTitle feelColor5">Optimistic</div>
        </div> */}
        <div className="singleFeeling">
          <div className="feelCounter feelColor7">{newFeeling && newFeeling[3]}</div>
          <div className="feelTitle feelColor7">Ok</div>
        </div>
      </div>
      <div className="feelingButton">
        {/* <div className="singleFeeling">
          <div className="feelCounter feelColor7">{newFeeling && newFeeling[3]}</div>
          <div className="feelTitle feelColor7">Ok</div>
        </div> */}
      </div>
    </div>
  );
}
