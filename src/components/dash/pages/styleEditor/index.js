// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

/* Local */

// Styles
import css from './styleEditor.scss';

// -----------------------------------------------------------------------------

// Create component for button

class PageStyleEditor extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (

      <div className={css.wrapper}>
        <div className={css.editor_button_bar}>
          <div className={css.editor_button__container}>
            <Link to="/todo" className={cn(css.btn_blue_small, css.btn_left)}>Back to Sites</Link>
            {/* Change to "Show Editor" state when closed */}
            <button className={cn(css.btn_blue_small, css.btn_right)}>Hide Editor</button>
          </div>
        </div>
        <div className={css.editor_box}>


          <div className={css.style_box}>
            <p className={css.category_title}>Overall Style</p>
          </div>


          <div className={css.color_box}>
            <p className={css.category_title}>Color Theme</p>
            <div className={css.colors}>
              <div className={css.color_main} />
              <p className={css.buttons_subtitle}>Buttons</p>
              <div className={css.color_sub} />
              <p className={css.accents_subtitle}>Accents</p>
            </div>
          </div>


          <div className={css.font_box}>
            <p className={css.category_title}>Text & Fonts</p>
          </div>


        </div>
      </div>
    );
  }
}

export default PageStyleEditor;
