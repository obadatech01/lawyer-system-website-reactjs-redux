import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import notify from "../../hook/useNotification";

const Sidebar = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user"))
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const logout = () => {
    notify("تم تسجيل الخروج بنجاح", "warn");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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
                <Link to="#">
                  <i className="fa fa-user"></i> الصفحة الشخصية
                </Link>
              </div>
              <div className="control-item">
                <Link to="#">
                  <i className="fa fa-gear"></i> الإعدادات
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
            <li className="current active">
              <Link className="waves-effect" to={"/"}>
                <i className="menu-icon mdi mdi-view-dashboard"></i>
                <span>الرئيسية</span>
              </Link>
            </li>
          </ul>
          <h5 className="title">منطقة العملاء</h5>
          <ul className="menu js__accordion">
            <li>
              <Link className="waves-effect" to={"/clients"}>
                <i className="menu-icon mdi mdi-view-dashboard"></i>
                <span>العملاء</span>
              </Link>
            </li>
          </ul>
          <h5 className="title">منطقة القضايا</h5>
          <ul className="menu js__accordion">
            <li>
              <Link className="waves-effect" to={"/cases"}>
                <i className="menu-icon mdi mdi-desktop-mac"></i>
                <span>القضايا</span>
              </Link>
            </li>
            <li>
              <Link className="waves-effect" to={"/sessions"}>
                <i className="menu-icon mdi mdi-view-dashboard"></i>
                <span>الجلسات</span>
              </Link>
            </li>
            <li>
              <Link className="waves-effect" to={"/payments"}>
                <i className="menu-icon mdi mdi-view-dashboard"></i>
                <span>المدفوعات</span>
              </Link>
            </li>
          </ul>
          <h5 className="title">منطقة المصروفات</h5>
          <ul className="menu js__accordion">
            <li>
              <Link className="waves-effect" to={"/expenses"}>
                <i className="menu-icon mdi mdi-view-dashboard"></i>
                <span>المصروفات</span>
              </Link>
            </li>
          </ul>
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
                  <Link to={"#"}>تغيير كلمة المرور</Link>
                </li>
                <li>
                  <Link to={"#"}>تغيير بيانات البروفايل</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="waves-effect" to={"/users"}>
                <i className="menu-icon mdi mdi-view-dashboard"></i>
                <span>المستخدمون</span>
              </Link>
            </li>
            <li>
              <Link className="waves-effect" to={"/permissions"}>
                <i className="menu-icon mdi mdi-view-dashboard"></i>
                <span>الصلاحيات</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <ToastContainer rtl />
    </div>
  );
};

export default Sidebar;
