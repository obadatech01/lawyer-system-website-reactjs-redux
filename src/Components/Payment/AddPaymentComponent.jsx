import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import AddPaymentHook from "../../hook/payment/add-payment-hook";
import { useGetDataToken } from "../../hooks/useGetData";

const AddPaymentComponent = () => {
  const [
    title,
    maxAddPayment,
    amount,
    exchangeDate,
    caseId,
    exchangeMethod,
    notes,
    loading,
    isPress,
    handleSubmit,
    onChangeTitle,
    onChangeAmount,
    onChangeExchangeDate,
    onChangeCaseId,
    onChangeExchangeMethod,
    onChangeNotes,
  ] = AddPaymentHook();

  const [cases, setCases] = useState([]);

  useEffect(() => {
    const getAllCases = async () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useGetDataToken(`/api/v1/cases`);
      setCases(res.data);
    };

    getAllCases();
  }, []);

  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <h4 className="box-title d-flex justify-content-center">
            إضافة دفعة جديدة
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
                  <h4>
                    <b>القضية</b>
                  </h4>
                  <select
                    style={{ fontSize: "1.8rem" }}
                    className="form-control select2_1"
                    value={caseId}
                    onChange={onChangeCaseId}
                  >
                    <optgroup label="اختر القضية">
                      <option value="">اختر القضية</option>
                      {cases.map((item) => (
                        <option value={item._id} key={item._id}>
                          {item.title}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                  <div className="margin-top-20">
                    <h4>
                      <b>تاريخ الدفع</b>
                    </h4>
                    <input
                      type="date"
                      maxLength={25}
                      name="exchangeDate"
                      style={{ fontSize: "1.8rem" }}
                    className="form-control"
                      id="exchangeDate"
                      onChange={onChangeExchangeDate}
                      value={exchangeDate}
                      placeholder="تاريخ الدفع"
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

export default AddPaymentComponent;
