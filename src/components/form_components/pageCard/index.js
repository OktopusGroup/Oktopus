// Site Card Component
// ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';

/* Local */
// Components

// Styles
import css from './pageCard.scss';

// Images

// ----------------------

// Create component for button

class PageCard extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (

      <Link to="/liveEditor_login" className={css.page_card}>
        <div className={css.page__preview} />
        <p className={css.page__title}>Page Name</p>
      </Link>
    );
  }
}
export default PageCard;
