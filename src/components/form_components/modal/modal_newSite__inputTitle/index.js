// Modal for inputting domain address ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';

/* Local */

// Helper components
import Animated from 'src/components/helpers/animated';

// Styles
import css from './modal_newSite__inputTitle.scss';
import '../../../../styles.global.css';
// Images
// ----------------------

// Create component for button

class ModalInputTitle extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <div className={css.background}>
        <Animated animationIn="bounceInDown">
          <div className={css.modal_box}>
            <div className={css.wrapper}>
              <Link to="/Back" className={css.closeX} />
              <p className={css.title}>Add a New Site</p>
              <p className={css.subtitle}>Choose a title for your community</p>

              <div className={css.field}>
                <input type="text" id="fieldUrl" className={css.input} required />
                <label htmlFor="fieldUrl" className={css.label}>new site name</label>
              </div>
              <button className={css.btn_blue_large}>Add</button>
            </div>
          </div>
        </Animated>
      </div>
    );
  }
}

export default ModalInputTitle;
