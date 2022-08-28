import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import TextArea from './TextArea';

export default function Question(props) {

  
 
  return (
    <div className="questionsContainer">
      <div className="questionInputContainer">
        <div className="inputTitle">The Questions</div>
        <input
          type="text"
          value={props.state?.currentItem2?.question}
          readOnly
        />
      </div>
      <div className="questionInputContainer">
        <div className="inputTitle">Further Clarification</div>
        <input type="text" value={props.state?.currentItem2?.answer} readOnly />
      </div>
      {(
        props.state?.currentItem2?.answer ==="" ||
        props.state?.currentItem2?.answer === null
      ) && (
        <div
          className="centerButton3 centerbtn centerbtn2"
          onClick={props.handleClick}
        >
          Answer
        </div>
      )}
      <hr
        style={{
          width: '100%',
          height: '1.5px',
          border: 'none',
          backgroundColor: '#2691a3',
        }}
      />
      
        <TextArea current={props.current}state={props?.state} setSelectedResource={props.setSelectedResource} selectedResource={props.selectedResource} resources={props.resources} setShow={props.setShow} show={props.show}/>
      
    </div>
  );
}
