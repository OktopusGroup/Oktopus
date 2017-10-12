// Account Settings Page

// -----------------------------------------------------------------------------
// IMPORTS
import { Link } from 'react-router-dom';

/* NPM */
import React from 'react';

// Helper components
// import Animated from 'components/helpers/animated';

/* Oktopus Components */
import HeaderLoggedIn from 'components/header/loggedIn';

/* Local */

// Styles
import css from './settings.scss';

// -----------------------------------------------------------------------------

class PlatformAccountSettings extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (

      <div className={css.wrapper}>
        {/* Page contents */}
        <div className={css.content_container}>

          <div className={css.profile_img}>Add Image</div>

          <div className={css.section__account_info}>
            <div className={css.section_wrapper}>


              <p className={css.section_title}>Account Info</p>

              <div className={css.field}>
                <input type="text" id="fieldName" className={css.input} required />
                <label htmlFor="fieldName" className={css.label}>first name</label>
              </div>

              <div className={css.field}>
                <input type="text" id="fieldFirstName" className={[css.input]} required />
                <label htmlFor="fieldFirstName" className={css.label}>last name</label>
              </div>

              <div className={css.field}>
                <input type="text" id="fieldEmail" className={css.input} required />
                <label htmlFor="fieldEmail" className={css.label}>email address</label>
              </div>
            </div>

            <div className={css.section_wrapper}>
              <div className={css.section__password}>
                <p className={css.section_title}>Change Password</p>

                <div className={css.field}>
                  <input type="password" id="fieldPassword" className={css.input} required />
                  <label htmlFor="fieldPassword" className={css.label}>Current password</label>
                </div>

                <div className={css.field}>
                  <input type="password" id="fieldPasswordNew" className={css.input} required />
                  <label htmlFor="fieldPasswordNew" className={css.label}>New password</label>
                </div>

                <div className={css.field}>
                  <input type="password" id="fieldPasswordNewAgain" className={css.input} required />
                  <label htmlFor="fieldPasswordNewAgain" className={css.label}>New password again</label>
                </div>
              </div>

              <p className={css.section_title}>Notification Settings</p>
              <div className={css.section__checkboxes}>
                <label className={css.description} htmlFor="checkbox_1">web notifications</label>

                <input id="checkbox_1_1" name="checkbox_1_1" className={css.checkbox_custom} type="checkbox" value="1" />
                <label className={css.checkbox_custom_label} htmlFor="checkbox_1_1">new direct messages</label>
              </div>

              <div className={css.section__checkboxes}>
                <label className={css.description} htmlFor="checkbox_2">email notifications</label>

                <input id="checkbox_2_1" name="checkbox_2_1" className={css.checkbox_custom} type="checkbox" value="1" />
                <label className={css.checkbox_custom_label} htmlFor="checkbox_2_1">new direct messages</label>
              </div>
            </div>

            {/* Social Login Section */}
            <div className={css.section__social_login}>
              <div className={css.section_wrapper}>
                <div className={css.section_social_login}>
                  <p className={css.section_title}>Social Login</p>
                  <button className={css.btn_social_selector}>Connect Facebook</button>
                  <button className={css.btn_social_selector}>Connect LinkedIn</button>
                  <button className={css.btn_social_selector}>Connect Google</button>
                  <button className={css.btn_social_selector}>Connect Twitter</button>
                </div>
              </div>
            </div>
            {/* Danger Area Section */}
            <div className={css.section__danger}>
              <p className={css.section_title}>Danger Area!</p>
              <button className={css.btn_red_large}>Delete My Account</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlatformAccountSettings;
