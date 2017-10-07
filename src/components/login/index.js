// Login box

// -----------------------------------------------------------------------------
// IMPORTS
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

/* NPM */
import React from 'react';

// Helper components
import Animated from 'components/helpers/animated';

// Components
import HeaderLoggedOut from 'components/header/loggedOut';

// Images
import logo from 'images/logo.svg';

// Styles
import css from './login.scss';

// -----------------------------------------------------------------------------

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

        <HeaderLoggedOut />

        <div className={css.wrapper}>
          <Animated animationIn="bounceInDown" animationInDelay={0.2}>
            <img src={logo} className={css.logo_onpage} alt="Oktopus" />
          </Animated>
          <div className={css.login_box}>
            <Animated animationIn="bounceInDown">
              <div className={css.login_form}>
                <div className={css.close_btn}>
                  <Link to="/todo" className={css.closeX} />
                </div>
                <span className={css.box_title}>Login</span>
                <div className={css.field}>
                  <input type="text" id="fieldEmail" className={css.input} required />
                  <label htmlFor="fieldEmail" className={css.label}>Email</label>
                </div>
                <div className={css.field}>
                  <input type="password" id="fieldPassword" className={css.input} required />
                  <label htmlFor="fieldPassword" className={css.label}>Password</label>
                  <span><Link to="/login/reset" className={css.forgot}>Forgot?</Link></span>
                </div>
                <Link to="/todo" className={css.btn_default}>Login</Link>
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
