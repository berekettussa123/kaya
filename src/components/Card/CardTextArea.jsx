import React ,{ useState } from 'react';
import TitleList from '../Modals/TitleLists/TitleList';


export default function CardTextArea(props) {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  
  return (
    <div className="cardtextarea">
      <div className="textAreaTitle">{props.desc ? props.desc :'Description'}</div>

      <div className="">
        <textarea
          style={{ maxWidth: `${props.width}px`, maxHeight: `${props.height}px` }}
          name="description"
          id=""
          cols="30"
          rows="10"
          defaultValue={props.description}
          onChange={props.handleChange}
        ></textarea>
      </div>
      <div className="textAreaLink" onClick={showModal}>View All</div>
      <TitleList description={props.description}title="description" show={show} handleClose={hideModal}/>
    </div>
  );
}
