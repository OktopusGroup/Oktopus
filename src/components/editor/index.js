// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Helmet from 'react-helmet';
import HeaderLoggedIn from 'components/header/loggedIn';
import EditorButtonBar from 'components/editor/buttonBar';

/* Local */

// Styles
import css from './editor.scss';

// -----------------------------------------------------------------------------

// Create component for button

class EditorFrame extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <div>
        <Helmet
          title="Oktopus"
          meta={[{
            name: 'Oktopus',
            content: 'Visual Editor',
          }]} />

        <HeaderLoggedIn />
        <EditorButtonBar />
        <div className={css.wrapper_editor}>

          <div className={css.sidebar}>
            <h4>Add / Remove Features</h4>
            <ul>
              <li><a href="/#">Sort By   X</a></li>
              <li><a href="/#">Categories   X</a></li>
              <li><a href="/#">another feature   X</a></li>
              <button>Choose Categories</button>
            </ul>
          </div>

          <div className={css.workspace}>WORKSPACE</div>

        </div>

      </div>
    );
  }
}
export default EditorFrame;
