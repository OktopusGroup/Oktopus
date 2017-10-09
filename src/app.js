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
import Editor from 'components/editor';
import EditorButtonBar from 'components/editor/buttonBar';
import EditorPreviewBar from 'components/editor/previewBar';
import EditorSidebarLogin from 'components/editor/sidebar/login';
import EditorSidebarHeader from 'components/editor/sidebar/header';
import EditorSidebarProfile from 'components/editor/sidebar/profile';
import EditorSidebarCards from 'components/editor/sidebar/cards';
import EditorSidebarDetail from 'components/editor/sidebar/detail';
import EditorWorkspace from 'components/editor/workspace';
import PlatformLogin1 from 'components/platform/login1';
import PlatformCard1 from 'components/platform/card1';
import PlatformCard2 from 'components/platform/card2';
import PlatformHeader1 from 'components/platform/header1';
import PlatformProfile1 from 'components/platform/profile1';
import PlatformDropdown from 'components/platform/dash/account/dropdown';
import PlatformDetail1 from 'components/platform/detail1';
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
  ['/test/editor/previewBar', EditorPreviewBar],
  ['/test/editor/login', EditorSidebarLogin],
  ['/test/editor/header', EditorSidebarHeader],
  ['/test/editor/profile', EditorSidebarProfile],
  ['/test/editor/cards', EditorSidebarCards],
  ['/test/editor/detail', EditorSidebarDetail],
  ['/test/editor/workspace', EditorWorkspace],
  ['/test/editor/login1', PlatformLogin1],
  ['/test/editor/card1', PlatformCard1],
  ['/test/editor/card2', PlatformCard2],
  ['/test/editor/header1', PlatformHeader1],


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
  ['/editor', Editor],
  ['/platform/profile', PlatformProfile1],
  ['/platform/dropdown', PlatformDropdown],
  ['/platform/detail', PlatformDetail1],
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
