import React from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import Table from "react-bootstrap/esm/Table";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Auth from "../../Auth";
import notify from "../../hook/useNotification";
import { deleteSession } from "../../redux/actions/sessionAction";
import Pagination from "../Utils/Pagination";
import ShowFormatDate from "../Utils/ShowFormatDate";

const AllSessionsComponent = ({
  data,
  loading,
  pageCount,
  limit,
  search,
  getPage,
  handleLimitChange,
  handleSearchChange,
}) => {
  const dispatch = useDispatch();
  const handelDelete = async (id) => {
    await dispatch(deleteSession(id));
    notify("تم الحذف بنجاح", "success");
    window.location.reload();
  };

  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <h4 className="box-title">عرض جميع الجلسات</h4>
              <div className="h4">
                {"عرض "}
                <select
                  name="limitation"
                  id="lang"
                  className="select px-2 "
                  value={limit}
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
              {(Auth.isOwner() || Auth.isLawyer() || Auth.isSecretary()) && (
                <Link
                  to={"/sessions-add"}
                  className="h5 btn btn-primary btn-rounded btn-icon btn-icon-right btn-xs waves-effect waves-light"
                >
                  <i className="ico fa fa-plus"></i> إضافة جلسة
                </Link>
              )}
              <input
                type="search"
                className="form-control input-sm my-3"
                placeholder="ابحث ..."
                value={search}
                onChange={handleSearchChange}
                aria-controls="example"
              />
            </div>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="h5 text-center">عنوان القضية</th>
                <th className="h5 text-center">عنوان الجلسة</th>
                <th className="h5 text-center">تاريخ الجلسة</th>
                <th className="h5 text-center"> محامي الجلسة </th>
                <th className="h5 text-center"> أضيف بواسطة</th>
                <th className="h5 text-center"> الملاحظات</th>
                <th className="h5 text-center"> أكشن</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th className="h5 text-center">عنوان القضية</th>
                <th className="h5 text-center">عنوان الجلسة</th>
                <th className="h5 text-center">تاريخ الجلسة</th>
                <th className="h5 text-center"> محامي الجلسة </th>
                <th className="h5 text-center"> أضيف بواسطة</th>
                <th className="h5 text-center"> الملاحظات</th>
                <th className="h5 text-center"> أكشن</th>
              </tr>
            </tfoot>
            <tbody>
              {loading === false ? (
                data.length > 0 ? (
                  data.map((session) => (
                    <tr key={session._id}>
                      <td className="h5 text-center">{session.case?.title}</td>
                      <td className="h5 text-center">{session.title}</td>
                      <td className="h5 text-center">
                        {ShowFormatDate(session.sessionDate)}
                      </td>
                      <td className="h5 text-center">{session.lawyerName}</td>
                      <td className="h5 text-center">
                        {session.createdBy.name}
                      </td>
                      <td className="h5 text-center">
                        {session.notes}
                      </td>
                      <td className="h5 text-center">
                        {(Auth.isOwner() ||
                          Auth.isLawyer() ||
                          Auth.isSecretary()) && (
                          <Link
                            to={`/sessions-edit/${session._id}`}
                            className="mx-3 btn btn-success btn-icon btn-icon-right btn-xs waves-effect waves-light"
                          >
                            <i className="ico fa fa-edit"></i> تعديل
                          </Link>
                        )}
                        {Auth.isOwner() && (
                          <button
                            onClick={() => handelDelete(session._id)}
                            className="mx-3 btn btn-danger btn-icon btn-icon-right btn-xs waves-effect waves-light"
                          >
                            <i className="ico fa fa-trash"></i> حذف
                          </button>
                        )}
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

export default AllSessionsComponent;
