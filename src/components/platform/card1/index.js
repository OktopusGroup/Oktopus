// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';

/* Local */
// Components

// Styles
import css from './card.scss';

// Images
import 'images/favorite.svg';
import 'images/favorite_hover.svg';

// -----------------------------------------------------------------------------

// Create component for button

class PlatformCard1 extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <div className={css.card}>
        <Link to="/todo"><div className={css.card__preview} /></Link>
        <p className={css.card__title}>Project Name</p>
        <Link to="/todo" className={css.btn_default}>DOWNLOAD</Link>
        <div className={css.card__footer}>
          <Link to="/usernameProfile"><div className={css.username}>username</div></Link>
          <div className={css.date}>2 mths ago</div>
          <Link to="/favorites" className={css.btn_favorite} alt="favorite icon" />

        </div>
      </div>
    );
  }
}
export default PlatformCard1;
