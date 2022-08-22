import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';

export default function CardBulkUpload() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileVideo, setSelectedFileVideo] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const MAX_COUNT = 5;

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
    const formData = new FormData();
    formData.append('selectedFile', selectedFile);
    try {
      setIsLoading(true);
      const response = await axios({
        method: 'post',
        url: 'https://partnerdev.kayawellbeingindex.com/api/bulkUploadVideoLinks',
        data: { username: 'vijay@nairvijay.com ', documentsfiles: formData },
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitPDF = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('selectedFile', selectedFile, selectedFile.name);
    try {
      setIsLoading(true);
      const response = await axios({
        method: 'post',
        url: 'https://partnerdev.kayawellbeingindex.com/api/bulkUploadVideoLinks',
        data: { username: 'vijay@nairvijay.com ', documentsfiles: formData },
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // const uploadFiles = async() =>  {
  //  try {
  //    await axios.post(
  //      'https://partnerdev.kayawellbeingindex.com/api/bulkUploadVideoLinks',{username:'vijay@nairvijay.com'}
  //    );
  //    console.log('uploaded');

  //  } catch (error) {

  //  }

  // };
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
  return (
    <div className="bulkuploadContainer">
      <div className="bulkTitle">Bulk upload resources</div>
      <div className="bulkDesc">
        Download the sample csv file. Enter title for the video in the first
        column and the link for the video in the second column and upload the
        file
      </div>
      <div className="bulkInputContainer">
        <div className="bulkLeftInput">
          <div className="buldIconCont">
            <input
              type="file"
              name="uploadBtn1"
              id="uploadBtn"
              accept=".pdf,.doc"
              multiple
              // onChange={handleFileSelect}
              onChange={handleFileEvent}
            />
            <label htmlFor="uploadBtn1">
              <FontAwesomeIcon icon={faFolderPlus} color="#2691a3" size="1x" />
            </label>
          </div>

          <div className="docTitle" onClick={handleSubmitPDF}>
            <p className="FileName">Add Document</p>
          </div>
        </div>
        <div className="bulkRightInput bulkLeftInput">
          <div className="buldIconCont">
            <input
              type="file"
              name="uploadBtn"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              id="uploadBtn"
              onChange={handleFileSelectVideo}
            />
            <label htmlFor="uploadBtn">
              <FontAwesomeIcon
                icon={faVideo}
                color="#2691a3"
                accept=".xlsx,.xls,.csv"
                size="1x"
              />
            </label>
          </div>
          <div className="docTitle">
            <p className="FileName">
              Add Video
             
            </p>
          </div>
        </div>
      </div>
      <div>
        {uploadedFiles&&uploadedFiles?.map((file) => (
          <div >
            <p className="FileNamea">
              {file?.name}
              </p>
              </div>
        ))}
        {selectedFileVideo&& <div className="docTitle">
            <p className="FileNamea">
             
              {selectedFileVideo && selectedFileVideo.name }
            </p>
          </div>}
      </div>
      {/* {isFilePicked &&
        <div>
          <p>Filename: {selectedFile?.name}</p>
          <p>Filetype: {selectedFile?.type}</p>
          <p>Size in bytes: {selectedFile?.size}</p>
        </div>
      } */}
      <div className="centerButtonContainer centerButtonContainerBulk">
        <a href="https://partnerdev.kayawellbeingindex.com/assets/videolinks.csv">
          <div className="centerButton2 centerbtn">Download</div>
        </a>

        {
          <div className="centerButton3 centerbtn" onClick={handleSubmit}>
            {!isLoading ? 'Upload' : 'Uploading...'}
          </div>
        }
      </div>
    </div>
  );
}
