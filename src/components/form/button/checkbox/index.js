// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

/* Local */

// Styles
import css from './checkbox.scss';

// -----------------------------------------------------------------------------

// Create component for button

class Checkbox extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    onChange: PropTypes.func,
    isChecked: PropTypes.bool,
  };

  static defaultProps = {
    name: null,
    label: null,
    className: null,
    style: null,
    onChange: null,
    isChecked: null,
  }

  onChangeHandler = ev => {
    if (typeof this.props.onChange === 'function') {
      // Pass the current 'checked' value to the upstream `onChange` handler
      this.props.onChange(ev.currentTarget.checked);
    }
  }

  render() {
    const { name, label, style, className, isChecked } = this.props;
    const classes = cn(css.checkbox, className);
    return (
      <div className={classes} style={style}>

        {/* The checkbox */}
        <input
          type="checkbox"
          name={name}
          className={css.checkbox_input}
          checked={isChecked}
          onChange={this.onChangeHandler} />
        <svg className={css.checkbox_svg} viewBox="0 0 100 100">
          <polyline className={css.checkbox_polyline} points="83.1,31.5 39,75.5 16.9,53.5" />
        </svg>
        {/* Show the label if we have one */}
        { label && (
          <label
            htmlFor={name}
            className={css.checkbox_label}>{label}</label>
        )}
      </div>
    );
  }
}

export default Checkbox;
