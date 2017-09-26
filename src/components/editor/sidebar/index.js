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
    <CheckBox key={props.title} />
    <span className={css.list_item}>{props.title}</span>
  </div>
);

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
};

// Items
const items = [
  {
    title: 'Facebook',
  },
  {
    title: 'LinkedIn',
  },
  {
    title: 'Twitter',
  },
  {
    title: 'Gmail',
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
            <SidebarItem key={item.title} title={item.title} />
          ))}
        </div>
      </div>
    );
  }
}

export default EditorSidebar;
