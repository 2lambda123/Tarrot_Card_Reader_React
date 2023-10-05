// components/TarotCard.js
import React from 'react';

const TarotCard = ({ name, image, description }) => {
  return (
    <div >
    <img src={image} class="card-img-top"  alt={name}/>
    <div class="card-body">
      <h5 class="card-title text-dark fw-bold">{name}</h5>
      <p class=" text-dark">{description}</p>

    </div>
  </div>

  );
};

export default TarotCard;
