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
          <Link to="/back"><btn className={cn(css.btn_blue_small, css.btn_left)} direction="up"><i class="fa fa-angle-left" aria-hidden="true" /> Pages</btn></Link>
        </div>
        <div>
          <Link to="/todo"><btn className={cn(css.btn_blue_small, css.btn_right)} direction="up">Settings</btn></Link>
        </div>
      </div>
    );
  }
}
export default EditorButtonBar;
