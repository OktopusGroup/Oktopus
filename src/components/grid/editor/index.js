
import React from 'react';
import css from './grid.scss';

export default props => (
  <div className={css.grid}>
    <props.A area={css.a} />
    <props.B area={css.b} />
    <props.C area={css.c} />
    <props.D area={css.d} />
    <props.E area={css.e} />
  </div>
);
