import React from 'react';
import css from './grid.scss';
import HeaderLoggedIn from '../../header/loggedIn';

export default props => (
  <div className={css.grid}>
    <props.A area={css.a}><HeaderLoggedIn /></props.A>
    <props.B area={css.b} />
    <props.C area={css.c} />
    <props.D area={css.d} />
  </div>
);
