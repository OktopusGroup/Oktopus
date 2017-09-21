// Modal for adding new site ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';

/* Local */

// Styles
import css from './modal_addDomain.scss';

// Images
import discover from '../../images/discover.svg';
import connect from '../../images/connect.svg';
import logoTurfmob from '../../images/logo_turfmob.svg';
// ----------------------

// Create component for button

class ModalAddDomain extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <div className={css.background}>
        <div className={css.wrapper}>

          <div className={css.modal_box}>
            <Link to="/Back" className={css.closeX} />

            <p className={css.title}>Add a custom domain</p>

            <div className={css.box_discover}>
              <img src={discover} className={css.box_image} alt="discover new domains" />
              <p className={css.description}>Find your perfect domain</p>
              <button className={css.btn_blue_large}>Discover</button>
              <p className={css.bottom_text_top}>Powered by</p>
              <Link to="http://www.turfmob.com"><img src={logoTurfmob} className={css.logo_turfmob} alt="Turfmob Logo" /></Link>
              <p className={css.bottom_text_bottom}>an Oktopus brother company</p>
            </div>

            <div className={css.box_connect}>
              <img src={connect} className={css.box_image} alt="connect your domain" />
              <p className={css.description}>Connect an existing domain</p>
              <button className={css.btn_blue_large}>Connect</button>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default ModalAddDomain;
