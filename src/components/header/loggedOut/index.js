// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';

/* Local */

// Images
import logo from 'images/logo.svg';

// Styles
import css from './loggedOut.scss';

// -----------------------------------------------------------------------------

// Create component for button

class HeaderLoggedOut extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (

      <div className={css.wrapper}>
        <div>
          <a href="/"><img src={logo} className={css.logo_header} alt="Oktopus" /></a>
          <div className={css.header_links}>
            <a href="/dash/pages" className={css.header_item}>dash</a>
            <a href="/todo" className={css.header_item}>examples</a>
            <a href="/todo" className={css.header_item}>features</a>
            <a href="/todo" className={css.header_item}>pricing</a>
          </div>
        </div>
        <Link to="/login" className={css.signup}>Login / Sign Up</Link>
      </div>
    );
  }
}

export default HeaderLoggedOut;
