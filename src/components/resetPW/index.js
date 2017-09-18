// Reset Password Box

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
import css from './resetPW.scss';
// --------------------

class ResetPW extends React.PureComponent {
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
            content: 'Login to Oktopus',
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
                <span className={css.box_title}>Reset Password</span>
                <div className={css.login_fields}>
                  <div className={css.field}>
                    <input type="text" id="fieldEmail" className={css.input} required />
                    <label htmlFor="fieldEmail" className={css.label}>Input email</label>
                  </div>
                  <button className={css.btn_default}>Send Reset</button>
                </div>
              </div>
            </Animated>
            <Animated animationIn="bounceInUp" animationInDelay={0.2}>
              <span className={css.login_subtext}>Changed your mind? <Link to="/login">Go Back</Link></span>
            </Animated>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPW;
