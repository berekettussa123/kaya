import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
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
import Cardarr from './Cardarr';
import { AuthContext } from '../../context/AuthContext';
import CardArray from './CardArray';

export default function CardAreaResource() {
  const [selectedArea, setSelectedArea] = useState();
  const [selectedRadio, setSelectedRadio] = useState();
  const [area, setArea] = useState();
  const [split, setSplit] = useState();
  const [areaSplitItem, setAreaSplit] = useState();
  const [isActive, setIsActive] = useState(false);
  const [finalString, setfinalString] = useState([]);
  const [selectedSplit, setSelectedSplit] = useState([]);
  const [videolink, setVideoLink] = useState();
  const [videotitle, setVideoTitle] = useState();
  const [sortedView, setSortedView] = useState();
  const [data, setData] = useState();
  const [pdfTitle, setPdfTitle] = useState();
  const [pdfFile, setPdfFile] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    setData({
      username: `${user.success.username}`,
      wellbeingtype: selectedArea ? selectedArea : '',
      resourcetype: selectedRadio === "pdf" ? 2 : (selectedRadio === "video"?1:''),
      video_url: videolink ? videolink : '',
      title:pdfTitle?pdfTitle:videotitle,
      videotitle: videotitle ? videotitle : '',
      resourcefile: pdfFile&&pdfFile,
      areas_addressed:selectedSplit.toString(),
      // professionalResourceAreas:
      //   selectedArea === 'professional' ? selectedSplit : '',
      // financalResourceAreas: selectedArea === 'financial' ? selectedSplit : '',
      // mentalResourceAreas: selectedArea === 'mental' ? selectedSplit : '',
      // physicalResourceAreas: selectedArea === 'physical' ? selectedSplit : '',
      // socialResourceAreas: selectedArea === 'social' ? selectedSplit : '',
      // societalResourceAreas: selectedArea === 'societal' ? selectedSplit : '',
    });
  }, [pdfFile, pdfTitle, selectedArea, selectedRadio, selectedSplit, videolink, videotitle]);

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

  // console.log(view);

  const handleSave = async () => {
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/api/loadIndividualResource`,
      headers: { 'Content-Type': 'multipart/form-data' },
       data: data,
    })
      .then(function (response) {
        console.log(response);
        window.location.reload()
        // setOpen(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getSupportAreas`
      );

      setArea(res.data);
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getHelpAreasSplits`
      );

      setSplit(res.data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    split?.map((item) => {
      selectedArea === item.area && setAreaSplit(() => item.areaSplits);
    });
  }, [selectedArea, split]);
  const handleProps = () => {
    // eslint-disable-next-line array-callback-return
  };

  const handleVideoLink = (e) => {
    setVideoLink(e.target.value);
  };
  const handleVideoTitle = (e) => {
    setVideoTitle(e.target.value);
  };

  const handlePdf = (e) => {
    setPdfTitle(e.target.value);
  };
  const selectSub = () => {
    setIsActive((current) => !current);
  };
  useEffect(() => {
    const newLocal = areaSplitItem?.split(',');
    setfinalString(newLocal);
  }, [areaSplitItem]);
  // split?.map((item)=>console.log(item.area))
  useEffect(() => {
    console.log(data);
  }, [data]);
  const handleClick=(item)=>{
    setSelectedArea(item)
    setSelectedSplit([])
    
  }

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
        <div>
          <div>
            <div
              className={`${
                selectedArea ? 'selectedAreaClicked ' : ''
              } centerIconAndTitleContainer`}
            >
              {area?.map((item, i) => {
                return (
                  <CardArray
                    selectedSplit={selectedSplit}
                    setSelectedSplit={setSelectedSplit}
                    finalString={finalString}
                    selectedArea={selectedArea}
                    handleClick={()=>handleClick(item)}
                    icon={i}
                    item={item}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div>{/* <CardAreaMain/> */}</div>

        <div className="radiobtn">
          <input
            disabled={pdfTitle}
            value="video"
            name="Sport"
            style={{ marginRight: '9px', width: 'auto' }}
            type="radio"
            onChange={handleRadio}
            id="rates"
          />
          <span>Video/Page Link</span>
          <input
            disabled={videotitle || videolink}
            id="rates"
            value="pdf"
            name="Sport"
            style={{ marginRight: '9px', marginLeft: '28px', width: 'auto' }}
            type="radio"
            onChange={handleRadio}
          />
          <span>PDF</span>
        </div>
        {selectedRadio === 'pdf' && (
          <div className="pdffileUpload">
            <input type="text" placeholder="Enter Title" onChange={handlePdf} />
            <div id="" className="centerButton3 centerbtn">
              <label  htmlFor={"pdfFile"}>
                Upload PDF Resource File
              </label>
            </div>
            <input id={"pdfFile"} type="file" onChange={(e)=>setPdfFile(e.target.files[0])} accept='.pdf' name={"pdfFile"} />
            <p>{pdfFile?.name}</p>
          </div>
        )}
        {selectedRadio === 'video' && (
          <div className="inputResourceContainer">
            <input
              type="text"
              placeholder="Enter Video URL"
              onChange={handleVideoLink}
            />
            <input
              type="text"
              placeholder="Enter Title"
              onChange={handleVideoTitle}
            />
          </div>
        )}

        {/* <button className="centerbtn">Select All</button> */}
      </div>
      <div className="centerButtonContainer">
        <div className="centerButton3 centerbtn" onClick={handleSave}>
          Save Resource
        </div>
      </div>
    </div>
  );
}
