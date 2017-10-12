// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/* Local */

// Components
import ProfileCard from 'components/platform/components/profileCard';

// Images

// Styles
import css from './favorites.scss';

// -----------------------------------------------------------------------------
class PlatformAccountFavorites extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now */
  }

  render() {
    return (
      <div className={css.wrapper}>
        <div className={css.divider} />
        <div className={css.section_title}>Favorites</div>
        <div className={css.card_wrapper}>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    );
  }
}
export default PlatformAccountFavorites;
