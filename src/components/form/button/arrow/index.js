// Arrow buttons

// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// Components
import Arrow from 'components/shapes/arrow';
import css from './arrow.scss';

// -----------------------------------------------------------------------------

const ArrowButton = props => {
  const styles = cn(css.arrow_button, props.className);
  return (
    <button className={styles}>
      <Arrow direction={cn(css.align_arrow, props.direction)} />
      <span className={css.arrow_styles}>{props.children}</span>
    </button>
  );
};

ArrowButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  direction: PropTypes.oneOf([
    'up',
    'down',
    'left',
    'right',
  ]),
};

ArrowButton.defaultProps = {
  direction: 'up',
  className: null,
};

export default ArrowButton;
