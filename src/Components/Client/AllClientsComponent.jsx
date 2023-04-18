import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/esm/Table";
import { Link } from "react-router-dom";
import Pagination from "../Utils/Pagination";
import AllClientComponentHook from "../../hook/client/all-client-component-hook";
import { useDispatch } from "react-redux";
import { deleteClient } from "../../redux/actions/clientAction";
import notify from "../../hook/useNotification";

const AllClientsComponent = ({ data, loading, pageCount }) => {
  const [getPage, handleLimitChange] = AllClientComponentHook();
  const dispatch = useDispatch();
  const handelDelete = async (id) => {
    await dispatch(deleteClient(id));
    notify("تم حذف العميل بنجاح", "success");  
    window.location.reload();
  };

  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <h4 className="box-title">عرض جميع العملاء</h4>
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
                to={"/clients-add"}
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
              {loading === false ? (
                data ? (
                  data.map((client) => (
                    <tr key={client._id}>
                      <td className="h5 text-center">{client.name}</td>
                      <td className="h5 text-center">{client.phone}</td>
                      <td className="h5 text-center">{client.nationality}</td>
                      <td className="h5 text-center">
                        {client.identificationNumber}
                      </td>
                      <td className="h5 text-center">{"2"}</td>
                      <td className="h5 text-center">{"1500"}</td>
                      <td className="h5 text-center">{"700"}</td>
                      <td className="h5 text-center">{"800"}</td>
                      <td className="h5 text-center">
                        <Link
                          to={`/clients-profile/${client._id}`}
                          className="mx-3 btn btn-primary btn-icon btn-icon-right btn-xs waves-effect waves-light"
                        >
                          <i className="ico fa fa-eye"></i> عرض
                        </Link>
                        <Link
                          to={`/clients-edit/${client._id}`}
                          className="mx-3 btn btn-success btn-icon btn-icon-right btn-xs waves-effect waves-light"
                        >
                          <i className="ico fa fa-edit"></i> تعديل
                        </Link>
                        <button
                          onClick={()=>handelDelete(client._id)}
                          className="mx-3 btn btn-danger btn-icon btn-icon-right btn-xs waves-effect waves-light"
                        >
                          <i className="ico fa fa-trash"></i> حذف
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td valign="top" colSpan="9" className="h4 text-center p-3">
                      لا يوجد عناصر{" "}
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

export default AllClientsComponent;
