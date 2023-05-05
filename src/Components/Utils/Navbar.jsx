import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed-navbar">
        <div className="pull-left">
          <button
            type="button"
            className="menu-mobile-button glyphicon glyphicon-menu-hamburger js__menu_mobile"
          ></button>
          <h1 className="page-title">الرئيسية</h1>
        </div>
        <div className="pull-right">
          <div className="ico-item">
            <Link
              to="#"
              className="ico-item mdi mdi-magnify js__toggle_open"
              data-target="#searchform-header"
            ></Link>
            <form
              action="#"
              id="searchform-header"
              className="searchform js__toggle"
            >
              <input
                type="search"
                placeholder="Search..."
                className="input-search"
              />
              <button
                className="mdi mdi-magnify button-search"
                type="submit"
              ></button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Navbar;