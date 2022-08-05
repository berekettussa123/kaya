import React from 'react'
import Card from '../Card/Card'
import CardContact from '../Card/CardContact'
import CardEditlogin from '../Card/CardEditlogin'
import CardInput from '../Card/CardInput'
import CardSocialmedia from '../Card/CardSocialmedia'
import CardTextArea from '../Card/CardTextArea'

export default function CardProfile() {
  return (
    <div className="cardsContainer">
      <div className="FirstcardsContainer">
        <Card title="Wellbeing Score" />
        <CardInput title="Business Name" icon="phone" />
        <CardInput title="Web Address" icon="global" />
      </div>
      <div
        // style={{ height: '410px', width: `638px` }}
        className="FirstcardsContainer secondCardContainer"
      >
        <CardTextArea />
        <div className='ContactAndEdit'>
          <CardContact/>
          <CardEditlogin/>
        </div>
      </div>
      <div>
        <CardSocialmedia/>
      </div>
    </div>
  )
}
