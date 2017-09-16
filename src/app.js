// --------------------
// IMPORTS

/* NPM */
import React from 'react';
// import Switch from 'react-router-dom';
import Helmet from 'react-helmet';

/* ReactQL */
import config from 'kit/config';

/* Oktopus */

// Components
import Login from 'src/components/login';
import './components/form_components/button/button.scss';
// import Signup from 'src/components/signup';

// Global styles
import './styles.global.css';


// --------------------

config.enableGraphQLServer();

export default () => (
  <div>
    <Helmet title="Oktopus" />
    <Login />
  </div>

);

/*
export default () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route component={Login} />
  </Switch>
);
*/
