import React, { useEffect, useState } from 'react';
import './listOfSurvey.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
export default function ListOfSurvey(props) {
  const [response, setResponse] = useState(props.item.expected_respondents);
  const [startDate2, setStartDate2] = useState()
  const [startDate, setStartDate] = useState(
    new Date(props.item.survey_end_date)
  );
  useEffect(() => {
    setResponse(
      props.item.expected_respondents && props.item.expected_respondents
    );
  }, [props.expected_respondents, props.item.expected_respondents]);
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  useEffect(() => {
    setStartDate2(startDate)
  }, [startDate]);

  const formatDate = (startDate) => {
    return [
      padTo2Digits(startDate?.getDate()),
      padTo2Digits(startDate?.getMonth() + 1),
      startDate?.getFullYear(),
    ].join('/');
  };

  const end = 'survey_end_date[' + props.item.project_id + ']';
  const respondants = 'expected_respondents[' + props.item.project_id + ']';

  // eslint-disable-next-line react-hooks/exhaustive-deps

  const myObject ={};
  useEffect(()=>{

   
  },[end, respondants, response, startDate])

  const handleResponse = async (evt) => {
    const value = evt.target.value;
    myObject[end] = startDate&&formatDate(startDate);
    myObject[respondants] = value && value
    setResponse(value);
    console.log(value);
    try {
      await axios({
        method: 'post',
        url: 'https://partnerdev.kayawellbeingindex.com/api/saveSurveyDetails',
        headers: { 'Content-Type': 'multipart/form-data' },
        data: myObject && myObject,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange =  (value, e) => {
    console.log(formatDate(value))
    myObject[end] = value&&formatDate(value);
    myObject[respondants] = response && response
    setStartDate(value)
    // setStartDate(date);
    console.log(formatDate(startDate));
     axios({
      method: 'post',
      url: 'https://partnerdev.kayawellbeingindex.com/api/saveSurveyDetails',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: myObject && myObject,
    })
      .then(function (response) {
        console.log(formatDate(startDate));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // eslint-disable-next-line no-redeclare

  console.log();

  // startDate.toString().replace(/-/g,"/")
  return (
    <div>
      <div className="surveyListContainer">
        <div className="surveyListItem companyName">
          <p>{props.item.mgrcompany}</p>
        </div>
        <div className="surveyListItem surveyListItemLink">
          https://partnerdev.kayawellbeingindex.com/surveys/doSurvey/
          {props.item.project_id}
        </div>
        <div className="surveyListItem surveyIconContainerIcon">
          <div className="surveyIconContainerl">
            {props.item.responses <= 0 && (
              <FontAwesomeIcon
                className="deleteButtonIcon"
                icon={faTrash}
                color="tomato"
                size="1x"
                onClick={props.handleDelete}
              />
            )}
          </div>
        </div>
        <div className="surveyListItem surveyListItemDate">
          <DatePicker
            // selected={props.item.survey_end_date}
            // selected={formatDate(startDate)}
            // readOnly={new Date(props.item.survey_end_date) >= new Date()}
            selected={startDate}
            // minDate={new Date()}
            className="datepickerr"
            onChange={(value, e) => handleChange(value, e)}
            // onChange={(date)=>setStartDate(date)}
          />
        </div>
        <div className="surveyListItem surveyListItemRecieved">
          <p>
            <input
              required
              type="text"
              name="expected"
              onChange={handleResponse}
              defaultValue={props.item.expected_respondents}
            />
          </p>
          {/* <p>{props.item.expected_respondents}</p> */}
        </div>
        <div className="surveyListItem surveyListItemRecieved">
          <p>{props.item.responses}</p>
        </div>
      </div>
    </div>
  );
}
