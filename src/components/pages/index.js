// MySites Page

// --------------------
// IMPORTS
// import { Link } from 'react-router-dom';

/* NPM */
import React from 'react';

/* Oktopus Components */
import HeaderLoggedIn from '../form_components/headerLoggedIn';
import PageCard from '../form_components/pageCard';
import PageStyleEditor from '../form_components/page_styleEditor';

/* Local */

// Styles


// Helper components
//    import Animated from 'src/components/helpers/animated';

// Images

// Styles
import css from './pages.scss';
// --------------------

class Pages extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <div>
        <HeaderLoggedIn />
        <PageStyleEditor />

        <div className={css.card_wrapper}>
          <PageCard />
          <PageCard />
          <PageCard />
          <PageCard />
          <PageCard />
        </div>
      </div>

    );
  }
}

export default Pages;
