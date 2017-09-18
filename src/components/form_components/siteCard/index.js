// ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';

/* Local */
// Components

// Styles
import css from './siteCard.scss';

// Images

// ----------------------

// Create component for button

class SiteCard extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (

      <div className={css.site_card}>
        <div className={css.card__preview} />
        <Link to="/project1" className={css.card__title}>Title</Link>
        <Link to="/domainSettings" className={css.card__subtitle}>Domain Settings</Link>
      </div>
    );
  }
}
export default SiteCard;
