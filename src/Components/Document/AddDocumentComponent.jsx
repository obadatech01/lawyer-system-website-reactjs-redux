import React, { useEffect, useState } from "react";
import { useGetDataToken } from "../../hooks/useGetData";
import AddDocumentHook from "../../hook/document/add-document-hook";
import Spinner from "react-bootstrap/esm/Spinner";

const AddDocumentComponent = () => {
  const [
    title,
    document,
    caseId,
    loading,
    isPress,
    handleSubmit,
    onChangeTitle,
    onChangeDocument,
    onChangeCaseId
  ] = AddDocumentHook();

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
            إضافة ملف جديد
          </h4>

          <div className="row">
            <div className="card-content">
              {/* <from> */}
                <div className="col-md-6">
                  <div className="padding-20">
                    <h5>
                      <b>اسم الملف</b>
                    </h5>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={25}
                      name="title"
                      id="title"
                      value={title}
                      onChange={onChangeTitle}
                      placeholder="اسم الملف"
                    />
                    <div className="margin-top-20">
                      <h5>
                        <b>القضية</b>
                      </h5>
                      <select
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
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="padding-20">
                    <div className="box-content">
                      <h4 className="box-title">Default File</h4>
                      {/* /.box-title */}
                      <input
                        type="file"
                        id="input-file-now-custom-1"
                        className="dropify"
                        onChange={onChangeDocument}
                        data-default-file={document}
                      />
                    </div>
                    {/* /.box-content */}
                  </div>
                </div>
                <div className="col-md-12 d-flex justify-content-start">
                  <button
                    type="submit"
                    onClick={handleSubmit}
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

export default AddDocumentComponent;
