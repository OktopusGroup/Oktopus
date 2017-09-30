// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import Helmet from 'react-helmet';
import HeaderLoggedIn from 'components/header/loggedIn';
import EditorButtonBar from 'components/editor/buttonBar';
import EditorPreviewBar from '../../components/editor/previewBar';
import EditorSidebarLogin from '../../components/editor/sidebar/login';

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

        <HeaderLoggedIn className={css.header} />
        <EditorButtonBar className={css.buttonBar} />
        <div className={css.wrapper}>
          <EditorSidebarLogin className={css.sidebar} />
          <EditorPreviewBar className={css.previewBar} />
          <div className={css.workspace}>WORKSPACE</div>
        </div>
      </div>

    );
  }
}
export default EditorFrame;
