import React, { useEffect, useState } from "react";
import AddSessionHook from "../../hook/session/add-session-hook";
import { useGetDataToken } from "../../hooks/useGetData";
import Spinner from "react-bootstrap/esm/Spinner";

const AddSessionComponent = () => {
  const [title, lawyerName, sessionDate, caseId, notes, loading, isPress, handleSubmit, onChangeTitle, onChangeLawyerName, onChangeSessionDate, onChangeCaseId, onChangeNotes] = AddSessionHook();
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
            إضافة جلسة جديدة
          </h4>

          <div className="row">
            <div className="card-content">
              {/* <from> */}
                <div className="col-md-6">
                  <div className="padding-20">
                    <h4>
                      <b>عنوان الجلسة</b>
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
                      placeholder="عنوان الجلسة"
                    />
                    <div className="margin-top-20">
                      <h4>
                        <b>القضية</b>
                      </h4>
                      <select style={{ fontSize: "1.8rem" }}
                      className="form-control select2_1" value={caseId} onChange={onChangeCaseId}>
                        <optgroup label="اختر القضية">
                          <option value="">اختر القضية</option>
                          {
                            cases.map(item => <option value={item._id} key={item._id}>{item.title}</option>)
                          }
                        </optgroup>
                      </select>
                    </div>
                    <div className="margin-top-20">
                      <h4>
                        <b>تاريخ الجلسة</b>
                      </h4>
                      <input
                        type="date"
                        maxLength={25}
                        name="sessionDate"
                        style={{ fontSize: "1.8rem" }}
                      className="form-control"
                        id="sessionDate"
                        value={sessionDate}
                        onChange={onChangeSessionDate}
                        placeholder="تاريخ الجلسة"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="padding-20">
                    <div className="margin-top-9">
                      <h4>
                        <b>اسم المحامي</b>
                      </h4>
                      <input
                        type="text"
                        maxLength={25}
                        name="lawyerName"
                        style={{ fontSize: "1.8rem" }}
                      className="form-control"
                        id="lawyerName"
                        value={lawyerName}
                        onChange={onChangeLawyerName}
                        placeholder="محامي الجلسة"
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
                        placeholder="الملاحظات التي تخص الجلسة"
                        defaultValue={notes}
                        onChange={onChangeNotes}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12 d-flex justify-content-start">
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

export default AddSessionComponent;
