// Signup box

// --------------------
// IMPORTS
import { Link, Route } from 'react-router-dom';
import Login from 'src/components/login';
import Helmet from 'react-helmet';

/* NPM */
import React from 'react';
import { Animated } from 'react-animated-css';

/* Oktopus */

// Images
import logo from './logo.svg';

// Styles
import css from './signup.scss';
import '../form_components/button/button.scss';

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
            content: 'Sign Up to Oktopus',
          }]} />

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
                      <input type="text" id="userName" className={css.input} required />
                      <label htmlFor="fieldUser" className={css.label}>Full name</label>
                    </div>
                    <div className={css.field}>
                      <input type="email" id="Email" className={css.input} required />
                      <label htmlFor="fieldUser" className={css.label}>Email</label>
                    </div>
                    <div className={css.field}>
                      <input type="password" id="fieldPassword" className={css.input} required />
                      <label htmlFor="fieldPassword" className={css.label}>Password</label>
                    </div>
                    <div className={css.field}>
                      <input type="password" id="fieldPassword" className={css.input} required />
                      <label htmlFor="fieldPassword" className={css.label}>Password again</label>
                    </div>
                    <button className={css.btn}>Login</button>
                  </div>
                </div>
              </div>
            </Animated>
            <span className={css.login_subtext}>Already have an account? <Link href="/login">Login</Link></span>
            <Route exact path="/Login" component={Login} />
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
