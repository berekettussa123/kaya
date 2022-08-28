import React, { useContext, useEffect, useState } from 'react';
import './listOfSurvey.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DatePicker from 'react-datepicker';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import 'react-datepicker/dist/react-datepicker.css';
import { Link } from '@mui/material';
import { AuthContext } from '../../../context/AuthContext';
export default function ListOfSurvey(props) {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen(false);
    props.handleDelete()
  };
  const [response, setResponse] = useState(props.item.expected_respondents);
  const [startDate2, setStartDate2] = useState();
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
    setStartDate2(startDate);
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

  const myObject = {};
  useEffect(() => {}, [end, respondants, response, startDate]);

  const handleResponse = async (evt) => {
    const value = evt.target.value;
    myObject[end] = startDate && formatDate(startDate);
    myObject[respondants] = value && value;
    setResponse(value);
    console.log(value);
    try {
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL}/api/saveSurveyDetails`,
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



  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  var today = yyyy + '-' + mm + '-' + dd;
  const handleChange = (value, e) => {
    console.log(formatDate(value));
    myObject[end] = value && formatDate(value);
    myObject[respondants] = response && response;
    setStartDate(value);
    // setStartDate(date);
    console.log(formatDate(startDate));
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/api/saveSurveyDetails`,
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
      <div className="surveyListContainer" onClick={() => console.log()}>
        <div className="surveyListItem companyName">
          <p>{props.item.mgrcompany}</p>
        </div>
        <div className="surveyListItem surveyListItemLink">
          {`${process.env.REACT_APP_BASE_URL}/surveys/doSurvey/`}
          {props.item.project_id}
        </div>
        <div className="surveyListItem surveyIconContainerIcon">
          <div className="surveyIconContainerl">
            {props.item.responses <= 0 && (
              <Tooltip title="Delete">
                <FontAwesomeIcon
                  className="deleteButtonIcon"
                  icon={faTrash}
                  color="tomato"
                  size="1x"
                  onClick={handleClickOpen}
                  // onClick={props.handleDelete}
                />
              </Tooltip>
            )}
          </div>
          <div className="surveyIconContainerl">
            {props.item.survey_end_date >= today && (
              <Tooltip title="Survey Report">
                <a href={`${process.env.REACT_APP_BASE_URL}/reports/surveyReport/${props.item.project_id}`} target="_blank">

                <FontAwesomeIcon
                  className="deleteButtonIcon"
                  icon={faGear}
                  color="#2691a3"
                  size="1x"
                  />
                  </a>
              </Tooltip>
            )}
          </div>
        </div>

        <div className="surveyListItem surveyListItemDate">
          <DatePicker
          disabled={new Date(props.item.survey_end_date) >= new Date()}
            // selected={props.item.survey_end_date}
            // selected={formatDate(startDate)}
            // readOnly=
            
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
      <div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete This Survey?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to permanently delete this survey? This action Cannot be undone
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose2} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  );
}
