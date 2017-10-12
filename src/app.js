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
import HeaderPreview from 'components/header/previewMode';
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
import PlatformResetPW from 'components/platform/login1/reset';
import PlatformSignup1 from 'components/platform/signup1';
import PlatformConfirmSignup1 from 'components/platform/signup1/confirm1';
import PlatformCard1 from 'components/platform/card1';
import PlatformCard2 from 'components/platform/card2';
import PlatformHeader1 from 'components/platform/header1';
import PlatformHeader2 from 'components/platform/header2';
import PlatformProfile1 from 'components/platform/dash/account/profile1';
import PlatformAccountSettings from 'components/platform/dash/account/settings';
import ModalDeleteAccount from 'components/platform/dash/modal/delete';
import PlatformDropdown from 'components/platform/dash/account/dropdown';
import PlatformAccountSidebar from 'components/platform/dash/account/sidebar';
import PlatformDetail1 from 'components/platform/detail1';
import PlatformUpload1 from 'components/platform/upload1';
import PlatformAccount from 'components/platform/dash/account';
import PlatformAccountFavorites from 'components/platform/dash/account/favorites';
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
  ['/test/editor/sidebar/login', EditorSidebarLogin],
  ['/test/editor/sidebar/header', EditorSidebarHeader],
  ['/test/editor/sidebar/profile', EditorSidebarProfile],
  ['/test/editor/sidebar/cards', EditorSidebarCards],
  ['/test/editor/sidebar/detail', EditorSidebarDetail],
  ['/test/editor/workspace', EditorWorkspace],
  ['/test/editor/login1', PlatformLogin1],
  ['/test/editor/resetpw', PlatformResetPW],
  ['/test/editor/signup1', PlatformSignup1],
  ['/test/editor/confirmsignup1', PlatformConfirmSignup1],
  ['/test/editor/card1', PlatformCard1],
  ['/test/editor/card2', PlatformCard2],
  ['/test/editor/header1', PlatformHeader1],
  ['/test/editor/header2', PlatformHeader2],
  ['/test/editor/upload1', PlatformUpload1],
  ['/test/editor/account/profile1', PlatformProfile1],
  ['/test/editor/account/settings', PlatformAccountSettings],
  ['/test/editor/account/sidebar', PlatformAccountSidebar],
  ['/test/editor/account/delete', ModalDeleteAccount],
  ['/test/editor/detail1', PlatformDetail1],
  ['/test/editor/account', PlatformAccount],
  ['/test/editor/account/favorites', PlatformAccountFavorites],


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
  ['/editor/header/preview', HeaderPreview],
  ['/platform/dropdown', PlatformDropdown],

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
