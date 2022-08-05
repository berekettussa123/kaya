import React from 'react';


export default function CardTextArea(props) {
  return (
    <div className="cardtextarea">
      <div className="textAreaTitle">{props.desc}</div>

      <div className="">
        <textarea
          style={{ maxWidth: `${props.width}px`, maxHeight: `${props.height}px` }}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="textAreaLink">View All</div>
    </div>
  );
}
