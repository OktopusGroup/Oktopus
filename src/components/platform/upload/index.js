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
class PlatformProfile1 extends React.PureComponent {
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

        <div className={css.section_title}>Bio</div>
        <div className={css.bio}>Being the savage&#8217;s bowsman, that is, the person who pulled
        the bow-oar in his boat (the second one from forward), it was my cheerful duty to
        attend upon him while taking that hard-scrabble scramble upon the dead whale&#8217;s back.
        You have seen Italian organ-boys holding a dancing-ape by a long cord.</div>
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
export default PlatformProfile1;
