// Page Selector page

// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';

/* Local */

// Components
import HeaderLoggedIn from 'components/header/loggedIn';
import PageCard from 'components/dash/pages/card';
import PageStyleEditor from 'components/dash/pages/styleEditor';

// Styles
import css from './pages.scss';

// -----------------------------------------------------------------------------

class Pages extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (
      <div>
        <HeaderLoggedIn />
        <PageStyleEditor />
        <div className={css.title}>Choose a page to edit</div>
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
