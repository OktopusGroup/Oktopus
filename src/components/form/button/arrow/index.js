// Arrow buttons

// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import PropTypes from 'prop-types';

// Images
import up from './images/up.svg';
import left from './images/left.svg';
import down from './images/down.svg';
import right from './images/right.svg';

import css from './arrow.scss'

// -----------------------------------------------------------------------------

// Images map
const images = {
  up,
  left,
  down,
  right,
};

const ArrowButton = props => (
  <button className={css.arrow_button} {...props}>
    <img className={css.align_arrow} src={images[props.direction]} alt={props.direction} />
    <span className={css.align_text}>{props.children}</span>
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
