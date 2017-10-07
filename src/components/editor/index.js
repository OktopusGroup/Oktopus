/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components to test
import HeaderLoggedIn from 'components/header/loggedIn';
import EditorButtonBar from 'components/editor/buttonBar';
import EditorSidebarProfile from 'components/editor/sidebar/profile';
import EditorPreviewBar from 'components/editor/previewBar';
import EditorWorkspace from 'components/editor/workspace';

import Grid from 'components/grid/editor';

// Styles
import css from './editor.scss';

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
      A={props => <Cell area={props.area}><HeaderLoggedIn /></Cell>}
      B={props => <Cell area={props.area}><EditorButtonBar /></Cell>}
      C={props => <Cell area={props.area}><EditorPreviewBar /></Cell>}
      D={props => <Cell area={props.area}><EditorSidebarProfile /></Cell>}
      E={props => <Cell area={props.area}><EditorWorkspace /></Cell>} />
  
  </div>

);