import React from 'react';

export default function CardQuestionsArea() {
  return (
    <div className="CardQuestionsAreaContainer">
      <div className="questionTitleContainer">
        <div className="questionAsked">Questions Asked</div>
        <div className="buttonContainerSurvey">
          <div className="centerButton3 centerbtn centerbtn1">
            Create Survey
          </div>
          <div className="centerButton3 centerbtn centerbtn2">View Survey</div>
        </div>
      </div>
      <div className="questionsContainer">
        <div className="questionInputContainer">
          <div className="inputTitle">The Question</div>
          <input type="text" />
        </div>
        <div className="questionInputContainer">
          <div className="inputTitle">Further Clarification</div>
          <input type="text" />
        </div>
        <div className="centerButton3 centerbtn centerbtn2">Answer</div>
        <hr
          style={{
            width: '100%',
            height: '1.5px',
            border: 'none',
            backgroundColor: '#2691a3',
          }}
        />
        <div className="questionTextare">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Advise given by the partner"
          ></textarea>
          <div className="buttonContainerSurvey">
            <div className="centerButton3 centerbtn centerbtn1">
              Create Survey
            </div>
            <div className="centerButton3 centerbtn centerbtn2">
              View Survey
            </div>
          </div>
        </div>
      </div>
      <div className="buttonContainerSurvey nextbtn">
        <div className="centerButton3 centerbtn centerbtn2 ">Next</div>
      </div>
    </div>
  );
}
