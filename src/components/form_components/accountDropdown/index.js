// ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

/* Local */


// Styles
import css from './accountDropdown.scss';
import '../../../styles.global.css';

// Images
import dropdownBox from '../images/dropdown_box.svg';

// ----------------------

// Create component for button

class AccountDropdown extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (

      <div className={css.positioner}>
        <img src={dropdownBox} className={css.dropdown_svg} alt="Oktopus" />
        <div className={css.dropdown_box}>
          <Link to="/dashboard"><div className={css.dropdown_box__item}>Dashboard</div></Link>
          <Link to="/mySites"><div className={css.dropdown_box__item}>My Sites</div></Link>
          <Link to="/accountSettings"><div className={css.dropdown_box__item}>Account Settings</div></Link>
          <Link to="/billing"><div className={css.dropdown_box__item}>Billing</div></Link>
          <Link to="/logout"><button className={cn (css.btn_default_small, css.button_align)}>Logout</button></Link>
        </div>
      </div>
    );
  }
}

export default AccountDropdown;
