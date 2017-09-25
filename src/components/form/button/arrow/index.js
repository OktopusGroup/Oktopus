// Arrow buttons

// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Arrow from 'components/shapes/arrow';
import css from './arrow.scss';

// -----------------------------------------------------------------------------

const ArrowButton = props => (
  <button className={css.arrow_button} {...props}>
    <Arrow direction={props.direction} className={props.arrowClassName} />
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
  ]),
  arrowClassName: PropTypes.string,
};

ArrowButton.defaultProps = {
  direction: 'up',
  arrowClassName: null,
};

export default ArrowButton;
