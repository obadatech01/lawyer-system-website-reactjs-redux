import React from 'react'
import { Link } from 'react-router-dom';

const HomeComponent = () => {
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
              <p className="text text-white h3">
                المصروفات المتبقية
              </p>
              <h2 className="counter">72943</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="row small-spacing">
        <div className="col-lg-6 col-xs-12">
          <div className="box-content">
            <h4 className="box-title">Purchases</h4>
            <div className="dropdown js__drop_down">
              <Link
                to="#"
                className="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"
              ></Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">Product</Link>
                </li>
                <li>
                  <Link to="#">Another action</Link>
                </li>
                <li>
                  <Link to="#">Something else there</Link>
                </li>
                <li className="split"></li>
                <li>
                  <Link to="#">Separated link</Link>
                </li>
              </ul>
            </div>
            <div className="table-responsive table-purchases">
              <table className="table table-striped margin-bottom-10">
                <thead>
                  <tr>
                    <th style={{ width: "40%" }}>Product</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>State</th>
                    <th style={{ width: "5%" }}></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Amaza Themes</td>
                    <td>$71</td>
                    <td>Nov 12,2016</td>
                    <td className="text-success">Completed</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Macbook</td>
                    <td>$142</td>
                    <td>Nov 10,2016</td>
                    <td className="text-danger">Cancelled</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Samsung TV</td>
                    <td>$200</td>
                    <td>Nov 01,2016</td>
                    <td className="text-warning">Pending</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Ninja Admin</td>
                    <td>$200</td>
                    <td>Oct 28,2016</td>
                    <td className="text-warning">Pending</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Galaxy Note 5</td>
                    <td>$200</td>
                    <td>Oct 28,2016</td>
                    <td className="text-success">Completed</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>CleanUp Themes</td>
                    <td>$71</td>
                    <td>Oct 22,2016</td>
                    <td className="text-success">Completed</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Facebook WP Plugin</td>
                    <td>$10</td>
                    <td>Oct 15,2016</td>
                    <td className="text-success">Completed</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Iphone 7</td>
                    <td>$100</td>
                    <td>Oct 12,2016</td>
                    <td className="text-warning">Pending</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Nova House</td>
                    <td>$100</td>
                    <td>Oct 12,2016</td>
                    <td className="text-warning">Pending</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Repair Cars</td>
                    <td>$35</td>
                    <td>Oct 12,2016</td>
                    <td className="text-warning">Pending</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xs-12">
          <div className="box-content">
            <h4 className="box-title">Purchases</h4>
            <div className="dropdown js__drop_down">
              <Link
                to="#"
                className="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"
              ></Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">Product</Link>
                </li>
                <li>
                  <Link to="#">Another action</Link>
                </li>
                <li>
                  <Link to="#">Something else there</Link>
                </li>
                <li className="split"></li>
                <li>
                  <Link to="#">Separated link</Link>
                </li>
              </ul>
            </div>
            <div className="table-responsive table-purchases">
              <table className="table table-striped margin-bottom-10">
                <thead>
                  <tr>
                    <th style={{ width: "40%" }}>Product</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>State</th>
                    <th style={{ width: "5%" }}></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Amaza Themes</td>
                    <td>$71</td>
                    <td>Nov 12,2016</td>
                    <td className="text-success">Completed</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Macbook</td>
                    <td>$142</td>
                    <td>Nov 10,2016</td>
                    <td className="text-danger">Cancelled</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Samsung TV</td>
                    <td>$200</td>
                    <td>Nov 01,2016</td>
                    <td className="text-warning">Pending</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Ninja Admin</td>
                    <td>$200</td>
                    <td>Oct 28,2016</td>
                    <td className="text-warning">Pending</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Galaxy Note 5</td>
                    <td>$200</td>
                    <td>Oct 28,2016</td>
                    <td className="text-success">Completed</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>CleanUp Themes</td>
                    <td>$71</td>
                    <td>Oct 22,2016</td>
                    <td className="text-success">Completed</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Facebook WP Plugin</td>
                    <td>$10</td>
                    <td>Oct 15,2016</td>
                    <td className="text-success">Completed</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Iphone 7</td>
                    <td>$100</td>
                    <td>Oct 12,2016</td>
                    <td className="text-warning">Pending</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Nova House</td>
                    <td>$100</td>
                    <td>Oct 12,2016</td>
                    <td className="text-warning">Pending</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Repair Cars</td>
                    <td>$35</td>
                    <td>Oct 12,2016</td>
                    <td className="text-warning">Pending</td>
                    <td>
                      <Link to="#">
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeComponent;