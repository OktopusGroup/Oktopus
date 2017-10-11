// Reset Password Box

// -----------------------------------------------------------------------------
// IMPORTS
import { Link } from 'react-router-dom';

/* NPM */
import React from 'react';

// Helper components
import Animated from 'components/helpers/animated';

// Images
// SHOULD USE USER-APPLIED LOGO
import logo from 'images/logo.svg';

// Styles
import css from './reset.scss';

// -----------------------------------------------------------------------------

class PlatformResetPW extends React.PureComponent {
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
              <span className={css.box_title}>Reset Password</span>
              <div className={css.login_fields}>
                <div className={css.field}>
                  <input type="text" id="fieldEmail" className={css.input} required />
                  <label htmlFor="fieldEmail" className={css.label}>Input email</label>
                </div>
                <Link to="/todo" className={css.btn_login}>Send Reset</Link>
              </div>
            </div>
          </Animated>
          <Animated animationIn="bounceInUp" animationInDelay={0.2}>
            <span className={css.login_subtext}>Changed your mind? <Link to="/login">Go Back</Link></span>
          </Animated>
        </div>
      </div>

    );
  }
}

export default PlatformResetPW;
