// Signup box

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
import css from './signup.scss';

// -----------------------------------------------------------------------------

class PlatformSignup1 extends React.PureComponent {
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
              <span className={css.box_title}>Sign Up</span>
              <div className={css.field}>
                <input type="text" id="fieldEmail" className={css.input} required />
                <label htmlFor="fieldEmail" className={css.label}>Email</label>
              </div>
              <div className={css.field}>
                <input type="text" id="fieldFirstName" className={css.input} required />
                <label htmlFor="fieldFirstName" className={css.label}>First name</label>
              </div>
              <div className={css.field}>
                <input type="text" id="fieldLastName" className={css.input} required />
                <label htmlFor="fieldLastName" className={css.label}>Last name</label>
              </div>
              <div className={css.field}>
                <input type="password" id="fieldPassword" className={css.input} required />
                <label htmlFor="fieldPassword" className={css.label}>Password</label>
              </div>
              <div className={css.field}>
                <input type="password" id="fieldPasswordValidation" className={css.input} required />
                <label htmlFor="fieldPasswordValidation" className={css.label}>Password again</label>
              </div>
              {/* How do I add a Link to a button without generating an anchor on the text? */}
              <Link to="/signup/confirm" className={css.btn_login}>Sign Up</Link>
            </div>
          </Animated>
          <Animated animationIn="bounceInUp" animationInDelay={0.2}>
            <span className={css.login_subtext}>Already have an account? <Link to="/login">Login</Link></span>
          </Animated>
        </div>
      </div>
    );
  }
}

export default PlatformSignup1;
