import React from "react";
import Pagination from "../Utils/Pagination";
import Table from "react-bootstrap/esm/Table";
import { Link } from "react-router-dom";
import { deleteUser } from "../../redux/actions/userAction";
import notify from "../../hook/useNotification";
import { useDispatch } from "react-redux";
import AllUserComponentHook from "../../hook/user/all-user-component-hook";
import Spinner from "react-bootstrap/esm/Spinner";

const AllUsersComponent = ({ data, loading, pageCount }) => {
  const [getPage, handleLimitChange] = AllUserComponentHook();
  const dispatch = useDispatch();
  const handelDelete = async (id) => {
    await dispatch(deleteUser(id));
    notify("تم الحذف بنجاح", "success");
    window.location.reload();
  };

  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <h4 className="box-title">عرض جميع الموظفين</h4>
              <div className="h4">
                {"عرض "}
                <select name="limitation" id="lang" className="select px-2 " onChange={handleLimitChange}>
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
                to={"/users-add"}
                className="h5 btn btn-primary btn-rounded btn-icon btn-icon-right btn-xs waves-effect waves-light"
              >
                <i className="ico fa fa-plus"></i> إضافة موظف
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
                <th className="h5 text-center">صورة البروفايل</th>
                <th className="h5 text-center">اسم الموظف </th>
                <th className="h5 text-center"> الهاتف</th>
                <th className="h5 text-center"> الصلاحية </th>
                <th className="h5 text-center"> رقم الهوية </th>
                <th className="h5 text-center"> أكشن</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th className="h5 text-center">صورة البروفايل </th>
                <th className="h5 text-center">اسم الموظف </th>
                <th className="h5 text-center"> الهاتف</th>
                <th className="h5 text-center"> الصلاحية </th>
                <th className="h5 text-center"> رقم الهوية </th>
                <th className="h5 text-center"> أكشن</th>
              </tr>
            </tfoot>
            <tbody>
            {loading === false ? (
                data.length > 0 ? (
                  data.map((user) => (
                    <tr key={user._id}>
                      <td className="h5 text-center"><img src={user.profileImg} alt={user.name} width={50} height={50} /></td>
                      <td className="h5 text-center">{user.name}</td>
                      <td className="h5 text-center">{user.phone}</td>
                      <td className="h5 text-center"><span className="label label-success">{user.role}</span></td>
                      <td className="h5 text-center">
                        {user.identificationNumber}
                      </td>
                      <td className="h5 text-center">
                        <Link
                          to={`/users-profile/${user._id}`}
                          className="mx-3 btn btn-primary btn-icon btn-icon-right btn-xs waves-effect waves-light"
                        >
                          <i className="ico fa fa-eye"></i> عرض
                        </Link>
                        <Link
                          to={`/users-edit/${user._id}`}
                          className="mx-3 btn btn-success btn-icon btn-icon-right btn-xs waves-effect waves-light"
                        >
                          <i className="ico fa fa-edit"></i> تعديل
                        </Link>
                        <button
                          onClick={()=>handelDelete(user._id)}
                          className="mx-3 btn btn-danger btn-icon btn-icon-right btn-xs waves-effect waves-light"
                        >
                          <i className="ico fa fa-trash"></i> حذف
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td valign="top" colSpan="9" className="h4 text-center text-danger p-3">
                      لا يوجد موظفين بعد!{" "}
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

export default AllUsersComponent;
