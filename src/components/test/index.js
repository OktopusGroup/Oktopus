/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components to test
import ArrowButton from 'components/form/button/arrow';
import HeaderLoggedIn from 'components/header/loggedIn';
import Grid from './grid';

// Styles
import css from './test.scss';

// Grid cell
const Cell = props => (
  <div className={props.area} style={{ backgroundColor: props.color }} />
);

Cell.propTypes = {
  area: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default () => (
  <div className={css.container}>
    <h2>Links</h2>
    <Link to="/mySites"><img src="https://media.giphy.com/media/13xHqoOQOdFu5a/giphy.gif" alt="Link me" /></Link>
    <hr />
    <h2>Arrow button</h2>
    <ArrowButton direction="up">Up</ArrowButton>
    <ArrowButton direction="down">Down</ArrowButton>
    <ArrowButton direction="left">Left</ArrowButton>
    <ArrowButton direction="right">Right</ArrowButton>
    <ArrowButton>Default</ArrowButton>
    <ArrowButton className={css.arrowStyles}>Styled</ArrowButton>
    <hr />
    
    <h2>Grid</h2>
    <Grid

      A={props => <Cell area={props.area} color="red" />}
      B={props => <Cell area={props.area} color="blue" />}
      C={props => <Cell area={props.area} color="orange" />}
      D={props => <Cell area={props.area} color="silver" />} />
  </div>
);
