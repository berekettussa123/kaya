import React, { useRef, useState } from 'react';

export default function CardContact(props) {
  const nameRef = useRef("");
  const surRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const [state, setState] = useState({
    first_name: "",
    surname: "",
    email:"",
    phone:""
  })

  const handleChange=(evt)=>{
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  return (
    <div className="cardContainer cardContainer2 cardInput">
      <div className="contactTitle">Contact Information</div>

      <div className="CardInput cardInputContact">
        <input required type="text"  name='first_name' Value={props.Contactvalues[0]} onChange={props.handleChange}/>
        <label>First Name</label>
      </div>
      <div className="CardInput cardInputContact">
        <input required type="text" name='surname' Value={props.Contactvalues[1]} onChange={props.handleChange}/>
        <label>surname</label>
      </div>
      <div className="CardInput cardInputContact">
        <input required type="text" name='email' Value={props.Contactvalues[2]} onChange={props.handleChange}/>
        <label>Email</label>
      </div>
      <div className="CardInput cardInputContact">
        <input required type="text" name='phone' Value={props.Contactvalues[3]} onChange={props.handleChange}/>
        <label>Phone</label>
      </div>
    </div>
  );
}
