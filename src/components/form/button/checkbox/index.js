// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';

/* Local */

// Styles
import css from './checkbox.scss';

// -----------------------------------------------------------------------------

// Create component for button

class EditorCheckBox extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }


  render() {
    return (
      <div className={css.checkbox}>
        <input defaultChecked className={css.checkbox_input} type="checkbox" />
        <svg className={css.checkbox_svg} viewBox="0 0 100 100">
          <polyline className={css.checkbox_polyline} points="83.1,31.5 39,75.5 16.9,53.5" />
        </svg>
      </div>
    );
  }
}

export default EditorCheckBox;
