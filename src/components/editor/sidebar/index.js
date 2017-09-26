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
    <CheckBox onChange={props.onClick} />
    <span className={css.list_item}>{props.title}</span>
  </div>
);

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Items
const items = [
  {
    title: 'Facebook',
    onClick() {
      alert('Clicked Facebook');
    }
  },
  {
    title: 'LinkedIn',
    onClick() {
      alert('Clicked LinkedIn');
    }
  },
  {
    title: 'Twitter',
    onClick() {
      alert('Clicked Twitter');
    }
  },
  {
    title: 'Gmail',
    onClick() {
      alert('Clicked Gmail');
    }
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
            <SidebarItem onClick={item.onClick} key={item.title} title={item.title} />
          ))}
        </div>
      </div>
    );
  }
}

export default EditorSidebar;
