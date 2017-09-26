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

class EditorCheckBox extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onChange: PropTypes.func,
    isChecked: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    style: null,
    onChange: null,
    isChecked: false,
  }

  render() {
    const { style, className, onChange, isChecked } = this.props;
    const classes = cn(css.wrapper, className);
    return (
      <div className={classes} style={style} >
        <div className={css.checkbox}>
          <input
            className={css.checkbox_input}
            type="checkbox"
            checked={isChecked}
            onChange={onChange} />
          <svg className={css.checkbox_svg} viewBox="0 0 100 100">
            <polyline className={css.checkbox_polyline} points="83.1,31.5 39,75.5 16.9,53.5" />
          </svg>
        </div>
      </div>
    );
  }
}

export default EditorCheckBox;
