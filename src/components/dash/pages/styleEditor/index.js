// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

/* Local */

// Styles
import css from './styleEditor.scss';
import '../../../form/button/button.scss';

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
            <div>
              <Link to="/back"><btn direction="left" className={cn(css.btn_blue_small, css.btn_left)}><i class="fa fa-angle-left" aria-hidden="true" /> Sites</btn></Link>
            </div>
            {/* Change to "Show Editor" state when closed */}
            <div>
              <Link to="/todo"><btn direction="up" className={cn(css.btn_blue_small, css.btn_right)}><i class="fa fa-angle-up" aria-hidden="true" /> Hide Editor</btn></Link>
            </div>
          </div>
        </div>
        <div className={css.editor_box}>
          <div className={css.style_box}>
            <p className={css.category_title}>Overall Style</p>

            <div className={css.dropdownBar}>
              <div className={css.dropdown_header}>Style</div>
              <Link to="/" onclick="myFunction()" className={css.dropbtn}>Minimal & Modern<div className={css.triangle} /></Link>
            </div>

            <div className={css.dropdownBar}>
              <div className={css.dropdown_header}>Animations</div>
              <Link to="/" onclick="myFunction()" className={css.dropbtn}>Simple<div className={css.triangle} /></Link>
            </div>

          </div>
          <div className={css.color_box}>
            <p className={css.category_title}>Color Theme</p>
            <div className={css.colors}>
              <div className={css.color_button} />
              <p className={css.buttons_subtitle}>Buttons</p>
              <div className={css.color_accent} />
              <p className={css.accents_subtitle}>Accents</p>
            </div>
          </div>
          <div className={css.font_box}>
            <p className={css.category_title}>Text & Fonts</p>

            <div className={css.dropdownBar}>
              <div className={css.dropdown_header}>Font</div>
              <Link to="/" onclick="myFunction()" className={css.dropbtn}>Open Sans<div className={css.triangle} /></Link>
            </div>

            <div className={css.dropdownBar}>
              <div className={css.dropdown_header}>Size</div>
              <Link to="/" onclick="myFunction()" className={css.dropbtn}>Medium<div className={css.triangle} /></Link>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default PageStyleEditor;
