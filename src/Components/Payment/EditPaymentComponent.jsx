import React from "react";
import { useParams } from "react-router-dom";
import EditPaymentHook from "../../hook/payment/edit-payment-hook";
import EditInputDate from "../UI/EditInputDate";

const EditPaymentComponent = () => {
  const { id } = useParams();
  const [
    title,
    maxAddPayment,
    amount,
    exchangeDate,
    exchangeMethod,
    notes,
    handleSubmit,
    onChangeTitle,
    onChangeAmount,
    onChangeExchangeDate,
    onChangeExchangeMethod,
    onChangeNotes,
  ] = EditPaymentHook(id);

  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <h4 className="box-title d-flex justify-content-center">
            تعديل هذه الدفعة
          </h4>

          <div className="row">
            <div className="card-content">
              {/* <from> */}
              <div className="col-md-6">
                <div className="padding-20">
                  <h4>
                    <b>عنوان الدفعة</b>
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
                    placeholder="عنوان الدفعة"
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
                      <optgroup label="طريقة الدفع">
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
                      max={maxAddPayment}
                      name="amount"
                      style={{ fontSize: "1.8rem" }}
                    className="form-control"
                      id="amount"
                      onChange={onChangeAmount}
                      value={amount}
                      placeholder="الكمية"
                    />
                    <span className={amount > maxAddPayment ? "text-danger h4" : "text-success h4"}>{amount > maxAddPayment ? `لا يمكن إضافة مدفوعات أكتر من ${maxAddPayment}` : `الحد الأقصى للإضافة ${maxAddPayment}`}</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="padding-20">
                  <div className="margin-top-20">
                    <EditInputDate labelName="تاريخ الدفع" value={exchangeDate} onChangeInput={onChangeExchangeDate} />
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
                      placeholder="الملاحظات التي تخص الدفع"
                      defaultValue={notes}
                      onChange={onChangeNotes}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12 d-flex justify-content-start">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  style={{fontSize: "2rem"}}
                  disabled={amount > maxAddPayment ? true : false}
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

export default EditPaymentComponent;
