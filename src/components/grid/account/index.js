// GRID FOR THE PLATFORM ACCOUNT PAGES

import React from 'react';
import css from './grid.scss';

export default props => (
  <div className={css.grid}>
    <props.A area={css.a} />
    <props.B area={css.b} />
    <props.C area={css.c} />
  </div>
);
