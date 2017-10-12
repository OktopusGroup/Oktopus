// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';

/* Local */

// Helper components

// Styles
import css from './sidebar.scss';

// -----------------------------------------------------------------------------

// Create component for button

class PlatformAccountSidebar extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <div className={css.sidebar}>
        <div className={css.sidebar_items}>
          <Link to="/profile" className={css.sidebar_item}>Profile & Uploads</Link>
          <Link to="/account" className={css.sidebar_item}>Account</Link>
          <Link to="/favorites" className={css.sidebar_item}>Favorites</Link>
        </div>
      </div>
    );
  }
}

export default PlatformAccountSidebar;
