import React from "react";
import { useParams } from "react-router-dom";
import EditExpenseHook from "../../hook/expense/edit-expense-hook";
import EditInputDate from "../UI/EditInputDate";
import ProtectedAmount from "../Utils/ProtectedAmount";

const EditExpenseComponent = () => {
  const { id } = useParams();
  const [
    title,
    amount,
    exchangeDate,
    exchangeMethod,
    userName,
    notes,
    handleSubmit,
    onChangeTitle,
    onChangeAmount,
    onChangeExchangeDate,
    onChangeExchangeMethod,
    onChangeUserName,
    onChangeNotes,
  ] = EditExpenseHook(id);
  const [maxAddExpense, maxAddPayment, setUrl] = ProtectedAmount();

  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <h4 className="box-title d-flex justify-content-center">
            تعديل هذه المصروفات
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
                  <EditInputDate labelName="التاريخ" value={exchangeDate} onChangeInput={onChangeExchangeDate} />
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
                      value={notes}
                      placeholder="الملاحظات التي تخص الصرف"
                      defaultValue={""}
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
                  تحديث
                </button>
              </div>
              {/* </from> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditExpenseComponent;
