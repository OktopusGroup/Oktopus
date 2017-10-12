/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components to test
import PlatformHeader1 from 'components/platform/header1';
import PlatformAccountSidebar from 'components/platform/dash/account/sidebar';
import PlatformProfile1 from 'components/platform/dash/account/profile1';
import Grid from 'components/grid/account';

// Styles
import css from './account.scss';

// Grid cell
const Cell = props => (
  <div className={props.area}>{props.children}</div>
);

Cell.propTypes = {
  area: PropTypes.string.isRequired,
};

export default () => (
  <div className={css.container}>

    <Grid
      A={props => <Cell area={props.area}><PlatformHeader1 /></Cell>}
      B={props => <Cell area={props.area}><PlatformAccountSidebar /></Cell>}
      C={props => <Cell area={props.area}><PlatformProfile1  /></Cell>} />
  </div>

);