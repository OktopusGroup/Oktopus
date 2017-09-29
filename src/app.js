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
import menuReducer from 'reducers/menu';

// Components
import Login from 'components/login';
import Signup from 'components/signup';
import ResetPW from 'components/login/reset';
import ConfirmSignup from 'components/signup/confirm';
import HeaderLoggedIn from 'components/header/loggedIn';
import HeaderLoggedOut from 'components/header/loggedOut';
import ModalAddDomain from 'components/dash/modal/domain/add';
import ModalInputDomain from 'components/dash/modal/domain/input';
import ModalInputTitle from 'components/dash/modal/site/new/inputTitle';
import ModalNewSite from 'components/dash/modal/site/new';
import PageStyleEditor from 'components/dash/pages/styleEditor';
import MySites from 'components/dash/sites';
import AccountSettings from 'components/dash/account/settings';
import AccountDropdown from 'components/dash/account/dropdown';
import Pages from 'components/dash/pages';
import EditorFrame from 'components/editor';
import EditorButtonBar from 'components/editor/buttonBar';
import WorkspaceHeader from 'components/editor/workspaceHeader';
import EditorSidebarLogin from 'components/editor/sidebar/sidebar_login';
import EditorSidebarHeader from 'components/editor/sidebar/sidebar_header';
import EditorSidebarProfile from 'components/editor/sidebar/sidebar_profile';
import EditorSidebarCards from 'components/editor/sidebar/sidebar_cards';
import EditorSidebarDetail from 'components/editor/sidebar/sidebar_detailPage';
import EditorLogin from 'components/editor/login';
import Test from 'components/test';


// Global styles
import './styles.global.css';

// --------------------

config.enableGraphQLServer();

// Add reducers
config.addReducer('menu', menuReducer);

const routes = [
  /* Test routes */
  ['/test', Test],
  ['/test/header/loggedIn', HeaderLoggedIn],
  ['/test/header/loggedOut', HeaderLoggedOut],
  ['/test/dash/account/dropdown', AccountDropdown],
  ['/test/editor/buttonBar', EditorButtonBar],
  ['/test/editor/header', WorkspaceHeader],
  ['/test/editor/sidebar_login', EditorSidebarLogin],
  ['/test/editor/sidebar_header', EditorSidebarHeader],
  ['/test/editor/sidebar_profile', EditorSidebarProfile],
  ['/test/editor/sidebar_cards', EditorSidebarCards],
  ['/test/editor/sidebar_detailPage', EditorSidebarDetail],
  ['/test/editor/login', EditorLogin],
  ['/test/editor', EditorFrame],


  /* Real routes */
  ['/login', Login],
  ['/login/reset', ResetPW],
  ['/signup', Signup],
  ['/signup/confirm', ConfirmSignup],
  ['/dash/sites', MySites],
  ['/dash/account/settings', AccountSettings],
  ['/dash/domain/add', ModalAddDomain],
  ['/dash/domain/input', ModalInputDomain],
  ['/dash/domain/inputTitle', ModalInputTitle],
  ['/dash/site/new', ModalNewSite],
  ['/dash/site/new/inputTitle', ModalInputTitle],
  ['/dash/pages', Pages],
  ['/dash/pages/styleEditor', PageStyleEditor],
];

export default () => (
  <div>
    <Helmet title="Oktopus" />
    <Switch>
      {routes.map(route => (
        <Route key={route[0]} exact path={route[0]} component={route[1]} />
      ))}
      <Route component={Login} />
    </Switch>
  </div>
);
