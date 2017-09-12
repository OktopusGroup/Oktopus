// Login box

// --------------------
// IMPORTS

/* NPM */
import React from 'react';

/* Oktopus */

// Images
import logo from './logo.svg';

// Styles
import css from './login.scss';

// --------------------

class Login extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <div>
        <div className={css.container}>
          <div className={css.login__open}>
            <div className={css.login__form}>
              <div className={css.login__fields}>
                <div className={css.field}>
                  <input type="text" id="fieldUser" className={css.input} required />
                  <label htmlFor="fieldUser" className={css.label}>Username</label>
                </div>
                <div className={css.field}>
                  <input type="password" id="fieldPassword" className={css.input} required />
                  <label htmlFor="fieldPassword" className={css.label}>Password</label>
                </div>
                <div className={css.login__footer}>
                  <button className={css.btn}>Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className={css.login__subtext}>Don&rsquo;t have an account yet? <a href="#signup">Sign Up</a></span>
        <div>
          <img src={logo} className={css.logo__onpage} alt="Oktopus" />
        </div>
      </div>
    );
  }
}

export default Login;
