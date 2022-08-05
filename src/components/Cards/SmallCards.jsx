import { border } from '@mui/system'
import React from 'react'

export default function SmallCards(props) {
  return (
    <div style={{borderLeft:`{${props.border === "none" && props.border}}!important`}} className='SmallCardsContainer'>
      <div className="smallCardTitle">
      {props.title}
      </div>
      <div className="smallBody">

      </div>
      <div className="textAreaLink">View All</div>
    </div>
  )
}
