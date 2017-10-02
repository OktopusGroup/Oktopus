// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

/* Local */

// Styles
import css from './buttonBar.scss';
// -----------------------------------------------------------------------------

// Create component for button

class EditorButtonBar extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (

      <div className={css.editor_button_bar}>
        <div>
          <Link to="/back" className={cn(css.btn_blue_small, css.btn_left)}><i class="fa fa-angle-left" aria-hidden="true" /> Pages</Link>
        </div>
        <div>
          <Link to="/todo" className={cn(css.btn_blue_small, css.btn_right)}>Settings</Link>
        </div>
      </div>
    );
  }
}
export default EditorButtonBar;
