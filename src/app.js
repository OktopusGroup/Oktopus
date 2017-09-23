// --------------------
// IMPORTS


/* NPM */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

/* ReactQL */
import config from 'kit/config';

/* Oktopus */

// Reducers
import menuReducer from 'src/reducers/menu';

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
import PageStyleEditor from 'src/components/form_components/page_styleEditor';
import MySites from 'src/components/mySites';
import AccountSettings from 'src/components/accountSettings';
import AccountDropdown from 'src/components/form_components/accountDropdown';
import Pages from 'src/components/pages';

// Global styles
import 'src/components/variables.scss';
import './styles.global.css';

// --------------------

config.enableGraphQLServer();

// Add reducers
config.addReducer('menu', menuReducer);

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
      <Route path="/styleEditor" component={PageStyleEditor} />
      <Route path="/pages" component={Pages} />
      

      <Route component={Login} />
    </Switch>
  </div>
);
