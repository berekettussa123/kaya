import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/AuthContext';
import CardBulkSingle from './CardBulkSingle';
export default function CardBulkUpload() {
  const { user } = useContext(AuthContext);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileVideo, setSelectedFileVideo] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [mainArea, setMainArea] = useState();
  const [openMain, setOpenMain] = useState(false);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const MAX_COUNT = 5;
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
  const [isActive, setIsActive] = useState(false);
  const selectSub = () => {
    setIsActive(!isActive);
  };

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert(`Cannot upload files more than ${MAX_COUNT}`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };
  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (uploadedFiles.length) {
      try {
        setIsLoading(true);
        const response = await axios({
          method: 'post',
          url: `${process.env.REACT_APP_BASE_URL}/api/bulkUploadDocuments`,
          data: {
            username: `${user.success.username}`,
            documentsfiles: uploadedFiles,
            wellbeingtype: mainArea,
          },
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log(response);
        setIsLoading(false);
        setSelectedFileVideo(null);
        setUploadedFiles([]);
      } catch (error) {
        console.log(error);
      }
    }
    if (selectedFileVideo) {
      try {
        setIsLoading(true);
        const response = await axios({
          method: 'post',
          url: `${process.env.REACT_APP_BASE_URL}/api/bulkUploadVideoLinks`,
          data: {
            username: `${user.success.username}`,
            videolinksfile: selectedFileVideo,
            wellbeingtype: mainArea,
          },
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log(response);
        setIsLoading(false);
        setSelectedFileVideo(null);
        setUploadedFiles([]);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleMain = (item) => {
    setMainArea(item);
    setOpenMain(false);
    console.log(mainArea);
  };
  const handleUpload = async (event) => {
    event.preventDefault();
  };
  const handleChoose = () => {
    (!selectedFileVideo || !uploadedFiles) && setOpenMain(true);
  };
  useEffect(() => {
    console.log(mainArea);
    console.log(uploadedFiles);
    console.log(selectedFileVideo);
  }, [mainArea, selectedFileVideo, uploadedFiles]);

  const handleFileSelect = (event) => {
    if (Array.from(event.target.files).length > 2) {
      event.preventDefault();
      alert(`Cannot upload files more than ${20}`);
      return;
    } else {
      setSelectedFile(event.target.files[0]);
      setIsFilePicked(true);
    }
  };
  const handleFileSelectVideo = (event) => {
    setSelectedFileVideo(event.target.files[0]);
    setIsFilePicked(true);
  };
  const handleShow = () => {
    setSelected('video');
    console.log(selected);
    setShow(!show);
  };
  const handleShowPDF = () => {
    setSelected('pdf');
    console.log(selected);
    setShow(!show);
  };
  return (
    <div className="bulkuploadContainer">
      <div className="bulkTitle">Bulk upload resources</div>
      <div className="bulkDesc">
        Download the sample csv file. Enter title for the video in the first
        column and the link for the video in the second column and upload the
        file
      </div>
      <div className="bulkInputContainer">
        <div
          style={{ cursor: selectedFileVideo && 'not-allowed' }}
          className="bulkLeftInput"
        >
          <div
            style={{ cursor: selectedFileVideo && 'not-allowed' }}
            className="buldIconCont"
            onClick={!selectedFileVideo && handleShowPDF}
          >
            <label style={{ cursor: selectedFileVideo && 'not-allowed' }}>
              <FontAwesomeIcon icon={faFolderPlus} color="#2691a3" size="1x" />
            </label>
          </div>

          <div className="docTitle">
            <p className="FileName">Add Document</p>
          </div>
        </div>
        <div
          style={{ cursor: uploadedFiles.length && 'not-allowed' }}
          className="bulkRightInput"
        >
          <div
            style={{ cursor: uploadedFiles.length && 'not-allowed' }}
            className="buldIconCont"
            onClick={!uploadedFiles.length && handleShow}
          >
            <label style={{ cursor: uploadedFiles.length && 'not-allowed' }}>
              <FontAwesomeIcon icon={faVideo} color="#2691a3" size="1x" />
            </label>
          </div>
          <div className="docTitle">
            <p className="FileName">Add Video</p>
          </div>
        </div>
        <CardBulkSingle
          handleMain={handleMain}
          selected={selected}
          show={show}
          handleShow={handleShow}
          selectedFileVideo={selectedFileVideo}
          uploadedFiles={uploadedFiles}
          handleFileEvent={handleFileEvent}
          handleFileSelectVideo={handleFileSelectVideo}
          mainArea={mainArea}
        />
      </div>
      <div>
        {uploadedFiles &&
          uploadedFiles?.map((file) => (
            <div>
              <p className="FileNamea">{file?.name}</p>
            </div>
          ))}
        {selectedFileVideo && (
          <div className="docTitle">
            <p className="FileNamea">
              {selectedFileVideo && selectedFileVideo.name}
            </p>
          </div>
        )}
      </div>
      {/* {isFilePicked &&
        <div>
          <p>Filename: {selectedFile?.name}</p>
          <p>Filetype: {selectedFile?.type}</p>
          <p>Size in bytes: {selectedFile?.size}</p>
        </div>
      } */}
      <div className="centerButtonContainer centerButtonContainerBulk">
        <a href={`${process.env.REACT_APP_BASE_URL}/assets/videolinks.csv`}>
          <div className="centerButton2 centerbtn">Download</div>
        </a>

        {
          <div onClick={handleSubmit} className="centerButton3 centerbtn">
            {!isLoading ? 'Upload' : 'Uploading...'}
          </div>
        }
      </div>

      <div></div>
    </div>
  );
}
