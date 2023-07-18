import React from "react";
import { Link } from "react-router-dom";
import ForgetPasswordHook from "../../hook/auth/forget-password-hook";
import { ToastContainer } from "react-bootstrap";

const ForgetPasswordPage = () => {
  const [onChangeEmail, email, onSubmit] = ForgetPasswordHook();

  return (
    <div id="single-wrapper">
      <form action="#" className="frm-single">
        <div className="inside">
          <div className="title">
            برنامج <strong>المحامي</strong>
          </div>
          {/* /.title */}
          <div className="frm-title">إعادة تعيين كلمة السر</div>
          {/* /.frm-title */}
          <p className="text-center">
            أدخل عنوان بريدك الإلكتروني وسنرسل لك بريدًا إلكترونيًا يحتوي على
            رمز لإعادة تعيين كلمة مرورك.
          </p>
          <div className="frm-input">
            <input
              type="email"
              value={email}
              onChange={onChangeEmail}
              placeholder="أدخل بريدك الإلكتروني"
              className="frm-inp"
            />
            <i className="fa fa-envelope frm-ico" />
          </div>
          {/* /.frm-input */}
          <button type="submit" onClick={onSubmit} className="frm-submit">
            أرسل الكود
            <i className="fa fa-arrow-circle-right" />
          </button>
          <Link to={"/login"} className="a-link">
            <i className="fa fa-sign-in" />
            هل تذكرت كلمة السر؟ صفحة تسجيل الدخول.
          </Link>
          <div className="frm-footer">جميع الحقوق محفوظة لدى جامعة االأزهر - غزة</div>
          {/* /.footer */}
        </div>
        {/* .inside */}
      </form>
      {/* /.frm-single */}
      <ToastContainer rtl="true" />
    </div>
  );
};

export default ForgetPasswordPage;
