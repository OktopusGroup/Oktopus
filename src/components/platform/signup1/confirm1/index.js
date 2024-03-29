// Confirm Signup 'Email Sent' Notification Box

// -----------------------------------------------------------------------------
// IMPORTS
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

/* NPM */
import React from 'react';

/* Oktopus */

// Helper components
import Animated from 'components/helpers/animated';

// Images
// SHOULD USE USER-APPLIED LOGO
import logo from 'images/logo.svg';

// Styles
import css from './confirm.scss';

// -----------------------------------------------------------------------------

class PlatformConfirmSignup1 extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (

      <div className={css.wrapper}>
        <Animated animationIn="bounceInDown" animationInDelay={0.2}>
          <img src={logo} className={css.logo_onpage} alt="Oktopus" />
        </Animated>
        <div className={css.login_box}>
          <Animated animationIn="bounceInDown">
            <div className={css.login_form}>
              <span className={css.box_title}>Confirm Email</span>
              <div className={css.login_fields}>
                <div className={css.field}>
                  {/* need to add user submitted email data injector */}
                  <span className={css.guide_text}>useremail@email.com</span>
                </div>
                <span className={css.login_subtext}>Complete sign up by
                  clicking<br />the link in your email.</span>
                <Link to="/todo" className={css.btn_login}>Okay</Link>
              </div>
            </div>
          </Animated>
          <Animated animationIn="bounceInUp" animationInDelay={0.2}>
            <span className={css.login_subtext}><Link to="/login/reset">Send it again</Link></span>
          </Animated>
        </div>
      </div>

    );
  }
}

export default PlatformConfirmSignup1;
