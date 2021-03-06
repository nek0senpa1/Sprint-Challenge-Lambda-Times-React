import React, { Component } from 'react';
import Card from './Card';

import PropTypes from 'prop-types';

const Cards = props => {

  console.log(props.cards);

  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map((stuff, index) => {
            return <Card card={stuff} key={index} />
            } )
          }
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.array
};


export default Cards;