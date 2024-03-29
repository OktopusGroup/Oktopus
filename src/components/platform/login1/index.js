// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import uploadcare from 'uploadcare-widget';
import cn from 'classnames';

// Helper Components
import Animated from 'components/helpers/animated';

/* Local */

// Components

// Images#

// Styles
import css from './login.scss';

// -----------------------------------------------------------------------------
class PlatformLogin1 extends React.PureComponent {

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

              <Link to="/disabled" className={css.btn_login}>Login</Link>

              <div className={css.social_buttons}>
                <span className={css.social_title}>or use your social account</span>
                <div className={cn(css.social, css.fb)}><i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <div className={cn(css.social, css.li)}><i class="fa fa-linkedin" aria-hidden="true"></i>
                </div>
                <div className={cn(css.social, css.google)}><i class="fa fa-google" aria-hidden="true"></i>
                </div>
                <div className={cn(css.social, css.tw)}><i class="fa fa-twitter" aria-hidden="true"></i>
                </div>
              </div>

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
export default PlatformLogin1;
