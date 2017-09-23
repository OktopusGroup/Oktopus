// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';

/* Local */

// Images
import share from 'images/share.svg';
import hire from 'images/hire.svg';
import marketplace from 'images/marketplace.svg';

// Styles
import css from './new.scss';

// -----------------------------------------------------------------------------

// Create component for button

class ModalNewSite extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (

      <div className={css.background}>
        <div className={css.modal_box}>
          <Link to="/todo" className={css.closeX} />
          <p className={css.title}>Add a custom domain</p>
          <div className={css.subtitle}>Create a...</div>

          <div className={css.boxes}>

            <div className={css.box_sharing}>
              <img src={share} className={css.box_image} alt="create a freelancer platform" />
              <p className={css.description}>Content and file sharing community</p>
              <button className={css.btn_blue_large}>Begin</button>
            </div>

            <div className={css.box_hiring}>
              <img src={hire} className={css.box_image} alt="create a freelancer platform" />
              <p className={css.description}>Hiring platform for freelancers</p>
              <div className={css.btn_blue_large_disabled}>Coming Soon</div>
            </div>

            <div className={css.box_marketplace}>
              <img src={marketplace} className={css.box_image} alt="create an online marketplace" />
              <p className={css.description}>Connect an existing domain</p>
              <div className={css.btn_blue_large_disabled}>Coming Soon</div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default ModalNewSite;
