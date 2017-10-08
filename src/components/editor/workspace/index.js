// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';
// import PlatformCard2 from 'components/platform/card2';
// import PlatformHeader1 from 'components/platform/header1';
// import PlatformProfile1 from 'components/platform/profile1';
// import PlatformLogin1 from 'components/platform/login1';
import PlatformDetail1 from 'components/platform/detail1';


/* Local */

// Styles
import css from './workspace.scss';
// -----------------------------------------------------------------------------

class EditorWorkspace extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now -- the future home of our submit function */
  }

  render() {
    return (

      <div className={css.workspace_wrapper}>

        {/* Arrow button Left */}
        <div className={css.left_side}>
          <button className={css.btn_circle}>
            <div className={css.btn_arrow_left} />
          </button>
        </div>

        {/* Component to be edited goes here */}
        <div className={css.middle}>
          <PlatformDetail1/>
        </div>

        {/* Arrow button Left */}
        <div className={css.right_side}>
          <button className={css.btn_circle}>
            <div className={css.btn_arrow_right} />
          </button>
        </div>
      </div>
    );
  }
}
export default EditorWorkspace;
