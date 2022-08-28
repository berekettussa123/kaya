import React, { useEffect, useState } from 'react';
import TextArea from './TextArea';

export default function NotAnswered(props) {
  

  const handleResponse = () => {};
  return (
    <div className="questionsContainer">
      <div className="questionInputContainer">
        <div className="inputTitle">The Questions</div>
        <input
          type="text"
          value={props.state?.currentItem?.question}
          readOnly
        />
      </div>
      <div className="questionInputContainer">
        <div className="inputTitle">Further Clarification</div>
        <input
          type="text"
          value={
            props.state?.currentItem?.answer
              ? props.state?.currentItem?.answer
              : ''
          }
          readOnly
        />
      </div>
      {(props.state?.currentItem?.answer === '' ||
        props.state?.currentItem?.answer === null) && (
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

      <TextArea
      current={props.current}
        // setAnswer={()=>setAnswer}
        // answer={answer}
        // handleChange={handleChange}
        handleResponse={handleResponse}
        setSelectedResource={props.setSelectedResource}
        selectedResource={props.selectedResource}
        resources={props.resources}
        setShow={props.setShow}
        show={props.show}
      />
    </div>
  );
}
