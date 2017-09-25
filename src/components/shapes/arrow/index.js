// Arrow shapes

// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import PropTypes from 'prop-types';

/* Local */
import Up from './up';
import Down from './down';
import Left from './left';
import Right from './right';

// -----------------------------------------------------------------------------

function getArrow(dir) {
  let Arrow;
  switch (dir) {
    case 'down':
      Arrow = Down;
      break;
    case 'left':
      Arrow = Left;
      break;
    case 'right':
      Arrow = Right;
      break;
    case 'up':
    default:
      Arrow = Up;
  }
  return Arrow;
}

const Arrow = props => {
  const ArrowDirection = getArrow(props.direction);
  return (
    <ArrowDirection {...props} />
  );
};

Arrow.propTypes = {
  direction: PropTypes.oneOf([
    'up',
    'down',
    'left',
    'right',
  ]),
};

Arrow.defaultProps = {
  direction: 'up',
};

export default Arrow;
