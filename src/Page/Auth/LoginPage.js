import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
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
              type="email"
              placeholder="أدخل البريد الإلكتروني"
              className="frm-inp"
            />
            <i className="fa fa-envelope frm-ico"></i>
          </div>

          <div className="frm-input">
            <input
              type="password"
              placeholder="أدخل كلمة السر"
              className="frm-inp"
            />
            <i className="fa fa-lock frm-ico"></i>
          </div>

          <div className="clearfix margin-bottom-20">
            <div className="pull-right">
              <Link href="page-recoverpw.html" className="a-link">
                <i className="fa fa-unlock-alt"></i>هل نسيت كلمة السر؟
              </Link>
            </div>
          </div>
          <button type="submit" className="frm-submit">
            تسجيل دخول<i className="fa fa-arrow-circle-right"></i>
          </button>
          <div className="frm-footer">obadatech01 © 2023.</div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
