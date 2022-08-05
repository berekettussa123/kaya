import React from 'react';

export default function CardContact() {
  return (
    <div className="cardContainer cardContainer2 cardInput">
      <div className="contactTitle">Contact Information</div>

      <div className="CardInput cardInputContact">
        <input required type="text" />
        <label>First Name</label>
      </div>
      <div className="CardInput cardInputContact">
        <input required type="text" />
        <label>surname</label>
      </div>
      <div className="CardInput cardInputContact">
        <input required type="text" />
        <label>Email</label>
      </div>
      <div className="CardInput cardInputContact">
        <input required type="text" />
        <label>Phone</label>
      </div>
    </div>
  );
}
