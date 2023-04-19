import React from "react";
import { Link } from "react-router-dom";
import VerifyPasswordHook from "../../hook/auth/verify-password-hook";
import { ToastContainer } from "react-bootstrap";

const VerifyPasswordPage = () => {
  const [code, onChangeCode, onSubmit] = VerifyPasswordHook();

  return (
    <div id="single-wrapper">
      <form action="#" className="frm-single">
        <div className="inside">
          <div className="title">
            برنامج <strong>المحامي</strong>
          </div>
          {/* /.title */}
          <div className="frm-title">مرحبًا بعودتك</div>
          {/* /.frm-title */}
          <Link to={"#"} className="avatar border">
            <img src="assets/images/logo-empty.png" alt="" />
          </Link>
          <p className="text-center">
            أدخل رمز التفعيل الخاص بك للوصول إلى حسابك.
          </p>
          <div className="frm-input">
            <input 
            value={code}
            onChange={onChangeCode}
            type="text" placeholder="أدخل رمز التفعيل الخاص بك المكون من 6 أرقام" className="frm-inp" />
            <i className="fa fa-lock frm-ico" />
          </div>
          {/* /.frm-input */}
          <button onClick={onSubmit} type="submit" className="frm-submit">
            تسجيل دخول
            <i className="fa fa-arrow-circle-right" />
          </button>
          <Link to={"/login"} className="a-link">
            <i className="fa fa-sign-in" />
            ليس انت؟ تسجيل الدخول.
          </Link>
          <div className="frm-footer">obadatech01 © 2023.</div>
          {/* /.footer */}
        </div>
        {/* .inside */}
      </form>
      {/* /.frm-single */}
      <ToastContainer rtl="true" />
    </div>
  );
};

export default VerifyPasswordPage;
