// --------------------
// IMPORTS


/* NPM */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

/* ReactQL */
import config from 'kit/config';

/* Oktopus */

// Components
import Login from 'src/components/login';
import Signup from 'src/components/signup';
import ResetPW from 'src/components/resetPW';
import ConfirmSignup from 'src/components/confirmSignup';
import MySites from 'src/components/mySites';
import AccountSettings from 'src/components/accountSettings';
import HeaderLoggedIn from 'src/components/form_components/headerLoggedIn';
import HeaderLoggedOut from 'src/components/form_components/headerLoggedOut';

// Global styles
import './styles.global.css';

// --------------------

config.enableGraphQLServer();

export default () => (
  <div>
    <Helmet title="Oktopus" />
    <Switch>
      <Route path="/header" component={HeaderLoggedIn} />
      <Route path="/header" component={HeaderLoggedOut} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/resetPW" component={ResetPW} />
      <Route path="/confirmSignup" component={ConfirmSignup} />
      <Route path="/mySites" component={MySites} />
      <Route path="/accountSettings" component={AccountSettings} />
      <Route component={Login} />
    </Switch>
  </div>
);
