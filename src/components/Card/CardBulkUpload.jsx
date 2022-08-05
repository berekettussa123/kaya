import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
export default function CardBulkUpload() {
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
            <input type="file" name="uploadBtn" id="uploadBtn" />
            <label htmlFor="uploadBtn">
              <FontAwesomeIcon icon={faFolderPlus} color="#2691a3" size="1x" />
            </label>
          </div>
        <div className="docTitle">Add Document</div>
        </div>
        <div className="bulkRightInput bulkLeftInput">
        <div className="buldIconCont">
            <input type="file" name="uploadBtn" id="uploadBtn" />
            <label htmlFor="uploadBtn">
              <FontAwesomeIcon icon={faVideo} color="#2691a3" size="1x" />
            </label>
          </div>
        <div className="docTitle">Add Video</div>
        </div>
      </div>
      <div className="centerButtonContainer centerButtonContainerBulk">
        
        <div className="centerButton2 centerbtn">
          Download
        </div>
        <div className="centerButton3 centerbtn">
          Upload
        </div>
      </div>
    </div>
  );
}
