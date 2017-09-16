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
      <Route component={Login} />
    </Switch>
  </div>
);
