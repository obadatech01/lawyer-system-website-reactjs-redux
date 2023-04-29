import React from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import Table from "react-bootstrap/esm/Table";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AllCaseComponentHook from "../../hook/case/all-case-component-hook";
import notify from "../../hook/useNotification";
import { deleteCase } from "../../redux/actions/caseAction";
import Pagination from "../Utils/Pagination";

const AllCasesComponent = ({ data, loading, pageCount }) => {
  const [getPage, handleLimitChange] = AllCaseComponentHook();
  const dispatch = useDispatch();
  const handelDelete = async (id) => {
    await dispatch(deleteCase(id));
    notify("تم حذف العميل بنجاح", "success");
    window.location.reload();
  };
  console.log(data);

  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <h4 className="box-title">عرض جميع القضايا</h4>
              <div className="h4">
                {"عرض "}
                <select
                  name="limitation"
                  id="lang"
                  className="select px-2"
                  onChange={handleLimitChange}
                >
                  <option value="3">3</option>
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
                to={"/cases-add"}
                className="h5 btn btn-primary btn-rounded btn-icon btn-icon-right btn-xs waves-effect waves-light"
              >
                <i className="ico fa fa-plus"></i> إضافة قضية جديدة
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
                <th className="h5 text-center">رقم القضية</th>
                <th className="h5 text-center"> عنوان القضية</th>
                <th className="h5 text-center"> اسم المحكمة </th>
                <th className="h5 text-center"> اسم القاضي </th>
                <th className="h5 text-center">اسم العميل</th>
                <th className="h5 text-center"> اجمالي المبلغ</th>
                <th className="h5 text-center"> المتبقي</th>
                <th className="h5 text-center"> حالة القضية</th>
                <th className="h5 text-center"> أكشن</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th className="h5 text-center">رقم القضية</th>
                <th className="h5 text-center"> عنوان القضية</th>
                <th className="h5 text-center"> اسم المحكمة </th>
                <th className="h5 text-center"> اسم القاضي </th>
                <th className="h5 text-center">اسم العميل</th>
                <th className="h5 text-center"> اجمالي المبلغ</th>
                <th className="h5 text-center"> المتبقي</th>
                <th className="h5 text-center"> حالة القضية</th>
                <th className="h5 text-center"> أكشن</th>
              </tr>
            </tfoot>
            <tbody>
              {loading === false ? (
                data.length > 0 ? (
                  data.map((cases) => (
                    <tr key={cases._id}>
                      <td className="h5 text-center">{cases.courtCaseNumber}</td>
                      <td className="h5 text-center">{cases.title}</td>
                      <td className="h5 text-center">{cases.courtName}</td>
                      <td className="h5 text-center">
                        {cases.judgeName}
                      </td>
                      <td className="h5 text-center">{cases.client.name}</td>
                      <td className="h5 text-center">{"1500"}</td>
                      <td className="h5 text-center">{"700"}</td>
                      <td className="h5 text-center"><span className="label label-danger">{cases.status}</span></td>
                      <td className="h5 text-center">
                        <Link
                          to={`/cases-profile/${cases._id}`}
                          className="mx-3 btn btn-primary btn-icon btn-icon-right btn-xs waves-effect waves-light"
                        >
                          <i className="ico fa fa-eye"></i> عرض
                        </Link>
                        <Link
                          to={`/cases-edit/${cases._id}`}
                          className="mx-3 btn btn-success btn-icon btn-icon-right btn-xs waves-effect waves-light"
                        >
                          <i className="ico fa fa-edit"></i> تعديل
                        </Link>
                        <button
                          onClick={() => handelDelete(cases._id)}
                          className="mx-3 btn btn-danger btn-icon btn-icon-right btn-xs waves-effect waves-light"
                        >
                          <i className="ico fa fa-trash"></i> حذف
                        </button>
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
                )
              ) : (
                <tr>
                  <td valign="top" colSpan="9" className="h4 text-center p-3">
                    جاري التحميل{" "}
                    <Spinner animation="border" variant="primary" />
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
          {pageCount > 1 ? (
            <Pagination pageCount={pageCount} onPress={getPage} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AllCasesComponent;
