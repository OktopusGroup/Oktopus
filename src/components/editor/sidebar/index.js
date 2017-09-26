/* eslint-disable no-alert */

// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

/* Local */

// Components
import CheckBox from 'components/form/button/checkbox';

// Styles
import css from './sidebar.scss';

// -----------------------------------------------------------------------------

// Sidebar item.
class SidebarItem extends React.PureComponent {
  // The properties that the <SidebarItem> component expects
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  }

  // Default property values
  static defaultProps = {
    onChange: null,
  };

  state = {
    isChecked: false,
  }

  // The function that should be fired when the <CheckBox> changes
  onChangeHandler = isChecked => {
    // Update the local state to determine if the checkbox is checked
    this.setState({ isChecked });

    // If an `onChange` handler was passed to our <SideBarItem>, then fire
    // that here too
    if (typeof this.props.onChange === 'function') {
      this.props.onChange();
    }
  }

  // The function to render the component
  render() {
    const { name, label } = this.props;
    const wrapperClasses = cn(
      css.box,
      {
        [css.grey]: this.state.isChecked,
      },
    );

    return (
      <div className={wrapperClasses}>
        <CheckBox
          onChange={this.onChangeHandler}
          name={name}
          label={label} />
      </div>
    );
  }
}

// Items
const items = [
  {
    label: 'Facebook',
    name: 'facebook',
  },
  {
    label: 'LinkedIn',
    name: 'linkedIn',
    onChange() {
      alert('Clicked LinkedIn');
    },
  },
  {
    label: 'Twitter',
    name: 'twitter',
    onChange() {
      alert('Clicked Twitter');
    },
  },
  {
    label: 'Gmail',
    name: 'gmail',
    // onChange() {
    //   alert('Clicked Gmail');
    // },
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
              onChange={item.onChange} />
          ))}
        </div>
      </div>
    );
  }
}

export default EditorSidebar;
