import React from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import Table from "react-bootstrap/esm/Table";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AllPaymentComponentHook from "../../hook/payment/all-payment-component-hook";
import notify from "../../hook/useNotification";
import { deletePayment } from "../../redux/actions/paymentAction";
import Pagination from "../Utils/Pagination";

const AllPaymentsComponent = ({ data, loading, pageCount }) => {
  const [getPage, handleLimitChange] = AllPaymentComponentHook();
  const dispatch = useDispatch();
  const handelDelete = async (id) => {
    await dispatch(deletePayment(id));
    notify("تم الحذف بنجاح", "success");
    window.location.reload();
  };

  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <h4 className="box-title">عرض جميع المدفوعات</h4>
              <div className="h4">
                {"عرض "}
                <select
                  name="limitation"
                  id="lang"
                  className="select px-2 "
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
                to={"/payments-add"}
                className="h5 btn btn-primary btn-rounded btn-icon btn-icon-right btn-xs waves-effect waves-light"
              >
                <i className="ico fa fa-plus"></i> إضافة مدفوعات
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
                <th className="h5 text-center">اسم الدفعة </th>
                <th className="h5 text-center"> طريقة الدفع</th>
                <th className="h5 text-center"> الكمية </th>
                <th className="h5 text-center"> التاريخ</th>
                <th className="h5 text-center">اسم القضية</th>
                <th className="h5 text-center">أضيف بواسطة</th>
                <th className="h5 text-center"> أكشن</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th className="h5 text-center">اسم الدفعة </th>
                <th className="h5 text-center"> طريقة الدفع</th>
                <th className="h5 text-center"> الكمية </th>
                <th className="h5 text-center"> التاريخ</th>
                <th className="h5 text-center">اسم القضية</th>
                <th className="h5 text-center">أضيف بواسطة</th>
                <th className="h5 text-center"> أكشن</th>
              </tr>
            </tfoot>
            <tbody>
              {loading === false ? (
                data.length > 0 ? (
                  data.map((payment) => (
                    <tr key={payment._id}>
                      <td className="h5 text-center">{payment.title}</td>
                      <td className="h5 text-center">{payment.exchangeMethod}</td>
                      <td className="h5 text-center">
                        {
                          payment.amount
                        }
                      </td>
                      <td className="h5 text-center">{new Date(payment.exchangeDate)
                            .toISOString()
                            .split("T")[0]}</td>
                      <td className="h5 text-center">
                        {payment.case.title}
                      </td>
                      <td className="h5 text-center">
                        {payment.createdBy.name}
                      </td>
                      <td className="h5 text-center">
                        <Link
                          to={`/payments-edit/${payment._id}`}
                          className="mx-3 btn btn-success btn-icon btn-icon-right btn-xs waves-effect waves-light"
                        >
                          <i className="ico fa fa-edit"></i> تعديل
                        </Link>
                        <button
                          onClick={() => handelDelete(payment._id)}
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

export default AllPaymentsComponent;
