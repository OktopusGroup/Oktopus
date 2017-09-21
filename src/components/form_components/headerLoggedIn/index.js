// ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';

/* Local */

// Styles
import css from './header_LoggedIn.scss';

// Images
import logo from '../images/logo.svg';

// ----------------------

// Create component for button

class HeaderLoggedIn extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (

      <div className={css.wrapper}>
        <Link to="/home"><img src={logo} className={css.logo_header} alt="Oktopus" /></Link>
        <Link to="/accountPage" className={css.profile_img} />
      </div>
    );
  }
}

export default HeaderLoggedIn;
