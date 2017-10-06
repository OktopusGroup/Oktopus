// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


/* Local */

// Components

// Images

// Styles
import css from './tag.scss';

// -----------------------------------------------------------------------------
class Tag extends React.PureComponent {

  submit = () => {
    /* intentionally empty for now */
  }

  render() {
    return (
      <div>
        <Link to="/remove" className={css.tag}>Tag text</Link>
      </div>
    );
  }
}
export default Tag;
