import React from 'react';

const Navbar = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="fixed-navbar">
        <div className="pull-left">
          <button
            type="button"
            className="menu-mobile-button glyphicon glyphicon-menu-hamburger js__menu_mobile"
          ></button>
          <h1 className="page-title">برنامج المحامي أهلًا وسهلاً بك : {currentUser.name}</h1>
        </div>
      </div>
  )
}

export default Navbar;