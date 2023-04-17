import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/esm/Table";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllClient,
  getAllClientPage,
} from "../../redux/actions/clientAction";
import Pagination from "../Utils/Pagination";

const AllClientsComponent = ({ data, loading, pageCount }) => {
  const dispatch = useDispatch();

  // when pressed page
  const getPage = (page) => {
    dispatch(getAllClientPage(page));
    // console.log(page);
  };

  // when change limit
  const handleLimitChange = (e) => {
    dispatch(getAllClient(e.target.value));
    // console.log(e.target.value);
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
                      <td className="h5 text-center">
                        {client.name}
                      </td>
                      <td className="h5 text-center">
                        {client.phone}
                      </td>
                      <td className="h5 text-center">
                        {client.nationality}
                      </td>
                      <td className="h5 text-center">
                        {client.identificationNumber}
                      </td>
                      <td className="h5 text-center">{"2"}</td>
                      <td className="h5 text-center">{"1500"}</td>
                      <td className="h5 text-center">{"700"}</td>
                      <td className="h5 text-center">{"800"}</td>
                      <td className="h5 text-center">
                        <Link
                          to={"/clients-edit"}
                          className="btn btn-primary btn-icon btn-icon-right btn-xs waves-effect waves-light"
                        >
                          <i className="ico fa fa-eye"></i> عرض
                        </Link>
                        <Link
                          to={"/clients-edit"}
                          className="btn btn-success btn-icon btn-icon-right btn-xs waves-effect waves-light"
                        >
                          <i className="ico fa fa-edit"></i> تعديل
                        </Link>
                        <Link
                          to={"#"}
                          className="btn btn-danger btn-icon btn-icon-right btn-xs waves-effect waves-light"
                        >
                          <i className="ico fa fa-trash"></i> حذف
                        </Link>
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
