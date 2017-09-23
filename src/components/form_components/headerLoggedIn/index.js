// ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

/* Local */

// Components
import AccountDropDown from 'src/components/form_components/accountDropdown';

// Styles
import css from './header_LoggedIn.scss';

// Images
import logo from '../images/logo.svg';

// ----------------------

// Create component for button

@connect()
class HeaderLoggedIn extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  showAccountDropdown = () => {
    this.props.dispatch({
      type: 'SHOW_ACCOUNT_MENU',
    });
  }

  hideAccountDropdown = () => {
    this.props.dispatch({
      type: 'HIDE_ACCOUNT_MENU',
      meta: {
        debounce: {
          time: 500,
        },
      },
    });
  }

  render() {
    return (
      <div className={css.wrapper}>
        <div>
          <a href="/Home"><img src={logo} className={css.logo_header} alt="Oktopus" /></a>
        </div>
        <div
          className={css.profile_img}
          onMouseEnter={this.showAccountDropdown}
          onMouseLeave={this.hideAccountDropdown} />
        {/* <Link
          to="/accountPage"
          className={css.profile_img}
          onMouseEnter={this.showAccountDropdown} /> */}
        <AccountDropDown />
      </div>
    );
  }
}

export default HeaderLoggedIn;
