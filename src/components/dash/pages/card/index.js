// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';

/* Local */

// Styles
import css from './card.scss';

// -----------------------------------------------------------------------------

// Create component for button

class PageCard extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (

      <Link to="/todo" className={css.page_card}>
        <div className={css.page__preview} />
        <p className={css.page__title}>Page Name</p>
      </Link>
    );
  }
}
export default PageCard;
