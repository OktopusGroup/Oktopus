// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Helmet from 'react-helmet';
import HeaderLoggedIn from 'components/header/loggedIn';
import EditorButtonBar from 'components/editor/buttonBar';
import EditorCheckBox from '../form/button/checkbox';

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
            <span className={css.sidebar_title}>Add / Remove Features</span>

            <div className={css.grey_box}><span className={css.list_item} href="/#">Sort By <div className={css.align_checkbox}><EditorCheckBox /></div></span></div>

            <div className={css.grey_box}><span className={css.list_item} href="/#">Categories</span></div>
            <EditorCheckBox />
            <div className={css.grey_box}><span className={css.list_item} href="/#">another feature</span></div>
            <EditorCheckBox />

          </div>
        </div>

      </div>
    );
  }
}
export default EditorFrame;
