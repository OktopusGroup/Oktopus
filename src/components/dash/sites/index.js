// MySites Page

// -----------------------------------------------------------------------------
// IMPORTS
import { Link } from 'react-router-dom';

/* NPM */
import React from 'react';

/* Local */

// Components
import HeaderLoggedIn from 'components/header/loggedIn';
import SiteCard from 'components/dash/sites/card';

// Styles
import css from './mySites.scss';

// -----------------------------------------------------------------------------

class MySites extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <div>
        <HeaderLoggedIn />
        <div className={css.wrapper}>
          <div className={css.page_selector}>
            <span className={css.menu_item_Active}>My Sites</span>
            <Link to="/dash/account/settings" className={css.menu_item}>Account Settings</Link>
            <div className={css.menu_line} />
            <div className={css.new_site}>
              <Link to="/dash/sites/new" className={css.btn_blue}>New Site</Link>
            </div>
          </div>
        </div>
        <div className={css.card_wrapper}>
          <SiteCard />
          <SiteCard />
          <SiteCard />
          <SiteCard />
          <SiteCard />
        </div>
      </div>

    );
  }
}

export default MySites;
