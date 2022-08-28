import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function TextArea(props) {
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [resources, setResources] = useState("");
  const [selectedResource, setSelectedResource] = useState();
  const handleClick = (item) => {
    setSelectedResource(item);
    setShow(false);
  };
  const handleResponse = () => {
    // console.log(props.current?.id);
  };
  const [answer, setAnswer] = useState();

  const handleChange = event => {
    setAnswer(event.target.value);

    // console.log('value is:', answer);
  };
  useEffect(()=>{
    if(selectedResource?.document_url){
      setSelectedResource(`${process.env.REACT_APP_BASE_URL}/resources/${user.success.partnerId}/${selectedResource.document_url}`)
    }
    if(selectedResource?.video_url){
      setSelectedResource(`${process.env.REACT_APP_BASE_URL}/resources/${user.success.partnerId}/${selectedResource.video_url}`)
    }
    // console.log(answer)
    // console.log(props.current?.id)
    // console.log(selectedResource)
  },[selectedResource])
  useEffect(()=>{
    console.log(answer==="")
    console.log(typeof(selectedResource) !== 'string')
  },[answer, selectedResource])
  const saveQuestionAnswer = async () => {
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/api/saveQuestionAnswer`,
      headers: { 'Content-Type': 'multipart/form-data' },
      data: {
        id:props.current?.id,
        answer :answer,
        resource_link :selectedResource,
      },
    })
      .then(function (response) {
        console.log(response);

        window.location.reload();
        // console.log(state);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      {props.show && (
        <div className="questionTextare">
          <textarea
            onChange={handleChange}
            value={props.answer}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Advise given by the partner"
          ></textarea>
          <div className="buttonContainerSurvey">
            <div className="centerButton3 centerbtn attachButtonQuestion centerbtn1">
              {show && (
                <div className="attachResource">
                  <ul>
                    {props.resources?.map(
                      (item) =>
                        item.title !== '' &&
                        item.title !== null && (
                          <li
                            onClick={() => handleClick(item)}
                            className="listResourcel"
                          >
                            {item.title}
                          </li>
                        )
                    )}
                  </ul>
                </div>
              )}
              <div onClick={() => setShow(true)}>Attach Resource</div>
            </div>
            <div
            // style={{cursor:`${(!answer==="") && 'not-allowed'}`}}
              className="centerButton3 centerbtn centerbtn2"
              onClick={saveQuestionAnswer}
            >
              Submit Answer
            </div>
          </div>

          <p className="selectedFromResource">
            {selectedResource&&selectedResource?.toString()}
          </p>
        </div>
      )}
    </div>
  );
}
