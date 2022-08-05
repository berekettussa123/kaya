import React from 'react';
import global from '../../assets/images/global.png';
export default function CardArea() {
  return (
    <div className="cardAreaContainer">
      <div className="areaTitle">
        Please choose the area of wellbeing you support
      </div>
      <div className="areaCenter">
        <div className="centerTitleMain">
          Enter your wellbeing service details on here. This will enable KAYA to
          promote your services to employees and employers who are searching for
          solution providers with your skills and services
        </div>
        <div className="centerIconAndTitleContainer">
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <img src={global} alt="" />
            </div>
            <div className="centerTitle">Financial <br /> Wellbeing</div>
          </div>
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <img src={global} alt="" />
            </div>
            <div className="centerTitle">Emotional <br /> Wellbeing</div>
          </div>
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <img src={global} alt="" />
            </div>
            <div className="centerTitle">Physical <br /> Wellbeing</div>
          </div>
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <img src={global} alt="" />
            </div>
            <div className="centerTitle">Mental <br /> Wellbeing</div>
          </div>
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <img src={global} alt="" />
            </div>
            <div className="centerTitle">Social <br /> Wellbeing</div>
          </div>
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <img src={global} alt="" />
            </div>
            <div className="centerTitle">Societal <br /> Wellbeing</div>
          </div>
        </div>
        <div className="categoryContainer">
          <div className="singleCategory">Sleep Issues</div>
          <div className="singleCategory">Diet and healthy eating</div>
          <div className="singleCategory">Menopause and women issues</div>
          <div className="singleCategory">Pilates</div>
          <div className="singleCategory">Sleep Issues</div>
          <div className="singleCategory">Diet and healthy eating</div>
          <div className="singleCategory">Menopause and women issues</div>
          <div className="singleCategory">Pilates</div>

        </div>
          <button className='centerbtn'>Select All</button>
      </div>
      <div className="centerButtonContainer">
        <div className="centerButton1 centerbtn">
          Back
        </div>
        <div className="centerButton2 centerbtn">
          Edit
        </div>
        <div className="centerButton3 centerbtn">
          Save
        </div>
      </div>
    </div>
  );
}
