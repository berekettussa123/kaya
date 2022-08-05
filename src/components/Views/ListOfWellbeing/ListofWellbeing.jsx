import React from 'react'
import phone from '../../../assets/images/phone.png';
import './listofWellbeing.css'

export default function ListofWellbeing() {
  return (
    <div className='listContainer'>
        <div className="ListaddLogo">
          <img src={phone} alt=""/>
        </div>

        <div className="listCardInput">
          <p>Social Wellbeing</p>
        </div>
    </div>
  )
}
