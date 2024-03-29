// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

/* Local */

// Styles
import css from './previewBar.scss';

// -----------------------------------------------------------------------------

// Create component for button

class EditorPreviewBar extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (

      <div className={css.editor_previewBar}>
        <Link to="/preview" className={cn(css.btn_default_small, css.btn_middle)}>Preview</Link>
      </div>
    );
  }
}

export default EditorPreviewBar;
