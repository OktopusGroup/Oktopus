// ----------------------
// IMPORTS

/* NPM */
import React from 'react';

/* Local */
// Components

// Styles
import css from './header.scss';

// Images
import logo from './images/logo.svg';

// ----------------------

// Create component for button
const Header = () => (
  <div className={css.body}>
    <div><img src={logo} alt="Oktopus" />
      <div className={css.headerRight}><a>Sign Up / Login</a></div>
    </div>
  </div>
);

export default Header;
