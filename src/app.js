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
import HeaderLoggedIn from 'src/components/form_components/headerLoggedIn';
import HeaderLoggedOut from 'src/components/form_components/headerLoggedOut';
import ModalAddDomain from 'src/components/form_components/modal/modal_addDomain';
import ModalInputDomain from 'src/components/form_components/modal/modal_addDomain__inputDomain';
import ModalInputTitle from 'src/components/form_components/modal/modal_newSite__inputTitle';
import ModalNewSite from 'src/components/form_components/modal/modal_newSite';
import MySites from 'src/components/mySites';
import AccountSettings from 'src/components/accountSettings';
import AccountDropdown from 'src/components/form_components/accountDropdown';

// Global styles
import './styles.global.css';
import '../src/components/variables.scss';
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
      <Route path="/accountDropdown" component={AccountDropdown} />
      <Route path="/addDomain" component={ModalAddDomain} />
      <Route path="/newsite" component={ModalNewSite} />
      <Route path="/inputDomain" component={ModalInputDomain} />
      <Route path="/inputTitle" component={ModalInputTitle} />
      <Route component={Login} />
    </Switch>
  </div>
);
