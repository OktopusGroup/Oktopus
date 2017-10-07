// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';

/* Local */
// Components

// Styles
import css from './profilecard.scss';

// Images

// -----------------------------------------------------------------------------

// Create component for button

class CardPopularity extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (

      <div className={css.card}>
        <Link to="/todo"><div className={css.preview} /></Link>
        <Link to="/todo"><div className={css.title}>Upload Title</div></Link>
      </div>
    );
  }
}
export default CardPopularity;
