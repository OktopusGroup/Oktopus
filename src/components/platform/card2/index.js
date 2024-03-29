// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

/* Local */

// Components
import Popularity from 'components/platform/components/popularity';

// Styles
import css from './card.scss';

// Images
import 'images/favorite.svg';
import 'images/favorite_hover.svg';

// -----------------------------------------------------------------------------

// Create component for button

class PlatformCard2 extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <div className={css.card}>
        <Link to="/todo"><div className={css.card__preview} /></Link>

        <div className={css.wrapper}>
          <Link to="/todo"><p className={css.card__title}>Project Name</p></Link>
          <div className={css.card__description}>Keytar McSweeney's Williamsburg, 
          readymade leggings try-hard 90's street art letterpress hoodie occupy 
          Wes Anderson Banky.</div>

          <Popularity />

          <div className={css.card__footer}>
            <Link to="/usernameProfile"><div className={css.username}>Username</div></Link>
            <div className={css.date}>2 mths ago</div>
            <Link to="/favorites" className={css.btn_favorite} alt="favorite icon" />
          </div>
        </div>
      </div>
    );
  }
}
export default PlatformCard2;
