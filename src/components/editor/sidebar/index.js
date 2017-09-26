/* eslint-disable no-alert */

// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from 'components/form/button/checkbox';

/* Local */

// Styles
import css from './sidebar.scss';

// -----------------------------------------------------------------------------

// Sidebar item.
const SidebarItem = props => (
  <div className={css.grey_box}>
    <CheckBox
      onChange={props.onClick}
      name={props.name}
      label={props.label} />
  </div>
);

SidebarItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Items
const items = [
  {
    label: 'Facebook',
    name: 'facebook',
    onClick() {
      alert('Clicked Facebook');
    },
  },
  {
    label: 'LinkedIn',
    name: 'linkedIn',
    onClick() {
      alert('Clicked LinkedIn');
    },
  },
  {
    label: 'Twitter',
    name: 'twitter',
    onClick() {
      alert('Clicked Twitter');
    },
  },
  {
    label: 'Gmail',
    name: 'gmail',
    onClick() {
      alert('Clicked Gmail');
    },
  },
];

// Full side-bar
class EditorSidebar extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <div className={css.wrapper}>
        <div className={css.sidebar}>
          <span className={css.sidebar_title}>Add / Remove Features</span>
          {items.map(item => (
            <SidebarItem
              key={item.name}
              name={item.name}
              label={item.label}
              onClick={item.onClick} />
          ))}
        </div>
      </div>
    );
  }
}

export default EditorSidebar;
