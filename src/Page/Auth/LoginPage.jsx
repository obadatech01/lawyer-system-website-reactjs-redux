import React from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import LoginHook from "../../hook/auth/login-hook";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  const [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    isPress
  ] = LoginHook();

  return (
    <div id="single-wrapper">
      <form action="#" className="frm-single">
        <div className="inside">
          <div className="title">
            برنامج <strong>المحامي</strong>
          </div>
          <div className="frm-title">تسجيل دخول</div>

          <div className="frm-input">
            <input
              value={email}
              onChange={onChangeEmail}
              type="email"
              placeholder="أدخل البريد الإلكتروني"
              autoComplete="true"
              className="frm-inp"
            />
            <i className="fa fa-envelope frm-ico"></i>
          </div>

          <div className="frm-input">
            <input
              value={password}
              onChange={onChangePassword}
              type="password"
              placeholder="أدخل كلمة السر"
              className="frm-inp"
            />
            <i className="fa fa-lock frm-ico"></i>
          </div>

          <div className="clearfix margin-bottom-20">
            <div className="pull-right">
              <Link to={"/forget-password"} className="a-link">
                <i className="fa fa-unlock-alt"></i>هل نسيت كلمة السر؟
              </Link>
            </div>{" "}
            {isPress === true ? (
              loading === true ? (
                <Spinner animation="border" role="status"></Spinner>
              ) : null
            ) : null}
          </div>
          <button type="submit" onClick={onSubmit} className="frm-submit">
            تسجيل دخول<i className="fa fa-arrow-circle-right"></i>
          </button>
          <div className="frm-footer">جميع الحقوق محفوظة لدى جامعة االأزهر - غزة</div>
        </div>
      </form>
      <ToastContainer rtl="true" />
    </div>
  );
};

export default LoginPage;
