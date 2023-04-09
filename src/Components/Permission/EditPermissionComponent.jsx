import React from "react";

const EditPermissionComponent = () => {
  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <h4 className="box-title d-flex justify-content-center">
            تعديل هذه المصروفات
          </h4>

          <div className="row">
            <div className="card-content">
              <from>
                <div className="col-md-6">
                  <div className="padding-20">
                    <h5>
                      <b>اسم الصرف</b>
                    </h5>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={25}
                      name="defaultconfig"
                      id="defaultconfig"
                      placeholder="اسم العميل"
                    />
                    <div className="margin-top-20">
                      <h5>
                        <b>طريقة الدفع</b>
                      </h5>
                      <select className="form-control select2_1">
                        <optgroup label="طريقة الدفع">
                          <option value="كاش">كاش</option>
                          <option value="فيزا">فيزا</option>
                        </optgroup>
                      </select>
                    </div>
                    <div className="margin-top-20">
                      <h5>
                        <b>الكمية</b>
                      </h5>
                      <input
                        type="text"
                        maxLength={25}
                        name="thresholdconfig"
                        className="form-control"
                        id="thresholdconfig"
                        placeholder="الجنسية"
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
                      type="text"
                      maxLength={25}
                      name="thresholdconfig"
                      className="form-control"
                      id="thresholdconfig"
                      placeholder="الجنسية"
                    />
                    <div className="margin-top-20">
                      <h5>
                        <b>اسم المحامي</b>
                      </h5>
                      <select className="form-control select2_1">
                        <optgroup label="اسم المحامي">
                          <option value="عبادة أبو مسامح">
                            عبادة أبو مسامح
                          </option>
                          <option value="باسل أبو شاب">باسل أبو شاب</option>
                        </optgroup>
                      </select>
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
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12 d-flex justify-content-start">
                  <button
                    type="submit"
                    className="btn mt-4 btn-primary btn-sm waves-effect waves-light"
                  >
                    تعديل
                  </button>
                </div>
              </from>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPermissionComponent;
