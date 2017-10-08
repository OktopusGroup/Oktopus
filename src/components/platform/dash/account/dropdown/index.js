// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import cn from 'classnames';

/* Local */

// Helper components
import Animated from 'components/helpers/animated';

// Images
import dropdownBox from 'images/dropdown_box.svg';

// Styles
import css from './dropdown.scss';

// -----------------------------------------------------------------------------

// Create component for button

@connect(state => ({ menu: state.menu }))
class PlatformDropdown extends React.PureComponent {
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
            <Link to="/dash"><div className={css.dropdown_box__item}>Dashboard</div></Link>
            <Link to="/dash/sites"><div className={css.dropdown_box__item}>My Sites</div></Link>
            <Link to="/dash/account/settings"><div className={css.dropdown_box__item}>Account Settings</div></Link>
            <Link to="/billing"><div className={css.dropdown_box__item}>Billing</div></Link>
            <Link to="/logout" className={cn(css.btn_logout, css.btn_align)}>Logout</Link>
          </div>
        </div>
      </Animated>
    );
  }
}

export default PlatformDropdown;
