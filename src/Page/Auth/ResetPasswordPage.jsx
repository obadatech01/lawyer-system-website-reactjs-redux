import React from 'react';
import ResetPasswordHook from '../../hook/auth/reset-password-hook';
import { ToastContainer } from 'react-bootstrap';

const ResetPasswordPage = () => {
  const [password, confirmPassword, onSubmit, onChangePassword, onChangeConfirmPassword] = ResetPasswordHook();

  return (
    <div id="single-wrapper">
      <form action="#" className="frm-single">
        <div className="inside">
          <div className="title">
            برنامج <strong>المحامي</strong>
          </div>
          {/* /.title */}
          <div className="frm-title">أدخل كلمة السر الجديدة</div>
          {/* /.frm-title */}
          <div className="frm-input">
            <input
            value={password}
            onChange={onChangePassword}
            type="password" placeholder="أدخل كلمة السر الجديدة" className="frm-inp" />
            <i className="fa fa-lock frm-ico" />
          </div>
          <div className="frm-input">
            <input
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            type="password" placeholder="أعد كتابة كلمة السر الجديدة" className="frm-inp" />
            <i className="fa fa-lock frm-ico" />
          </div>
          {/* /.frm-input */}
          <button onClick={onSubmit} type="submit" className="frm-submit">
            حفظ
            <i className="fa fa-arrow-circle-right" />
          </button>
          <div className="frm-footer">جميع الحقوق محفوظة لدى جامعة االأزهر - غزة</div>
          {/* /.footer */}
        </div>
        {/* .inside */}
      </form>
      {/* /.frm-single */}
      <ToastContainer rtl="true" />
    </div>
  )
}

export default ResetPasswordPage;