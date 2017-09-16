// --------------------
// IMPORTS

/* NPM */
import React from 'react';
import Helmet from 'react-helmet';

/* ReactQL */
import config from 'kit/config';

/* Oktopus */

// Components
import Login from 'src/components/login';

// Global styles
import './styles.global.css';
import './components/form_components/button/button.scss';

// --------------------

config.enableGraphQLServer();

export default () => (
  <div>
    <Helmet title="Oktopus" />
    <Login />
  </div>
);
