import React from "react";
import { useParams } from "react-router-dom";
import EditPaymentHook from "../../hook/payment/edit-payment-hook";

const EditPaymentComponent = () => {
  const { id } = useParams();
  const [
    title,
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
                  <h5>
                    <b>عنوان الدفعة</b>
                  </h5>
                  <input
                    type="text"
                    className="form-control"
                    maxLength={25}
                    name="title"
                    id="title"
                    onChange={onChangeTitle}
                    value={title}
                    placeholder="عنوان الدفعة"
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
                      <optgroup label="طريقة الدفع">
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
                      placeholder="الكمية"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="padding-20">
                  <div className="margin-top-20">
                    <h5>
                      <b>تاريخ الدفع</b>
                    </h5>
                    <input
                      type="text"
                      maxLength={25}
                      name="exchangeDate"
                      className="form-control"
                      id="exchangeDate"
                      onChange={onChangeExchangeDate}
                      value={exchangeDate}
                      placeholder="تاريخ الدفع"
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

export default EditPaymentComponent;
