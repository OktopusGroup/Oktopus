// Arrow buttons

// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import PropTypes from 'prop-types';

// Images
import up from './images/up.svg';
import left from './images/left.svg';

// -----------------------------------------------------------------------------

// Images map
const images = {
  up,
  left,
};

const ArrowButton = props => (
  <button {...props}>
    <img src={images[props.direction]} alt={props.direction} />
    {props.children}
  </button>
);

ArrowButton.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf([
    'up',
    'down',
    'left',
    'right',
  ]).isRequired,
};

export default ArrowButton;
