import React from "react";
import EditSessionHook from "../../hook/session/edit-session-hook";
import { useParams } from "react-router-dom";
import EditInputDate from "../UI/EditInputDate";

const EditSessionComponent = () => {
  const { id } = useParams();
  const [title, lawyerName, sessionDate, notes, handleSubmit, onChangeTitle, onChangeLawyerName, onChangeSessionDate, onChangeNotes] = EditSessionHook(id);

  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <h4 className="box-title d-flex justify-content-center">
            تعديل هذه الجلسة
          </h4>

          <div className="row">
            <div className="card-content">
              {/* <from> */}
              <div className="col-md-6">
                  <div className="padding-20">
                    <h5>
                      <b>عنوان الجلسة</b>
                    </h5>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={25}
                      name="title"
                      id="title"
                      onChange={onChangeTitle}
                      value={title}
                      placeholder="عنوان الجلسة"
                    />
                    <div className="margin-top-20">
                      <EditInputDate labelName="تاريخ الجلسة" value={sessionDate} onChangeInput={onChangeSessionDate} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="padding-20">
                    <div className="margin-top-9">
                      <h5>
                        <b>اسم المحامي</b>
                      </h5>
                      <input
                        type="text"
                        maxLength={25}
                        name="lawyerName"
                        className="form-control"
                        id="lawyerName"
                        value={lawyerName}
                        onChange={onChangeLawyerName}
                        placeholder="محامي الجلسة"
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

export default EditSessionComponent;
