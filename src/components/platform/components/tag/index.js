// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';

/* Local */
// Components

// Styles
import css from './tag.scss';

// Images

// -----------------------------------------------------------------------------

// Create component for button

class Tag extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <div className={css.wrapper}>
        <div className={css.tag}>Tag Text
        </div>
      </div>
    );
  }
}
export default Tag;
