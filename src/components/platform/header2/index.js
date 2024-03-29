// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import userlogo from 'images/userLogo.svg';
import Tag from 'components/platform/tag';

/* Local */

// Components

// Images

// Styles
import css from './header.scss';




// NOTES
// EVERYTHING BESIDES THE HEADER SHOULD DISAPPEAR UPON SCROLLING DOWN 


// -----------------------------------------------------------------------------
class PlatformHeader2 extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now */
  }

  render() {
    return (
      <div className={css.wrapper}>
        <div className={css.header}>
          <div className={css.align_logo}>
            <Link to="/"><img src={userlogo} className={css.userlogo} alt="Oktopus" /></Link>
          </div>
        </div>

        <div className={css.links_bar}>
          <div className={css.links}>
            <Link to="/community" className={css.link}>Community</Link>
            <Link to="/users" className={css.link}>Users</Link>
          </div>
          <div className={css.profile_img}>UN
            {/*
            onMouseEnter={this.showPlatformAccountDropdown}
            onMouseLeave={this.hidePlatformAccountDropdown} />
              <Link
            to="/accountPage"
            className={css.profile_img}
            onMouseEnter={this.showPlatformAccountDropdown} />
          <AccountPlatformDropDown /> 
            */}
          </div>
        </div>

        <div className={css.sub_wrapper}>
          <div className={css.tagBar}>
            <div className={css.tags}>
              <Tag />
              <Tag />
              <Tag />
            </div>
            <button className={css.reset} type="button">
              <span className={css.sthGroup}>
                <span className={css.sth}><i class="fa fa-times" aria-hidden="true"></i></span>
                <span className={css.sath}>&nbsp;&nbsp;Reset tags</span>
              </span>
            </button>
          </div>
          <div className={css.searchBar}>
            <form className={css.search_form}>
              <div className={css.search_icon}>
                <div class="fa fa-search" aria-hidden="true" /> 
              </div>
              <input type="search" id="searchBar" placeholder="Add search tags" className={css.search_input} />


              <div className={css.search_option} />
            </form>
          </div>
          <div className={css.dropdownBar}>

            {/* Would like to use a category add/remove system like this:  
                https://codepen.io/synapse709/pen/JrMRdv     
            */}
            <Link to="/" onclick="myFunction()" className={css.dropbtn}>Category<div className={css.triangle} /></Link>
            <Link to="/" onclick="myFunction()" className={css.dropbtn}>Sort<div className={css.triangle} /></Link>

          </div>
        </div>
      </div>
    );
  }
}
export default PlatformHeader2;
