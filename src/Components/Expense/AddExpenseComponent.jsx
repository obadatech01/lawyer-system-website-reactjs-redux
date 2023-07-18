import React from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import AddExpenseHook from "../../hook/expense/add-expense-hook";
import ProtectedAmount from "../Utils/ProtectedAmount";

const AddExpenseComponent = () => {
  const [
    title,
    amount,
    exchangeDate,
    exchangeMethod,
    userName,
    notes,
    loading,
    isPress,
    handleSubmit,
    onChangeTitle,
    onChangeAmount,
    onChangeExchangeDate,
    onChangeExchangeMethod,
    onChangeUserName,
    onChangeNotes,
  ] = AddExpenseHook();
  const [maxAddExpense, maxAddPayment, setUrl] = ProtectedAmount();

  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <h4 className="box-title d-flex justify-content-center">
            إضافة مصروفات جديدة
          </h4>

          <div className="row">
            <div className="card-content">
              {/* <from> */}
              <div className="col-md-6">
                <div className="padding-20">
                  <h4>
                    <b>عنوان الصرف</b>
                  </h4>
                  <input
                    type="text"
                    style={{ fontSize: "1.8rem" }}
                    className="form-control"
                    maxLength={25}
                    name="title"
                    id="title"
                    onChange={onChangeTitle}
                    value={title}
                    placeholder="عنوان الصرف"
                  />
                  <div className="margin-top-20">
                    <h4>
                      <b>طريقة الدفع</b>
                    </h4>
                    <select
                      style={{ fontSize: "1.8rem" }}
                      className="form-control select2_1"
                      onChange={onChangeExchangeMethod}
                      value={exchangeMethod}
                    >
                      <optgroup label="طريقة الصرف">
                        <option value="كاش">كاش</option>
                        <option value="فيزا">فيزا</option>
                        <option value="شيك">شيك</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>الكمية</b>
                    </h4>
                    <input
                      type="number"
                      min={0}
                      max={maxAddExpense}
                      name="amount"
                      style={{ fontSize: "1.8rem" }}
                      className="form-control"
                      id="amount"
                      onChange={onChangeAmount}
                      value={amount}
                      placeholder="ادخل الكمية"
                    />
                    <span className={amount > maxAddExpense ? "text-danger h4" : "text-success h4"}>{amount > maxAddExpense ? `لا يمكن إضافة مصروفات أكتر من ${maxAddExpense}` : `الحد الأقصى للإضافة ${maxAddExpense}`}</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="padding-20">
                  <h4>
                    <b>التاريخ</b>
                  </h4>
                  <input
                    type="date"
                    maxLength={25}
                    name="expenseDate"
                    style={{ fontSize: "1.8rem" }}
                    className="form-control"
                    id="expenseDate"
                    placeholder="تاريخ الصرف"
                    onChange={onChangeExchangeDate}
                    value={exchangeDate}
                  />
                  <div className="margin-top-20">
                    <h4>
                      <b>اسم المصروف له</b>
                    </h4>
                    <input
                      type="text"
                      maxLength={25}
                      name="userName"
                      style={{ fontSize: "1.8rem" }}
                      className="form-control"
                      id="userName"
                      onChange={onChangeUserName}
                      value={userName}
                      placeholder="اسم المصروف له"
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>الملاحظات</b>
                    </h4>
                    <textarea
                      id="textarea"
                      style={{ fontSize: "1.8rem" }}
                      className="form-control"
                      maxLength={225}
                      rows={2}
                      onChange={onChangeNotes}
                      placeholder="الملاحظات التي تخص الصرف"
                      defaultValue={notes}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12 d-flex justify-content-start">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  style={{fontSize: "2rem"}}
                  disabled={amount > maxAddExpense ? true : false}
                  className="btn mt-4 btn-primary btn-sm waves-effect waves-light"
                >
                  حفظ
                </button>
              </div>
              {/* </from> */}
            </div>
          </div>
          {isPress ? (
            loading ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              <h3 className="d-flex justify-content-center">تم الانتهاء</h3>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AddExpenseComponent;
