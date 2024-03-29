/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components to test
import HeaderLoggedIn from 'components/header/loggedIn';
import EditorButtonBar from 'components/editor/buttonBar';
import EditorSidebarHeader from 'components/editor/sidebar/header';
import EditorPreviewBar from 'components/editor/previewBar';
import EditorWorkspace from 'components/editor/workspace';

import Grid from './grid/editor';

// Styles
import css from './test.scss';

// Grid cell
const Cell = props => (
  <div className={props.area}>{props.children}</div>
);

Cell.propTypes = {
  area: PropTypes.string.isRequired,
};

export default () => (
  <div className={css.container}>

    <h2>Grid</h2>
    <Grid

      A={props => <Cell area={props.area}><HeaderLoggedIn /></Cell>}
      B={props => <Cell area={props.area}><EditorButtonBar /></Cell>}
      C={props => <Cell area={props.area}><EditorPreviewBar /></Cell>}
      D={props => <Cell area={props.area}><EditorSidebarHeader /></Cell>}
      E={props => <Cell area={props.area}><EditorWorkspace /></Cell>} />
  
  </div>

);
