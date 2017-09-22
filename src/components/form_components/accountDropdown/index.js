// ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import cn from 'classnames';

/* Local */

// Helper components
import Animated from 'src/components/helpers/animated';

// Styles
import css from './accountDropdown.scss';

// Images
import dropdownBox from '../images/dropdown_box.svg';

// ----------------------

// Create component for button

@connect(state => ({ menu: state.menu }))
class AccountDropdown extends React.PureComponent {
  static propTypes = {
    menu: PropTypes.object,
  }

  static defaultProps = {
    menu: {
      enabled: false,
      showAccountMenu: false,
    },
  }

  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  show = () => {
    this.props.dispatch({
      type: 'SHOW_ACCOUNT_MENU',
      meta: {
        debounce: {
          cancel: true,
          key: 'HIDE_ACCOUNT_MENU',
        },
      },
    });
  }

  hide = () => {
    this.props.dispatch({
      type: 'HIDE_ACCOUNT_MENU',
      meta: {
        debounce: {
          time: 1,
        },
      },
    });
  }

  render() {
    const { menu } = this.props;
    if (typeof menu.showAccountMenu === 'undefined') return null;
    return (
      <Animated
        animateOnMount={menu.showAccountMenu}
        isVisible={menu.showAccountMenu}
        className={css.animation}>
        <div
          className={css.positioner}
          onMouseEnter={this.show}
          onMouseLeave={this.hide}>
          <img src={dropdownBox} className={css.dropdown_svg} alt="Oktopus" />
          <div className={css.dropdown_box}>
            <Link to="/dashboard"><div className={css.dropdown_box__item}>Dashboard</div></Link>
            <Link to="/mySites"><div className={css.dropdown_box__item}>My Sites</div></Link>
            <Link to="/accountSettings"><div className={css.dropdown_box__item}>Account Settings</div></Link>
            <Link to="/billing"><div className={css.dropdown_box__item}>Billing</div></Link>
            <Link to="/logout"><button className={cn(css.btn_default_small, css.button_align)}>Logout</button></Link>
          </div>
        </div>
      </Animated>
    );
  }
}

export default AccountDropdown;
