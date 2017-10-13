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

class ModalDeleteUpload extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <Animated animationIn="bounceInDown">
        <div className={css.modal_box}>
          <div className={css.wrapper}>
            <Link to="/todo" className={css.closeX} />
            <p className={css.title}>Delete this upload</p>
            <p className={css.subtitle}>(there is no way to undo this action)</p>

            <button className={css.btn_red_large}>Delete this upload</button>
          </div>
        </div>
      </Animated>
    );
  }
}

export default ModalDeleteUpload;
