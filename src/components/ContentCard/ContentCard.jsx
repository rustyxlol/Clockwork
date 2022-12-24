import React from 'react';
import './ContentCard.css';

const ContentCard = (props) => {
  return (
    <div className="card">
      {props.img && <img src={props.img} alt="" />}
      <div className="card_details">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ContentCard;
