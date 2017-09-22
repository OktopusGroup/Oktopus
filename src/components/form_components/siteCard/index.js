// Site Card Component
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

      <Link to="/projectName" className={css.site_card}>
        <div className={css.card__preview} />
        <p className={css.card__title}>Project Name</p>
        <div><Link to="/inputdomain" className={css.card__subtitle}>Domain Settings</Link>
        </div>
      </Link>
    );
  }
}
export default SiteCard;
