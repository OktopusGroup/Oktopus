// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';

/* Local */

// Helper components
import Animated from 'components/helpers/animated';

// Styles
import css from './input.scss';

// -----------------------------------------------------------------------------

// Create component for button

class ModalInputDomain extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <Animated animationIn="bounceInDown">
        <div className={css.modal_box}>
          <div className={css.wrapper}>
            <Link to="/todo" className={css.closeX} />
            <p className={css.title}>Input your custom domain</p>
            <p className={css.subtitle}>(you must already own the domain)</p>

            <div className={css.field}>
              <input type="text" id="fieldUrl" className={css.input} required />
              <label htmlFor="fieldUrl" className={css.label}>http://</label>
            </div>
            <button className={css.btn_blue_large}>Connect</button>
          </div>
        </div>
      </Animated>
    );
  }
}

export default ModalInputDomain;
