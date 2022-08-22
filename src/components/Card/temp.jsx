import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IconAndWellbeing from '../Views/IconAndWellbeing/IconAndWellbeing';
// import './iconAndWellbeing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import CardAreaResourceSplit from './CardAreaResourceSplit';
import CardAreaMain from './CardAreaMain';

export default function CardAreaResource() {
  const [selectedArea, setSelectedArea] = useState();
  const [selectedRadio, setSelectedRadio] = useState();
  const [area, setArea] = useState();
  const [split, setSplit] = useState();
  const [areaSplit, setAreaSplit] = useState();
  const [isActive, setIsActive] = useState(false);

  const [sortedView, setSortedView] = useState();
  const handleRadio = (e) => {
    const { name, value } = e.target;

    setSelectedRadio(value, name);
  };
  const listIcon = [
    faCoins,
    faSmile,
    faRunning,
    faBrain,
    faUsers,
    faHandshakeSimple,
  ];
  // var rates = document.getElementById('rates')?.value;
  console.log(selectedArea);

  // console.log(view);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://partnerdev.kayawellbeingindex.com/api/getSupportAreas'
      );

      setArea(res.data);
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://partnerdev.kayawellbeingindex.com/api/getHelpAreasSplits'
      );

      setSplit(res.data);
    };

    fetchPosts();
  }, []);
  const storage = [
    { data: '1', status: '0' },
    { data: '2', status: '0' },
    { data: '3', status: '0' },
    { data: '4', status: '0' },
    { data: '5', status: '0' },
    { data: '6', status: '0' },
    { data: '7', status: '1' },
  ];
  const count = split?.filter(function (item) {
    if (item.area === 'financial') {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    split?.map((item) => {
      selectedArea === item.area && setAreaSplit(() => item.areaSplits);
    });
  });
  const handleProps = () => {
    // eslint-disable-next-line array-callback-return
  };

  const selectSub = () => {
    setIsActive((current) => !current);
  };

  const finalString = areaSplit?.split(',');
  // split?.map((item)=>console.log(item.area))
  console.log( typeof(areaSplit));

  return (
    <div className="resourceAreaContainer">
      <div className="areaTitle">Upload Individual Resource</div>
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
        {/* <IconAndWellbeing areas={area} handleState={handleState} /> */}
        <div>
          <div className="centerIconAndTitleContainer">
            {area?.map((item, i) => {
              return (
                // <CardAreaMain setSelectedArea={()=>setSelectedArea(item)} item={item} handleProps={handleProps} area={area[i]} icon={listIcon[i]} />
                <div
                  className="centerIconAndTitle"
                  onClick={() => setSelectedArea(item)}
                >
                  <div className="centerIcon" onClick={handleProps}>
                    <FontAwesomeIcon
                      icon={listIcon[i]}
                      color="#2691a3"
                      size="2x"
                    />
                  </div>
                  <div className="centerTitle" id="test">
                    {area[i]}
                    {/* Financial <br /> Wellbeing */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="categoryContainer">
          {finalString?.map((item, id) => {
            return <CardAreaResourceSplit selectedArea={selectedArea} split={finalString[id]} />;
          })}
        </div>
        <div className="radiobtn">
          <input
            value="video"
            name="Sport"
            style={{ marginRight: '9px', width: 'auto' }}
            type="radio"
            onChange={handleRadio}
            id="rates"
            defaultChecked
          />
          <span>Video/Page Link</span>
          <input
            id="rates"
            value="pdf"
            name="Sport"
            style={{ marginRight: '9px', marginLeft: '28px', width: 'auto' }}
            type="radio"
            onChange={handleRadio}
          />
          <span>PDF</span>
        </div>
        {selectedRadio === 'pdf' ? (
          <div className="pdffileUpload">
            <input type="text" placeholder="Enter Title" />
            <div className="centerButton3 centerbtn">
              Upload PDF Resource File
            </div>
          </div>
        ) : (
          <div className="inputResourceContainer">
            <input type="text" placeholder="Enter Title" />
            <input type="text" placeholder="Enter Video URL" />
          </div>
        )}

        {/* <button className="centerbtn">Select All</button> */}
      </div>
      <div className="centerButtonContainer">
        <div className="centerButton3 centerbtn">Save Resource</div>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// import CardAreaResourceSplit from './CardAreaResourceSplit';
// import { faCoins } from '@fortawesome/free-solid-svg-icons';
// import { faSmile } from '@fortawesome/free-solid-svg-icons';
// import { faRunning } from '@fortawesome/free-solid-svg-icons';
// import { faBrain } from '@fortawesome/free-solid-svg-icons';
// import { faUsers } from '@fortawesome/free-solid-svg-icons';
// import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// export default function Cardarr(props) {
//   const listIcon = [
//     faCoins,
//     faSmile,
//     faRunning,
//     faBrain,
//     faUsers,
//     faHandshakeSimple,
//   ];
//   const [isActive, setIsActive] = useState(false);
//   const selectSub = () => {
//     setIsActive(!isActive);
//   };
//   return (
//     <div className="centerIconAndTitle" >
//       <div onClick={props.handleClick}>
//         <div className="centerIcon">
//           <FontAwesomeIcon
//             icon={listIcon[props.icon]}
//             color="#2691a3"
//             size="2x"
//           />
//         </div>
//         <div className="centerTitle" id="test">
//           {props.area}
//           {/* Financial <br /> Wellbeing */}
//         </div>
//         <div className="categoryContainer">
//         {props.finalString?.map((item, id) => {
//           return <div
//           style={{
//             backgroundColor: isActive ? 'green' : '',
//             color: isActive ? 'white' : '',
//           }}
//           className="singleCategory"
//           onClick={selectSub}
//         >
//           {item}
//         </div>;
//         })}
//       </div>
//       </div>
//     </div>
//   );
// }
