import React from 'react';
import { useParams } from 'react-router-dom';
import EditCaseHook from '../../hook/case/edit-case-hook';

const EditCaseComponent = () => {
  const { id } = useParams();
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
    onChangeNotes] = EditCaseHook(id);

  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <h4 className="box-title text-center">تعديل قضية جديد</h4>
          <div className="row">
            <div className="card-content">
              {/* <from action="#"> */}
              <div className="col-md-6">
                <div className="padding-20">
                  <h5>
                    <b>عنوان القضية</b>
                  </h5>
                  <input
                    type="text"
                    className="form-control"
                    maxLength={25}
                    name="title"
                    id="title"
                    placeholder="عنوان القضية"
                    onChange={onChangeTitle}
                    value={title}
                  />
                  <div className="margin-top-20">
                    <h5>
                      <b>نوع القضية</b>
                    </h5>
                    <select
                    className="form-control select2_1"
                    onChange={onChangeType}
                    value={type}
                  >
                    <optgroup label="نوع القضية">
                      <option value="">اختر نوع القضية</option>
                      <option value="بداية">بداية</option>
                      <option value="صلح">صلح</option>
                    </optgroup>
                  </select>
                  </div>
                  <div className="margin-top-20">
                    <h5>
                      <b>رقم القضية في المحكمة</b>
                    </h5>
                    <input
                      type="text"
                      maxLength={25}
                      name="courtCaseNumber"
                      className="form-control"
                      id="courtCaseNumber"
                      placeholder="رقم القضية في المحكمة"
                      onChange={onChangeCourtCaseNumber}
                      value={courtCaseNumber}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h5>
                      <b>اسم المحكمة</b>
                    </h5>
                    <input
                      type="text"
                      name="courtName"
                      className="form-control"
                      id="courtName"
                      placeholder="اسم المحكمة"
                      onChange={onChangeCourtName}
                      value={courtName}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h5>
                      <b>اسم القاضي</b>
                    </h5>
                    <input
                      type="text"
                      name="judgeName"
                      className="form-control"
                      id="judgeName"
                      placeholder="اسم القاضي"
                      onChange={onChangeJudgeName}
                      value={judgeName}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h5>
                      <b>أتعاب القضية</b>
                    </h5>
                    <input
                      type="number"
                      min={1}
                      name="cost"
                      className="form-control"
                      id="cost"
                      placeholder="أتعاب القضية"
                      onChange={onChangeCost}
                      value={cost}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h5>
                      <b>حالة القضية</b>
                    </h5>
                    <select
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
                </div>
              </div>
              <div className="col-md-6">
                <div className="padding-20">
                  <h5>
                    <b>اسم الخصم</b>
                  </h5>
                  <input
                      type="text"
                      name="opponentName"
                      className="form-control"
                      id="opponentName"
                      placeholder="اسم الخصم"
                      onChange={onChangeOpponentName}
                      value={opponentName}
                    />
                  <div className="margin-top-20">
                    <h5>
                      <b>رقم هوية الخصم</b>
                    </h5>
                    <input
                      type="text"
                      // minLength={9}
                      maxLength={9}
                      name="opponentIdentificationNumber"
                      className="form-control"
                      id="opponentIdentificationNumber"
                      placeholder="رقم هوية الخصم"
                      onChange={onChangeOpponentIdentificationNumber}
                      value={opponentIdentificationNumber}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h5>
                      <b>رقم جوال الخصم</b>
                    </h5>
                    <input
                      type="text"
                      maxLength={25}
                      name="opponentPhone"
                      className="form-control"
                      id="opponentPhone"
                      placeholder="رقم جوال الخصم"
                      onChange={onChangeOpponentPhone}
                      value={opponentPhone}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h5>
                      <b>عنوان الخصم</b>
                    </h5>
                    <input
                      type="text"
                      name="opponentAddress"
                      className="form-control"
                      id="opponentAddress"
                      placeholder="عنوان الخصم"
                      onChange={onChangeOpponentAddress}
                      value={opponentAddress}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h5>
                      <b>نوع الخصم</b>
                    </h5>
                    <select
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
                    <h5>
                      <b>اسم محامي الخصم</b>
                    </h5>
                    <input
                      type="text"
                      name="opponentLawyerName"
                      className="form-control"
                      id="opponentLawyerName"
                      placeholder="اسم محامي الخصم"
                      onChange={onChangeOpponentLawyerName}
                      value={opponentLawyerName}
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
                  onClick={handleSubmit}
                  className="btn btn-primary mx-4 btn-xs waves-effect waves-light"
                >
                  حفظ
                </button>
              </div>
              {/* </from> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCaseComponent;