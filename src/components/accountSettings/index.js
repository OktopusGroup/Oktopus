// Account Settings Page

// --------------------
// IMPORTS
import { Link } from 'react-router-dom';

/* NPM */
import React from 'react';

/* Oktopus Components */
import HeaderLoggedIn from '../form_components/headerLoggedIn';

/* Local */
//    import header from '../form_components/header';

// Styles


// Helper components
//    import Animated from 'src/components/helpers/animated';

// Images

// Styles
import '../../styles.global.css';
import css from './accountSettings.scss';
// --------------------

class AccountSettings extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <div>

        <HeaderLoggedIn />

        <div className={css.wrapper}>
          <div className={css.page_menu}>
            <Link to="/mySites" className={css.menu_item}>My Sites</Link>
            <span className={css.menu_item_Active}>Account Settings</span>
            <div className={css.menu_item_Active__underline} />
            <div className={css.menu_line} />
          </div>
        </div>
      </div>
    );
  }
}

export default AccountSettings;
