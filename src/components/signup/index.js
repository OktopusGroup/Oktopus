// Signup box

// --------------------
// IMPORTS
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

/* NPM */
import React from 'react';

// Helper components
import Animated from 'src/components/helpers/animated';

/* Oktopus Components */
import HeaderLoggedOut from '../form_components/headerLoggedOut';

// Images
import logo from '../form_components/images/logo.svg';

// Styles
import '../../styles.global.css';
import css from './signup.scss';

// --------------------

class Signup extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <div>
        <Helmet
          title="Oktopus"
          meta={[{
            name: 'Creative sharing networks',
            content: 'Password Reset',
          }]} />

        <HeaderLoggedOut />

        <div className={css.wrapper}>
          <Animated animationIn="bounceInDown" animationInDelay={0.2}>
            <img src={logo} className={css.logo_onpage} alt="Oktopus" />
          </Animated>
          <div className={css.login_box}>
            <Animated animationIn="bounceInDown">
              <div className={css.login_form}>
                <Link to="/Back" className={css.closeX} />
                <span className={css.box_title}>Sign Up</span>
                <div className={css.login_fields}>
                  <div className={css.field}>
                    <div className={css.field}>
                      <input type="text" id="fieldEmail" className={css.inputError} required />
                      <label htmlFor="fieldEmail" className={css.label}>Email</label>
                    </div>
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
                  <button className={css.btn_default}>Sign Up</button>
                </div>
              </div>
            </Animated>
            <Animated animationIn="bounceInUp" animationInDelay={0.2}>
              <span className={css.login_subtext}>Already have an account? <Link to="/login">Login</Link></span>
            </Animated>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
