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
import profileimg from 'images/profileimg.png';

// Styles
import css from './profile.scss';

// -----------------------------------------------------------------------------
class PlatformMyProfile1 extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now */
  }

  render() {
    return (
      <div className={css.wrapper}>

        <div className={css.profile_header}>
          <img src={profileimg} alt="profile" className={css.profile_img} />
          <div className={css.info}>
            <div className={css.profile_name}>Mark Nguyen</div>
            <div className={css.profile_location}><i class="fa fa-map-marker" aria-hidden="true"></i> Berlin, Germany</div>
          </div>
        </div>

        <div className={css.section_title}>
        Bio
          {/*
          Bio<button className={css.btn_blue_small}>
          Save
          </button></div>
          */}
          <button className={css.btn_blue_small}>
          Save
          </button></div>

        <div className={css.bio_wrapper}>
          <textarea className={css.text_area} type="text" name="" placeholder="Add a description (max 300 characters)" />

        </div>
        <div className={css.divider} />
        <div className={css.section_title}>Uploads</div>
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
export default PlatformMyProfile1;
