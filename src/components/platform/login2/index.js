// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/* Local */

// Helper Components
import Animated from 'components/helpers/animated';

// Components

// Images

// Styles
import css from './login.scss';

// -----------------------------------------------------------------------------
class PlatformLogin2 extends React.PureComponent {

  submit = () => {
    /* intentionally empty for now */
  }
  render() {
    return (

      <div className={css.wrapper}>
        <div className={css.login_box}>
          <Animated animationIn="bounceInDown">
            <div className={css.login_form}>

              {/* USING UPLOADCARE API FOR IMAGE UPLOAD UI */}
              <input type="hidden" role="uploadcare-uploader" name="my_file" />

              <span className={css.box_title}>Login</span>
              <div className={css.field}>
                <input type="text" id="fieldEmail" className={css.input} required />
                <label htmlFor="fieldEmail" className={css.label}>Email</label>
              </div>
              <div className={css.field}>
                <input type="password" id="fieldPassword" className={css.input} required />
                <label htmlFor="fieldPassword" className={css.label}>Password</label>
                <span className={css.forgot}>Forgot?</span>
              </div>
              {/* BUTTON COLOR SHOULD ADHERE TO THE BUTTON COLORS SET ON THE /PAGES page */}
              <Link to="/disabled" className={css.btn_login}>Login</Link>
            </div>
          </Animated>
          <Animated animationIn="bounceInUp" animationInDelay={0.2}>
            <span className={css.login_subtext}>Don&rsquo;t have an account yet?<Link to=""> Sign Up</Link></span>
          </Animated>
        </div>
      </div>
    );
  }
}
export default PlatformLogin2;
