import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

const HomeComponent = ({ data, loading }) => {
  // console.log(data);
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center h4">
          {"جاري التحميل"}
          <Spinner></Spinner>
        </div>
      ) : (
        <>
          <div className="row small-spacing">
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="box-content bg-success text-white">
                <div className="statistics-box with-icon">
                  <i className="ico small fa fa-diamond"></i>
                  <p className="text text-white h3">{data.clients.name}</p>
                  <h2 className="counter">{data.clients.count}</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="box-content bg-primary text-white">
                <div className="statistics-box with-icon">
                  <i className="ico small fa fa-diamond"></i>
                  <p className="text text-white h3">
                    {data.casesCompleted.name}
                  </p>
                  <h2 className="counter">{data.casesCompleted.count}</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="box-content bg-danger text-white">
                <div className="statistics-box with-icon">
                  <i className="ico small fa fa-diamond"></i>
                  <p className="text text-white h3">
                    {data.casesNotCompleted.name}
                  </p>
                  <h2 className="counter">{data.casesNotCompleted.count}</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="box-content bg-warning text-white">
                <div className="statistics-box with-icon">
                  <i className="ico small fa fa-diamond"></i>
                  <p className="text text-white h3">{data.sessions.name}</p>
                  <h2 className="counter">{data.sessions.count}</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="box-content bg-info text-white">
                <div className="statistics-box with-icon">
                  <i className="ico small fa fa-diamond"></i>
                  <p className="text text-white h3">{data.payments.name}</p>
                  <h2 className="counter">{data.payments.count}</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="box-content bg-violet text-white">
                <div className="statistics-box with-icon">
                  <i className="ico small fa fa-diamond"></i>
                  <p className="text text-white h3">
                    {data.paymentsRemaining.name}
                  </p>
                  <h2 className="counter">{data.paymentsRemaining.count}</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="box-content bg-custom text-white">
                <div className="statistics-box with-icon">
                  <i className="ico small fa fa-diamond"></i>
                  <p className="text text-white h3">{data.expenses.name}</p>
                  <h2 className="counter">{data.expenses.count}</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="box-content bg-orange text-white">
                <div className="statistics-box with-icon">
                  <i className="ico small fa fa-diamond"></i>
                  <p className="text text-white h3">
                    {data.expensesRemaining.name}
                  </p>
                  <h2 className="counter">{data.expensesRemaining.count}</h2>
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
                      {data.lastCases.length > 0 ? (
                        data.lastCases.map((item) => (
                          <tr key={item._id}>
                            <td>{item.title}</td>
                            <td>{item.courtName}</td>
                            <td>{item.judgeName}</td>
                            <td>{item.courtCaseNumber}</td>
                            <td className="text-danger">{item.status}</td>
                            <td>
                              <Link to={`/cases-profile/${item._id}`}>
                                <i className="fa fa-plus-circle"></i>
                              </Link>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            valign="top"
                            colSpan="9"
                            className="h4 text-center text-danger p-3"
                          >
                            لا يوجد قضايا بعد!{" "}
                          </td>
                        </tr>
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
                      {data.lastSessions.length > 0 ? (
                        data.lastSessions.map((item) => (
                          <tr key={item._id}>
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
                        <tr>
                          <td
                            valign="top"
                            colSpan="9"
                            className="h4 text-center text-danger p-3"
                          >
                            لا توجد جلسات بعد!{" "}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomeComponent;
