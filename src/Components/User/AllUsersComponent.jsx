import React from "react";
import Pagination from "../Utils/Pagination";
import Table from "react-bootstrap/esm/Table";
import { Link } from "react-router-dom";

const AllUsersComponent = () => {
  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <h4 className="box-title">عرض جميع العملاء</h4>
              <div className="h4">
                {"عرض "}
                <select name="limitation" id="lang" className="select px-2 ">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
                {" في الصفحة"}
              </div>
            </div>
            <div className="d-flex flex-column">
              <Link
                to={"/users-add"}
                className="h5 btn btn-primary btn-rounded btn-icon btn-icon-right btn-xs waves-effect waves-light"
              >
                <i className="ico fa fa-plus"></i> إضافة عميل
              </Link>
              <input
                type="search"
                className="form-control input-sm my-3"
                placeholder="ابحث ..."
                aria-controls="example"
              />
            </div>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="h5 text-center">#</th>
                <th className="h5 text-center">اسم العميل </th>
                <th className="h5 text-center"> الهاتف</th>
                <th className="h5 text-center"> الجنسية </th>
                <th className="h5 text-center"> رقم الهوية </th>
                <th className="h5 text-center">عدد القضايا </th>
                <th className="h5 text-center"> اجمالي المبلغ</th>
                <th className="h5 text-center"> المدفوع</th>
                <th className="h5 text-center"> المتبقي</th>
                <th className="h5 text-center"> أكشن</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th className="h5 text-center">#</th>
                <th className="h5 text-center">اسم العميل </th>
                <th className="h5 text-center"> الهاتف</th>
                <th className="h5 text-center"> الجنسية </th>
                <th className="h5 text-center"> رقم الهوية </th>
                <th className="h5 text-center">عدد القضايا </th>
                <th className="h5 text-center"> اجمالي المبلغ</th>
                <th className="h5 text-center"> المدفوع</th>
                <th className="h5 text-center"> المتبقي</th>
                <th className="h5 text-center"> أكشن</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <th className="h5 text-center">1</th>
                <td className="h5 text-center text-muted"> محمود خالد </td>
                <td className="h5 text-center text-muted">1234567890</td>
                <td className="h5 text-center text-muted">فلسطيني</td>
                <td className="h5 text-center text-muted">123456789</td>
                <td className="h5 text-center text-muted">1</td>
                <td className="h5 text-center text-muted">1500</td>
                <td className="h5 text-center text-muted">700</td>
                <td className="h5 text-center text-muted">800</td>
                <td
                  className="h5 text-center text-muted d-flex justify-content-evenly"
                >
                  <Link
                    to={"/users-edit"}
                    className="h5 text-center btn btn-primary btn-icon btn-icon-right btn-xs waves-effect waves-light"
                  >
                    <i className="ico fa fa-eye"></i> عرض
                  </Link>
                  <Link
                    to={"/users-edit"}
                    className="h5 text-center btn btn-success btn-icon btn-icon-right btn-xs waves-effect waves-light"
                  >
                    <i className="ico fa fa-edit"></i> تعديل
                  </Link>
                  <button
                    type="button"
                    className="h5 text-center btn btn-danger btn-icon btn-icon-right btn-xs waves-effect waves-light"
                  >
                    <i className="ico fa fa-trash"></i> حذف
                  </button>
                </td>
              </tr>              
              <tr>
                <th className="h5 text-center">1</th>
                <td className="h5 text-center text-muted"> محمود خالد </td>
                <td className="h5 text-center text-muted">1234567890</td>
                <td className="h5 text-center text-muted">فلسطيني</td>
                <td className="h5 text-center text-muted">123456789</td>
                <td className="h5 text-center text-muted">1</td>
                <td className="h5 text-center text-muted">1500</td>
                <td className="h5 text-center text-muted">700</td>
                <td className="h5 text-center text-muted">800</td>
                <td
                  className="h5 text-center text-muted d-flex justify-content-evenly"
                >
                  <Link
                    to={"/users-edit"}
                    className="h5 text-center btn btn-primary btn-icon btn-icon-right btn-xs waves-effect waves-light"
                  >
                    <i className="ico fa fa-eye"></i> عرض
                  </Link>
                  <Link
                    to={"/users-edit"}
                    className="h5 text-center btn btn-success btn-icon btn-icon-right btn-xs waves-effect waves-light"
                  >
                    <i className="ico fa fa-edit"></i> تعديل
                  </Link>
                  <button
                    type="button"
                    className="h5 text-center btn btn-danger btn-icon btn-icon-right btn-xs waves-effect waves-light"
                  >
                    <i className="ico fa fa-trash"></i> حذف
                  </button>
                </td>
              </tr>              
              <tr>
                <th className="h5 text-center">1</th>
                <td className="h5 text-center text-muted"> محمود خالد </td>
                <td className="h5 text-center text-muted">1234567890</td>
                <td className="h5 text-center text-muted">فلسطيني</td>
                <td className="h5 text-center text-muted">123456789</td>
                <td className="h5 text-center text-muted">1</td>
                <td className="h5 text-center text-muted">1500</td>
                <td className="h5 text-center text-muted">700</td>
                <td className="h5 text-center text-muted">800</td>
                <td
                  className="h5 text-center text-muted d-flex justify-content-evenly"
                >
                  <Link
                    to={"/users-edit"}
                    className="h5 text-center btn btn-primary btn-icon btn-icon-right btn-xs waves-effect waves-light"
                  >
                    <i className="ico fa fa-eye"></i> عرض
                  </Link>
                  <Link
                    to={"/users-edit"}
                    className="h5 text-center btn btn-success btn-icon btn-icon-right btn-xs waves-effect waves-light"
                  >
                    <i className="ico fa fa-edit"></i> تعديل
                  </Link>
                  <button
                    type="button"
                    className="h5 text-center btn btn-danger btn-icon btn-icon-right btn-xs waves-effect waves-light"
                  >
                    <i className="ico fa fa-trash"></i> حذف
                  </button>
                </td>
              </tr>              
              <tr>
                <th className="h5 text-center">1</th>
                <td className="h5 text-center text-muted"> محمود خالد </td>
                <td className="h5 text-center text-muted">1234567890</td>
                <td className="h5 text-center text-muted">فلسطيني</td>
                <td className="h5 text-center text-muted">123456789</td>
                <td className="h5 text-center text-muted">1</td>
                <td className="h5 text-center text-muted">1500</td>
                <td className="h5 text-center text-muted">700</td>
                <td className="h5 text-center text-muted">800</td>
                <td
                  className="h5 text-center text-muted d-flex justify-content-evenly"
                >
                  <Link
                    to={"/users-edit"}
                    className="h5 text-center btn btn-primary btn-icon btn-icon-right btn-xs waves-effect waves-light"
                  >
                    <i className="ico fa fa-eye"></i> عرض
                  </Link>
                  <Link
                    to={"/users-edit"}
                    className="h5 text-center btn btn-success btn-icon btn-icon-right btn-xs waves-effect waves-light"
                  >
                    <i className="ico fa fa-edit"></i> تعديل
                  </Link>
                  <button
                    type="button"
                    className="h5 text-center btn btn-danger btn-icon btn-icon-right btn-xs waves-effect waves-light"
                  >
                    <i className="ico fa fa-trash"></i> حذف
                  </button>
                </td>
              </tr>              
            </tbody>
          </Table>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default AllUsersComponent;
