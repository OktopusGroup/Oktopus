import React from 'react';
import { Link } from 'react-router-dom';

// Components to test
import ArrowButton from 'components/form/button/arrow';

// Styles
import css from './test.scss';

export default () => (
  <div className={css.container}>
    <h2>Links</h2>
    <Link to="/mySites"><img src="https://media.giphy.com/media/13xHqoOQOdFu5a/giphy.gif" alt="Link me" /></Link>
    <hr />
    <h2>Arrow button</h2>
    <ArrowButton direction="up">Up button</ArrowButton>
    <ArrowButton direction="left">Left button</ArrowButton>
  </div>
);
