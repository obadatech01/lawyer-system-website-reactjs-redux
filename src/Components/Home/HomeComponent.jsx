import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = ({ cases, loadingCase, sessions, loadingSession }) => {
  // console.log(cases);
  return (
    <>
      <div className="row small-spacing">
        <div className="col-lg-3 col-md-6 col-xs-12">
          <Link to={"/clients"}>
            <div className="box-content bg-success text-white">
              <div className="statistics-box with-icon">
                <i className="ico small fa fa-diamond"></i>
                <p className="text text-white h3">العملاء</p>
                <h2 className="counter">72943</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
          <Link to={"/cases"}>
            <div className="box-content bg-primary text-white">
              <div className="statistics-box with-icon">
                <i className="ico small fa fa-diamond"></i>
                <p className="text text-white h3">القضايا</p>
                <h2 className="counter">72943</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
          <Link to={"/sessions"}>
            <div className="box-content bg-danger text-white">
              <div className="statistics-box with-icon">
                <i className="ico small fa fa-diamond"></i>
                <p className="text text-white h3">الجلسات</p>
                <h2 className="counter">72943</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
          <div className="box-content bg-warning text-white">
            <div className="statistics-box with-icon">
              <i className="ico small fa fa-diamond"></i>
              <p className="text text-white h3">إجمالي العقود</p>
              <h2 className="counter">72943</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
          <Link to={"/payments"}>
            <div className="box-content bg-info text-white">
              <div className="statistics-box with-icon">
                <i className="ico small fa fa-diamond"></i>
                <p className="text text-white h3">إجمالي المدفوع</p>
                <h2 className="counter">72943</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
          <div className="box-content bg-violet text-white">
            <div className="statistics-box with-icon">
              <i className="ico small fa fa-diamond"></i>
              <p className="text text-white h3">إجمالي المتبقي</p>
              <h2 className="counter">72943</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
          <Link to={"/expenses"}>
            <div className="box-content bg-custom text-white">
              <div className="statistics-box with-icon">
                <i className="ico small fa fa-diamond"></i>
                <p className="text text-white h3">إجمالي المصروفات</p>
                <h2 className="counter">72943</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
          <div className="box-content bg-orange text-white">
            <div className="statistics-box with-icon">
              <i className="ico small fa fa-diamond"></i>
              <p className="text text-white h3">المصروفات المتبقية</p>
              <h2 className="counter">72943</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="row small-spacing">
        <div className="col-lg-6 col-xs-12">
          <div className="box-content">
            <h4 className="box-title">آخر القضايا</h4>
            <div className="table-responsive table-purchases">
              <table className="table table-striped margin-bottom-10">
                <thead>
                  <tr>
                    <th style={{ width: "30%" }}>عنوان القضية</th>
                    <th>اسم المحكمة</th>
                    <th>اسم القاضي</th>
                    <th>رقم القضية</th>
                    <th>حالة القضية</th>
                    <th style={{ width: "5%" }}>أكشن</th>
                  </tr>
                </thead>
                <tbody>
                  {loadingCase ? null : cases.length > 0 ? (
                    cases.map((item) => (
                      <tr>
                        <td>{item.title}</td>
                        <td>{item.courtName}</td>
                        <td>{item.judgeName}</td>
                        <td>{item.courtCaseNumber}</td>
                        <td className="text-danger">{item.status}</td>
                        <td>
                          <Link to={`/cases/${item._id}`}>
                            <i className="fa fa-plus-circle"></i>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <td
                      valign="top"
                      colSpan="9"
                      className="h4 text-center text-danger p-3"
                    >
                      لا يوجد قضايا بعد!{" "}
                    </td>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xs-12">
          <div className="box-content">
            <h4 className="box-title">آخر الجلسات</h4>
            <div className="table-responsive table-purchases">
              <table className="table table-striped margin-bottom-10">
                <thead>
                  <tr>
                    <th>رقم القضية</th>
                    <th style={{ width: "30%" }}>عنوان القضية</th>
                    <th>عنوان الجلسة</th>
                    <th>تاريخ الجلسة</th>
                    <th>محامي الجلسة</th>
                    <th style={{ width: "5%" }}>أكشن</th>
                  </tr>
                </thead>
                <tbody>
                  {loadingSession ? null : sessions.length > 0 ? (
                    sessions.map((item) => (
                      <tr>
                        <td>{item.case.courtCaseNumber}</td>
                        <td>{item.case.title}</td>
                        <td>{item.title}</td>
                        <td>{item.sessionDate}</td>
                        <td className="text-danger">{item.lawyerName}</td>
                        <td>
                          <Link to={`/cases/${item._id}`}>
                            <i className="fa fa-plus-circle"></i>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <td
                      valign="top"
                      colSpan="9"
                      className="h4 text-center text-danger p-3"
                    >
                      لا توجد جلسات بعد!{" "}
                    </td>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
