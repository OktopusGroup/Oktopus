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

// -----------------------------------------------------------------------------
class PlatformHeader1 extends React.PureComponent {

  submit = () => {
    /* intentionally empty for now */
  }

  render() {
    return (
      <div className={css.wrapper}>
        <div className={css.header}>
          <Link to="/"><img src={userlogo} className={css.userlogo} alt="Oktopus" /></Link>
          <div className={css.header_links}>
            <span />
            <span />
          </div>
          <div
            className={css.profile_img}>UN
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
          <Link to="/" onclick="myFunction()" className={css.dropbtn}>Category<div className={css.triangle} /></Link>
          
          {/* Would like to use a category add/remove system like this:  
              https://codepen.io/synapse709/pen/JrMRdv     
          */}

          <div id={css.myDropdown} className={css.dropdown_content}>

          </div>

          <Link to="/" onclick="myFunction()" className={css.dropbtn}>Sort<div className={css.triangle} /></Link>
          <div id={css.myDropdown} className={css.dropdown_content}>


          </div>

        </div>
      </div>
    );
  }
}
export default PlatformHeader1;
