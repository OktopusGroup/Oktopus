// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import Helmet from 'react-helmet';
import HeaderLoggedIn from 'components/header/loggedIn';
import EditorButtonBar from 'components/editor/buttonBar';
import EditorSidebar from '../../components/editor/sidebar';

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

        <div className={css.header}>
          <HeaderLoggedIn />
        </div>

        <div className={css.buttonBar}>
          <EditorButtonBar />
        </div>

        <div className={css.sideBar}>
          <EditorSidebar />
        </div>
      </div>

    );
  }
}
export default EditorFrame;
