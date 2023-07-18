import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import AddCaseHook from "../../hook/case/add-case-hook";
import { useGetDataToken } from "../../hooks/useGetData";

const AddCaseComponent = () => {
  const [
    title,
    type,
    courtCaseNumber,
    courtName,
    judgeName,
    client,
    clientType,
    cost,
    opponentName,
    opponentIdentificationNumber,
    opponentPhone,
    opponentAddress,
    opponentType,
    opponentLawyerName,
    status,
    notes,
    loading,
    isPress,
    handleSubmit,
    onChangeTitle,
    onChangeType,
    onChangeCourtCaseNumber,
    onChangeCourtName,
    onChangeJudgeName,
    onChangeClient,
    onChangeClientType,
    onChangeCost,
    onChangeOpponentName,
    onChangeOpponentIdentificationNumber,
    onChangeOpponentPhone,
    onChangeOpponentAddress,
    onChangeOpponentType,
    onChangeOpponentLawyerName,
    onChangeStatus,
    onChangeNotes,
  ] = AddCaseHook();

  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getAllCasesForClient = async () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useGetDataToken(`/api/v1/clients`);
      setClients(res.data);
    };

    getAllCasesForClient();
  }, []);

  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <h4 className="box-title text-center">إضافة قضية جديد</h4>
          <div className="row">
            <div className="card-content">
              {/* <from action="#"> */}
              <div className="col-md-6">
                <div className="padding-20">
                  <h4>
                    <b>عنوان القضية</b>
                  </h4>
                  <input
                    type="text"
                    style={{ fontSize: "1.8rem" }}
                    className="form-control"
                    maxLength={25}
                    name="title"
                    id="title"
                    placeholder="عنوان القضية"
                    onChange={onChangeTitle}
                    value={title}
                  />
                  <div className="margin-top-20">
                    <h4>
                      <b>نوع القضية</b>
                    </h4>
                    <input
                      type="text"
                      maxLength={25}
                      name="courtCaseNumber"
                      style={{ fontSize: "1.8rem" }}
                      className="form-control"
                      id="courtCaseNumber"
                      placeholder="نوع القضية"
                      onChange={onChangeType}
                      value={type}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>رقم القضية في المحكمة</b>
                    </h4>
                    <input
                      type="text"
                      maxLength={25}
                      name="courtCaseNumber"
                      style={{ fontSize: "1.8rem" }}
                      className="form-control"
                      id="courtCaseNumber"
                      placeholder="رقم القضية في المحكمة"
                      onChange={onChangeCourtCaseNumber}
                      value={courtCaseNumber}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>اسم المحكمة</b>
                    </h4>
                    <input
                      type="text"
                      name="courtName"
                      style={{ fontSize: "1.8rem" }}
                      className="form-control"
                      id="courtName"
                      placeholder="اسم المحكمة"
                      onChange={onChangeCourtName}
                      value={courtName}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>اسم القاضي</b>
                    </h4>
                    <input
                      type="text"
                      name="judgeName"
                      style={{ fontSize: "1.8rem" }}
                      className="form-control"
                      id="judgeName"
                      placeholder="اسم القاضي"
                      onChange={onChangeJudgeName}
                      value={judgeName}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>اسم العميل</b>
                    </h4>
                    <select
                      style={{ fontSize: "1.8rem" }}
                      className="form-control select2_1"
                      onChange={onChangeClient}
                      value={client}
                    >
                      <optgroup label="اختر اسم العميل">
                        <option value="">اختر اسم العميل</option>
                        {clients.map((item) => (
                          <option value={item._id} key={item._id}>
                            {item.name}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>نوع العميل</b>
                    </h4>
                    <select
                      style={{ fontSize: "1.8rem" }}
                      className="form-control select2_1"
                      onChange={onChangeClientType}
                      value={clientType}
                    >
                      <optgroup label="نوع العميل">
                        <option value="">اختر نوع العميل</option>
                        <option value="مدعي">مدعي</option>
                        <option value="مدعي عليه">مدعي عليه</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>أتعاب القضية</b>
                    </h4>
                    <input
                      type="number"
                      min={1}
                      name="cost"
                      style={{ fontSize: "1.8rem" }}
                      className="form-control"
                      id="cost"
                      placeholder="أتعاب القضية"
                      onChange={onChangeCost}
                      value={cost}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="padding-20">
                  <h4>
                    <b>اسم الخصم</b>
                  </h4>
                  <input
                    type="text"
                    name="opponentName"
                    style={{ fontSize: "1.8rem" }}
                    className="form-control"
                    id="opponentName"
                    placeholder="اسم الخصم"
                    onChange={onChangeOpponentName}
                    value={opponentName}
                  />
                  <div className="margin-top-20">
                    <h4>
                      <b>رقم هوية الخصم</b>
                    </h4>
                    <input
                      type="number"
                      // minLength={9}
                      // maxLength={9}
                      min={0}
                      name="opponentIdentificationNumber"
                      style={{ fontSize: "1.8rem" }}
                      className="form-control"
                      id="opponentIdentificationNumber"
                      placeholder="رقم هوية الخصم"
                      onChange={onChangeOpponentIdentificationNumber}
                      value={opponentIdentificationNumber}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>رقم جوال الخصم</b>
                    </h4>
                    <input
                      type="text"
                      maxLength={25}
                      name="opponentPhone"
                      style={{ fontSize: "1.8rem" }}
                      className="form-control"
                      id="opponentPhone"
                      placeholder="رقم جوال الخصم"
                      onChange={onChangeOpponentPhone}
                      value={opponentPhone}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>عنوان الخصم</b>
                    </h4>
                    <input
                      type="text"
                      name="opponentAddress"
                      style={{ fontSize: "1.8rem" }}
                      className="form-control"
                      id="opponentAddress"
                      placeholder="عنوان الخصم"
                      onChange={onChangeOpponentAddress}
                      value={opponentAddress}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>نوع الخصم</b>
                    </h4>
                    <select
                      style={{ fontSize: "1.8rem" }}
                      className="form-control select2_1"
                      onChange={onChangeOpponentType}
                      value={opponentType}
                    >
                      <optgroup label="نوع الخصم">
                        <option value="">اختر نوع الخصم</option>
                        <option value="مدعي">مدعي</option>
                        <option value="مدعي عليه">مدعي عليه</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>اسم محامي الخصم</b>
                    </h4>
                    <input
                      type="text"
                      name="opponentLawyerName"
                      style={{ fontSize: "1.8rem" }}
                      className="form-control"
                      id="opponentLawyerName"
                      placeholder="اسم محامي الخصم"
                      onChange={onChangeOpponentLawyerName}
                      value={opponentLawyerName}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>حالة القضية</b>
                    </h4>
                    <select
                      style={{ fontSize: "1.8rem" }}
                      className="form-control select2_1"
                      onChange={onChangeStatus}
                      value={status}
                    >
                      <optgroup label="حالة القضية">
                        <option value="">اختر حالة القضية</option>
                        <option value="مكتملة">مكتملة</option>
                        <option value="غير مكتملة">غير مكتملة</option>
                      </optgroup>
                    </select>
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
                      placeholder="الملاحظات التي تخص العميل"
                      onChange={onChangeNotes}
                      // value={name}
                      defaultValue={notes}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <button
                  type="submit"
                  style={{ fontSize: "2rem" }}
                  onClick={handleSubmit}
                  className="btn btn-primary mx-4 btn-sm waves-effect waves-light"
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

export default AddCaseComponent;
