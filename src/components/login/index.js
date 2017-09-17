// Login box

// --------------------
// IMPORTS
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

/* NPM */
import React from 'react';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
>>>>>>> 869a85baef49de80be0d4c7079ef822ed04c079b

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
                    <input type="text" id="fieldEmail" className={css.input} required />
                    <label htmlFor="fieldEmail" className={css.label}>Email</label>
                  </div>
                  <div className={css.field}>
                    <input type="password" id="fieldPassword" className={css.input} required />
                    <label htmlFor="fieldPassword" className={css.label}>Password</label>
                    <span><Link to="/ResetPW" className={css.forgot}>Forgot?</Link></span>
                  </div>
                  <button className={css.btn_default}>Login</button>
                </div>
              </div>
            </Animated>
            <Animated animationIn="bounceInUp" animationInDelay={0.2}>
              <span className={css.login_subtext}>Don&rsquo;t have an account yet? <Link to="/signup">Sign Up</Link></span>
            </Animated>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
