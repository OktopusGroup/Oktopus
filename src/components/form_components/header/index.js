// ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';

/* Local */
// Components

// Styles
import css from './header.scss';

// Images
import logo from '../images/logo.svg';

// ----------------------

// Create component for button

class Header extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (

      <div className={css.wrapper}>
        <img src={logo} className={css.logo_header} alt="Oktopus" />
        <div className={css.header_links}>
          <a href="/examples" className={css.header_item}>examples</a>
          <a href="/features" className={css.header_item}>features</a>
          <a href="/pricing" className={css.header_item}>pricing</a>
        </div>
        <Link to="/accountPage" className={css.profile_img} />
      </div>
    );
  }
}

export default Header;
