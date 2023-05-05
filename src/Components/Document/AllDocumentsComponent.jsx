import React from "react";
import Table from "react-bootstrap/esm/Table";
import { Link } from "react-router-dom";
import Pagination from "../Utils/Pagination";

const AllDocumentsComponent = () => {
  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <h4 className="box-title">عرض جميع الملفات</h4>
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
                to={"/documents-add"}
                className="h5 btn btn-primary btn-rounded btn-icon btn-icon-right btn-xs waves-effect waves-light"
              >
                <i className="ico fa fa-plus"></i> إضافة ملفات
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
                <th className="h5 text-center">اسم الملف </th>
                <th className="h5 text-center"> عنوان القضية</th>
                <th className="h5 text-center"> أضيف بواسطة </th>
                <th className="h5 text-center"> الملف</th>
                <th className="h5 text-center"> أكشن</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th className="h5 text-center">#</th>
                <th className="h5 text-center">اسم الملف </th>
                <th className="h5 text-center"> عنوان القضية</th>
                <th className="h5 text-center"> أضيف بواسطة </th>
                <th className="h5 text-center"> الملف</th>
                <th className="h5 text-center"> أكشن</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <th className="h5 text-center">1</th>
                <td className="h5 text-center text-muted"> دفعة أولى</td>
                <td className="h5 text-center text-muted">كاش</td>
                <td className="h5 text-center text-muted">500</td>
                <td className="h5 text-center text-muted">عبادة أبو مسامح</td>
                <td className="h5 text-center text-muted d-flex justify-content-evenly">
                  <Link
                    to={"/documents-edit"}
                    className="h5 text-center btn btn-primary btn-icon btn-icon-right btn-xs waves-effect waves-light"
                  >
                    <i className="ico fa fa-eye"></i> عرض
                  </Link>
                  <Link
                    to={"/documents-edit"}
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
                <th className="h5 text-center">2</th>
                <td className="h5 text-center text-muted"> دفعة أولى</td>
                <td className="h5 text-center text-muted">كاش</td>
                <td className="h5 text-center text-muted">500</td>
                <td className="h5 text-center text-muted">عبادة أبو مسامح</td>
                <td className="h5 text-center text-muted d-flex justify-content-evenly">
                  <Link
                    to={"/documents-edit"}
                    className="h5 text-center btn btn-primary btn-icon btn-icon-right btn-xs waves-effect waves-light"
                  >
                    <i className="ico fa fa-eye"></i> عرض
                  </Link>
                  <Link
                    to={"/documents-edit"}
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
                <th className="h5 text-center">3</th>
                <td className="h5 text-center text-muted"> دفعة أولى</td>
                <td className="h5 text-center text-muted">كاش</td>
                <td className="h5 text-center text-muted">500</td>
                <td className="h5 text-center text-muted">عبادة أبو مسامح</td>
                <td className="h5 text-center text-muted d-flex justify-content-evenly">
                  <Link
                    to={"/documents-edit"}
                    className="h5 text-center btn btn-primary btn-icon btn-icon-right btn-xs waves-effect waves-light"
                  >
                    <i className="ico fa fa-eye"></i> عرض
                  </Link>
                  <Link
                    to={"/documents-edit"}
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
                <th className="h5 text-center">4</th>
                <td className="h5 text-center text-muted"> دفعة أولى</td>
                <td className="h5 text-center text-muted">كاش</td>
                <td className="h5 text-center text-muted">500</td>
                <td className="h5 text-center text-muted">عبادة أبو مسامح</td>
                <td className="h5 text-center text-muted d-flex justify-content-evenly">
                  <Link
                    to={"/documents-edit"}
                    className="h5 text-center btn btn-primary btn-icon btn-icon-right btn-xs waves-effect waves-light"
                  >
                    <i className="ico fa fa-eye"></i> عرض
                  </Link>
                  <Link
                    to={"/documents-edit"}
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

export default AllDocumentsComponent;
