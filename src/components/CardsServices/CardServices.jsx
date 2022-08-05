import React from 'react'
import Card from '../Card/Card'
import CardArea from '../Card/CardArea'
import CardContact from '../Card/CardContact'
import CardEditlogin from '../Card/CardEditlogin'
import CardIconAndTitle from '../Card/CardIconAndTitle'
import CardInput from '../Card/CardInput'
import CardListofIcon from '../Card/CardListofIcon'
import CardSocialmedia from '../Card/CardSocialmedia'
import CardTextArea from '../Card/CardTextArea'
import CardUpload from '../Card/CardUpload'

export default function CardServices() {
  return (
    <div className="cardsContainer">
      <div className="FirstcardsContainer">
        <CardIconAndTitle title="Service Provided" icon="category"/>
        <CardIconAndTitle title="Supported Areas" icon="global"/>
        <CardIconAndTitle title="Promoted Areas" icon="like"/>
      </div>
      <div
        // style={{ height: '410px', width: `638px` }}
        className="FirstcardsContainer secondCardContainer"
      >
        <CardArea/>
        <CardTextArea desc ="Top wellbeing services" width={215}/>
      </div>
      <div className="FirstcardsContainer secondCardContainer">
        <CardTextArea desc="Service Requested" height={97} width={214}/>
        <CardListofIcon/>
        <CardUpload/>

      </div>
    </div>
  )
}
