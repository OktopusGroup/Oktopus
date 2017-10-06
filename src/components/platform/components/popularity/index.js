// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';

/* Local */
// Components

// Styles
import css from './popularity.scss';

// Images

// -----------------------------------------------------------------------------

// Create component for button

class CardPopularity extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (

      <div className={css.popularity}>
        <div className={css.left}><i className="fa fa-heart fa-lg" /></div>
        <div className={css.middle}><i className="fa fa-download fa-lg" /></div>
        <div className={css.right}><i className="fa fa-comments fa-lg" /></div>
      </div>
    );
  }
}
export default CardPopularity;
