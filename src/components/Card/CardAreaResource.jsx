import React, { useState } from 'react';
import IconAndWellbeing from '../Views/IconAndWellbeing/IconAndWellbeing';

export default function CardAreaResource() {

    const [selectedRadio, setSelectedRadio] = useState();
    

  return (
    <div className="resourceAreaContainer">
      <div className="areaTitle">
      Upload Individual Resource
      </div>
      <div className="areaCenter">
        <div className="centerTitleMain">
          As a KAYA Partner your wellbeing services are automatically promoted
          on any wellbeing surveys you create for your clients and their
          employees. This helps you stimulate demand for your services. You can
          upload up to 20 pdf documents and an unlimited number of weblinks.
          Documents can include articles, case studies, toolkits etc. (maximum 5
          MB file size). Links can be to your website, YouTube, Vimeo or other
          similar platforms. Read More
        </div>
        {/* <div className="centerIconAndTitleContainer">
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <img src={global} alt="" />
            </div>
            <div className="centerTitle">
              Financial <br /> Wellbeing
            </div>
          </div>
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <img src={global} alt="" />
            </div>
            <div className="centerTitle">
              Emotional <br /> Wellbeing
            </div>
          </div>
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <img src={global} alt="" />
            </div>
            <div className="centerTitle">
              Physical <br /> Wellbeing
            </div>
          </div>
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <img src={global} alt="" />
            </div>
            <div className="centerTitle">
              Mental <br /> Wellbeing
            </div>
          </div>
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <img src={global} alt="" />
            </div>
            <div className="centerTitle">
              Social <br /> Wellbeing
            </div>
          </div>
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <img src={global} alt="" />
            </div>
            <div className="centerTitle">
              Societal <br /> Wellbeing
            </div>
          </div>
        </div> */}
        <IconAndWellbeing/>
        <div className="categoryContainer">
          <div className="singleCategory">Sleep Issues</div>
          <div className="singleCategory">Diet and healthy eating</div>
          <div className="singleCategory">Menopause and women issues</div>
          <div className="singleCategory">Pilates</div>
        </div>
        <div className='radiobtn'>
          <input value={"video"} name="Sport" style={{marginRight: '9px' , width:'auto'}} type="radio" />
          <span >Video/Page Link</span>
          <input value={"pdf"} name="Sport" style={{marginRight: '9px' ,marginLeft:'28px', width:'auto'}} type="radio" />
          <span>PDF</span>
        </div>
        <div className="inputResourceContainer">

        <input  type="text" placeholder='Enter Title'/>
        <input  type="text" placeholder='Enter Video URL' />
        </div>

        {/* <button className="centerbtn">Select All</button> */}
      </div>
      <div className="centerButtonContainer">
        <div className="centerButton3 centerbtn">Save Resource</div>
      </div>
    </div>
  );
}
