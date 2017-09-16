// Login box

// --------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link, Route } from 'react-router-dom';
import Signup from 'src/components/signup';
import Helmet from 'react-helmet';

/* Oktopus */

// Helper components
import Animated from 'src/components/helpers/animated';

// Images
import logo from './logo.svg';

// Styles
import '../../styles.global.css';
import css from './login.scss';
// --------------------

class Login extends React.PureComponent {
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

        <div className={css.wrapper}>
          <Animated animationIn="bounceInDown" animationInDelay={0.2}>
            <img src={logo} className={css.logo_onpage} alt="Oktopus" />
          </Animated>
          <div className={css.login_box}>
            <Animated animationIn="bounceInDown">
              <div className={css.login_form}>
                <Link to="/Back" className={css.closeX} />
                <span className={css.box_title}>Login</span>
                <div className={css.login_fields}>
                  <div className={css.field}>
                    <input type="text" id="fieldUser" className={css.input} required />
                    <label htmlFor="fieldUser" className={css.label}>Username</label>
                  </div>
                  <div className={css.field}>
                    <input type="password" id="fieldPassword" className={css.inputError} required />
                    <label htmlFor="fieldPassword" className={css.label}>Password</label>
                    <span><Link to="/ResetPW" className={css.forgot}>Forgot?</Link></span>
                  </div>
                  <button className={css.btn_default}>Login</button>
                </div>
              </div>
            </Animated>
            <Animated animationIn="bounceInUp" animationInDelay={0.2}>
              <span className={css.login_subtext}>Don&rsquo;t have an account yet? <Link to="/Signup">Sign Up</Link></span>
              <Route exact path="/Signup" component={Signup} />
            </Animated>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
