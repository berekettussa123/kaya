import React from 'react';

export default function CardUpload() {
  return (
    <div className="cardUploadContainer">
      <div className="listCardTitle">Buld Upload Service</div>
      <div className="uploadDesc">
        You can upload all the services you provide across the six wellbeing
        areas by downloading the csv file, amending and uploading it.
      </div>
      <div className="uploadButtonContainer ">
        {/* <button >Download</button>
        <button >Upload</button> */}
        <div className="centerButtonContainer uploadbuttons">
          <div className="centerButton2 centerbtn">Download</div>
          <div className="centerButton3 centerbtn">Upload</div>
        </div>
      </div>
    </div>
  );
}
