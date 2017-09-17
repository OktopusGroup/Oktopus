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
import Header from 'src/components/form_components/header';

// Global styles
import './styles.global.css';

// --------------------

config.enableGraphQLServer();

export default () => (
  <div>
    <Helmet title="Oktopus" />
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/resetPW" component={ResetPW} />
      <Route path="/confirmSignup" component={ConfirmSignup} />
      <Route path="/mySites" component={MySites} />
      <Route path="/header" component={Header} />
      <Route component={Login} />
    </Switch>
  </div>
);
