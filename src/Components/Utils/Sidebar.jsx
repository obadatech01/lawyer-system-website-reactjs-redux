import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import notify from "../../hook/useNotification";
import Auth from "../../Auth";
import CurrentLocation from "../../hook/currentLocation";

const Sidebar = () => {
  const [user, homeLocation, clientLocation, caseLocation, sessionLocation, documentLocation, paymentLocation, expenseLocation, userLocation] = CurrentLocation();

  const logout = () => {
    notify("تم تسجيل الخروج بنجاح", "warn");
    setTimeout(() => {
      window.location.href = "/login";
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }, 1000);
  };
  
  return (
    <div className="main-menu">
      <header className="header">
        <Link to={"/"} className="logo">
          <i className="ico mdi mdi-cube-outline"></i>
          <b>برنامج المحامي</b>
        </Link>
        <button
          type="button"
          className="button-close fa fa-times js__menu_close"
        ></button>
        <div className="user">
          <Link to="#" className="avatar">
            <img src={user?.profileImg} alt={user?.name} />
            <span className="status online"></span>
          </Link>
          <h5 className="name">
            <Link to="#">{user?.name}</Link>
          </h5>
          <h5 className="position">{user?.role}</h5>
          <div className="control-wrap js__drop_down">
            <i className="fa fa-caret-down js__drop_down_button"></i>
            <div className="control-list">
              <div className="control-item">
                <Link to="/profile-edit">
                  <i className="fa fa-user"></i> تعديل البروفايل
                </Link>
              </div>
              <div className="control-item">
                <Link to="/password-change-me">
                  <i className="fa fa-gear"></i> تغيير كلمة السر
                </Link>
              </div>
              <div className="control-item">
                <Link to={"#"} onClick={logout}>
                  <i className="fa fa-sign-out"></i> تسجيل خروج
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="navigation">
          <ul className="menu js__accordion">
            <li className={homeLocation ? "current active" : ''}>
              <Link className="waves-effect" to={"/"}>
                <i className="menu-icon mdi mdi-view-dashboard"></i>
                <span>الرئيسية</span>
              </Link>
            </li>
          </ul>
          <h5 className="title">منطقة العملاء</h5>
          <ul className="menu js__accordion">
            <li className={clientLocation ? "current active" : ''}>
              <Link className="waves-effect" to={"/clients"}>
                <i className="menu-icon mdi mdi-view-dashboard"></i>
                <span>العملاء</span>
              </Link>
            </li>
          </ul>
          <h5 className="title">منطقة القضايا</h5>
          <ul className="menu js__accordion">
            <li className={caseLocation ? "current active" : ''}>
              <Link className="waves-effect" to={"/cases"}>
                <i className="menu-icon mdi mdi-desktop-mac"></i>
                <span>القضايا</span>
              </Link>
            </li>
            <li className={sessionLocation ? "current active" : ''}>
              <Link className="waves-effect" to={"/sessions"}>
                <i className="menu-icon mdi mdi-view-dashboard"></i>
                <span>الجلسات</span>
              </Link>
            </li>
            <li className={documentLocation ? "current active" : ''}>
              <Link className="waves-effect" to={"/documents"}>
                <i className="menu-icon mdi mdi-view-dashboard"></i>
                <span>الملفات</span>
              </Link>
            </li>
            <li className={paymentLocation ? "current active" : ''}>
              <Link className="waves-effect" to={"/payments"}>
                <i className="menu-icon mdi mdi-view-dashboard"></i>
                <span>المدفوعات</span>
              </Link>
            </li>
          </ul>
          {(Auth.isOwner() || Auth.isAccountant()) && (
            <>
              <h5 className="title">منطقة المصروفات</h5>
              <ul className="menu js__accordion">
                <li className={expenseLocation ? "current active" : ''}>
                  <Link className="waves-effect" to={"/expenses"}>
                    <i className="menu-icon mdi mdi-view-dashboard"></i>
                    <span>المصروفات</span>
                  </Link>
                </li>
              </ul>
            </>
          )}
          <h5 className="title">منطقة الإعدادات</h5>
          <ul className="menu js__accordion">
            <li>
              <Link className="waves-effect parent-item js__control" to="#">
                <i className="menu-icon mdi mdi-desktop-mac"></i>
                <span>الإعدادات</span>
                <span className="menu-arrow fa fa-angle-down"></span>
              </Link>
              <ul className="sub-menu js__content">
                <li>
                  <Link to={"/password-change-me"}>تغيير كلمة المرور</Link>
                </li>
                <li>
                  <Link to={"/profile-edit"}>تعديل البروفايل</Link>
                </li>
              </ul>
            </li>
            {(Auth.isOwner() || Auth.isSecretary()) && (
              <li className={userLocation ? "current active" : ''}>
                <Link className="waves-effect" to={"/users"}>
                  <i className="menu-icon mdi mdi-view-dashboard"></i>
                  <span>المستخدمون</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>

      <ToastContainer rtl />
    </div>
  );
};

export default Sidebar;
