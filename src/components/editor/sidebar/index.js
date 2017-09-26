// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import CheckBox from '../../form/button/checkbox';

/* Local */

// Styles
import css from './sidebar.scss';

// -----------------------------------------------------------------------------

// Create component for button

class EditorSidebar extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <div className={css.wrapper}>
        <div className={css.sidebar}>
          <span className={css.sidebar_title}>Add / Remove Features</span>
          <div className={css.grey_box}>
            <span className={css.list_item} href="/#">Facebook</span>
            {/* CHECK BOXES HOVER / ACTIVE STATES DON'T WORK CORRECTLY */}
            <CheckBox />
          </div>
          <div className={css.grey_box}>
            <span className={css.list_item} href="/#">LinkedIn</span>
            <CheckBox />
          </div>
          <div className={css.grey_box}>
            <span className={css.list_item} href="/#">Twitter</span>
            <CheckBox />
          </div>
          <div className={css.grey_box}>
            <span className={css.list_item} href="/#">Gmail</span>
            <CheckBox />
          </div>
        </div>
      </div>
    );
  }
}

export default EditorSidebar;
