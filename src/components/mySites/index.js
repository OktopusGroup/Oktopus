// MySites Page

// --------------------
// IMPORTS
//    import { Link } from 'react-router-dom';

/* NPM */
import React from 'react';

/* Oktopus */

/* Local */
//    import header from '../form_components/header';

// Styles


// Helper components
//    import Animated from 'src/components/helpers/animated';

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

      <div className={css.wrapper}>
        <div className={css.page_menu} />
        <div className={css.new_site} />
        <div className={css.site_cards} />
      </div>
    );
  }
}

export default MySites;
