import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/esm/Table";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AllExpenseComponentHook from "../../hook/expense/all-expense-component-hook";
import notify from "../../hook/useNotification";
import { deleteExpense } from "../../redux/actions/expenseAction";
import Pagination from "../Utils/Pagination";

const AllExpensesComponent = ({ data, loading, pageCount }) => {
  const [getPage, handleLimitChange] = AllExpenseComponentHook();
  const dispatch = useDispatch();
  const handelDelete = async (id) => {
    await dispatch(deleteExpense(id));
    notify("تم الحذف بنجاح", "success");
    window.location.reload();
  };

  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <h4 className="box-title">عرض جميع المصروفات</h4>
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
                to={"/expenses-add"}
                className="h5 btn btn-primary btn-rounded btn-icon btn-icon-right btn-xs waves-effect waves-light"
              >
                <i className="ico fa fa-plus"></i> إضافة مصروفات
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
                <th className="h5 text-center">المصروف له</th>
                <th className="h5 text-center"> أكشن</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th className="h5 text-center">اسم الدفعة </th>
                <th className="h5 text-center"> طريقة الدفع</th>
                <th className="h5 text-center"> الكمية </th>
                <th className="h5 text-center"> التاريخ</th>
                <th className="h5 text-center">المصروف له</th>
                <th className="h5 text-center"> أكشن</th>
              </tr>
            </tfoot>
            <tbody>
              {loading === false ? (
                data.length > 0 ? (
                  data.map((expense) => (
                    <tr key={expense._id}>
                      <td className="h5 text-center text-muted">
                        {expense.title}
                      </td>
                      <td className="h5 text-center text-muted">
                        {expense.exchangeMethod}
                      </td>
                      <td className="h5 text-center text-muted">
                        {expense.amount}
                      </td>
                      <td className="h5 text-center text-muted">
                        {
                          new Date(expense.exchangeDate)
                            .toISOString()
                            .split("T")[0]
                        }
                      </td>
                      <td className="h5 text-center text-muted">
                        {expense.userName}
                      </td>
                      <td className="h5 text-center">
                        <Link
                          to={`/expenses-edit/${expense._id}`}
                          className="mx-3 btn btn-success btn-icon btn-icon-right btn-xs waves-effect waves-light"
                        >
                          <i className="ico fa fa-edit"></i> تعديل
                        </Link>
                        <button
                          onClick={() => handelDelete(expense._id)}
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

export default AllExpensesComponent;
