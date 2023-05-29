import React from "react";
import { useParams } from "react-router-dom";
import EditExpenseHook from "../../hook/expense/edit-expense-hook";

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
                  <h5>
                    <b>عنوان الصرف</b>
                  </h5>
                  <input
                    type="text"
                    className="form-control"
                    maxLength={25}
                    name="title"
                    id="title"
                    onChange={onChangeTitle}
                    value={title}
                    placeholder="عنوان الصرف"
                  />
                  <div className="margin-top-20">
                    <h5>
                      <b>طريقة الدفع</b>
                    </h5>
                    <select
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
                    <h5>
                      <b>الكمية</b>
                    </h5>
                    <input
                      type="number"
                      min={0}
                      name="amount"
                      className="form-control"
                      id="amount"
                      onChange={onChangeAmount}
                      value={amount}
                      placeholder="ادخل الكمية"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="padding-20">
                  <h5>
                    <b>التاريخ</b>
                  </h5>
                  <input
                    type="date"
                    maxLength={25}
                    name="expenseDate"
                    className="form-control"
                    id="expenseDate"
                    placeholder="تاريخ الصرف"
                    onChange={onChangeExchangeDate}
                    value={exchangeDate}
                  />
                  <div className="margin-top-20">
                    <h5>
                      <b>اسم المصروف له</b>
                    </h5>
                    <input
                      type="text"
                      maxLength={25}
                      name="userName"
                      className="form-control"
                      id="userName"
                      onChange={onChangeUserName}
                      value={userName}
                      placeholder="اسم المصروف له"
                    />
                  </div>
                  <div className="margin-top-20">
                    <h5>
                      <b>الملاحظات</b>
                    </h5>
                    <textarea
                      id="textarea"
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
                  className="btn mt-4 btn-primary btn-sm waves-effect waves-light"
                >
                  تعديل
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
