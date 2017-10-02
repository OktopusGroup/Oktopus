/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components to test
import HeaderLoggedIn from 'components/header/loggedIn';
import EditorButtonBar from 'components/editor/buttonBar';
import EditorSidebarLogin from 'components/editor/sidebar/login';
import EditorPreviewBar from 'components/editor/previewBar';

import Grid from './grid/editor';

// Styles
import css from './test.scss';

// Grid cell
const Cell = props => (
  <div className={props.area}>{props.children}</div>
);

Cell.propTypes = {
  area: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default () => (
  <div className={css.container}>

    <h2>Grid</h2>
    <Grid

      A={props => <Cell area={props.area}><HeaderLoggedIn /></Cell>}
      B={props => <Cell area={props.area}><EditorButtonBar /></Cell>}
      C={props => <Cell area={props.area}><EditorPreviewBar /></Cell>}
      D={props => <Cell area={props.area}><EditorSidebarLogin /></Cell>} />

      <hr />

      <h2>Grid without grid component</h2>

      <div className={css.grid}>

        <div className={css.a}><HeaderLoggedIn /></div>
        <div className={css.b}><EditorButtonBar /></div>
        <div className={css.c}><EditorPreviewBar /></div>
        <div className={css.d}><EditorSidebarLogin /></div>
        </div>

  </div>
);
