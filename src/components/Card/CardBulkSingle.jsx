import React, { useContext, useEffect, useState } from 'react';
import '../Modals/TitleLists/titleList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'; // <-- import styles to be used
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
export default function CardBulkSingle(props) {
  const [dataTrend, setData] = useState();
  const listIcons = [
    faCoins,
    faSmile,
    faRunning,
    faBrain,
    faUsers,
    faHandshakeSimple,
  ];
  const listIcon = {
    faCoins: 'Financial',
    faSmile: 'Professional',
    faRunning: 'Physical',
    faBrain: 'Mental',
    faUsers: 'Social',
    faHandshakeSimple: 'Societal',
  };
  return (
    <>
      {props.show && (
        <div className="titleContainerModal">
          <div className="TitleListContainer">
            <div className="TitleListTitle">
              Please Choose Main Area And Upload Bulk Files
            </div>

            <div className="bulkContain">
              <div>
                <div
                  className={`${
                    props.wellbeing ? ' hidebackground ' : ''
                  } '   '`}
                >
                  <div className="bulkIconsContainer">
                    {Object.entries(listIcon).map((key, value) => (
                      <div
                        className="centerIconAndTitle"
                        onClick={() => props.handleMain(key[1])}
                      >
                        <div className="centerIcon">
                          <FontAwesomeIcon
                            icon={listIcons[value]}
                            color={`${'#848484'}`}
                            // style={{ backgroundColor:`${props.selectedArea === props.item ? '#2691a3' : ''}`}}
                            size="2x"
                            className="iconBulk"
                          />
                        </div>
                        <div className="texttitleBulk centerTitle" id="test">
                          {key[1]}
                          {/* Financial <br /> Wellbeing */}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    style={{
                      marginTop: '15px',
                      fontSize: '25px',
                      fontWeight: 'bold',
                      color: '#ffb934',
                    }}
                  >
                    {props.mainArea}
                  </div>
                  <div className="bulttitle">
                    please choose Multiple PDF file or Video Files
                  </div>
                  <div className="bulkInputContainer">
                    {props.selected === 'pdf' && (
                      <div
                        style={{ marginTop: '20px' }}
                        className="bulkLeftInput"
                      >
                        <div className="buldIconCont">
                          <input
                            type="file"
                            name="uploadBtn1"
                            id="uploadBtnn"
                            accept=".pdf,.doc"
                            multiple
                            // onChange={handleFileSelect}
                            onChange={props.handleFileEvent}
                          />

                          <label
                            htmlFor="uploadBtn1"
                            onClick={props.handleChoose}
                          >
                            <FontAwesomeIcon
                              icon={faFolderPlus}
                              color="#2691a3"
                              size="1x"
                            />
                          </label>
                        </div>

                        <div className="docTitle">
                          <p className="FileName">Add Document</p>
                        </div>
                      </div>
                    )}
                    {props.selected === 'video' && (
                      <div
                        style={{ marginTop: '20px' }}
                        className="bulkRightInput"
                      >
                        <div className="buldIconCont">
                          <input
                            type="file"
                            name="uploadBtn"
                            accept=".xlsx,.xls,.csv"
                            id="uploadBtn2"
                            onChange={props.handleFileSelectVideo}
                          />

                          <label
                            // onClick={props.handleChoose}
                            // onClick={handleChoose}
                            htmlFor="uploadBtn2"
                          >
                            <FontAwesomeIcon
                              icon={faVideo}
                              color="#2691a3"
                              size="1x"
                            />
                          </label>
                        </div>
                        <div className="docTitle">
                          <p className="FileName">Add Video</p>
                        </div>
                      </div>
                    )}
                    {/* <CardBulkSingle/> */}
                  </div>
                    <div style={{color:'#ffb934',fontSize:'12px'}}>
                      {(props.uploadedFiles.length ||
                        props.selectedFileVideo) &&
                        'File hasbeen selected'}
                    </div>
                </div>
              </div>
              <div className="TitleListClose" onClick={props.handleShow}>
                Close
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
