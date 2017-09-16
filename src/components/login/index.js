// Login box

// --------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Animated } from 'react-animated-css';

/* Oktopus */

// Images
import logo from './logo.svg';

// Styles
import css from './login.scss';
import '../form_components/button/button.scss';

// --------------------

class Login extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <div className={css.wrapper}>
        <Animated animationIn="bounceInDown" animationInDelay=".2">
          <img src={logo} className={css.logo_onpage} alt="Oktopus" />
        </Animated>
        <div className={css.login_box}>
          <Animated animationIn="bounceInDown">
            <div className={css.login_form}>
              <div className={css.closeX}>
                <span className={css.box_title}>Login</span>
                <div className={css.login_fields}>
                  <div className={css.field}>
                    <input type="text" id="fieldUser" className={css.input} required />
                    <label htmlFor="fieldUser" className={css.label}>Username</label>
                  </div>
                  <div className={css.field}>
                    <input type="password" id="fieldPassword" className={css.input} required />
                    <label htmlFor="fieldPassword" className={css.label}>Password</label>
                  </div>
                  <button className={css.btn}>Login</button>
                </div>
              </div>
            </div>
          </Animated>
          <Animated animationIn="bounceInUp" animationInDelay=".2">
            <span className={css.login_subtext}>Don&rsquo;t have an account yet? <a href="#signup">Sign Up</a></span>
          </Animated>
        </div>
      </div>
    );
  }
}

export default Login;
