// MySites Page

// --------------------
// IMPORTS
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

/* NPM */
import React from 'react';

/* Oktopus */

// Helper components
import Animated from 'src/components/helpers/animated';

// Images

// Styles
import '../../styles.global.css';
import css from './mySites.scss';
// --------------------

class MySites extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <div>
        <Helmet
          title="Oktopus"
          meta={[{
            name: 'Creative sharing networks',
            content: 'My Sites',
          }]} />
  )
}


export default MySites;
