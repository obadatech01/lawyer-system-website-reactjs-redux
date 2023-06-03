import React from "react";

const AddUserComponent = () => {
  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <h4 className="box-title d-flex justify-content-center">
            إضافة موظف جديد
          </h4>

          <div className="row">
            <div className="card-content">
              <from>
                <div className="col-md-6">
                  <div className="padding-20">
                    <h5>
                      <b>اسم الموظف</b>
                    </h5>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={25}
                      name="defaultconfig"
                      id="defaultconfig"
                      placeholder="اسم الموظف"
                    />
                    <div className="margin-top-20">
                      <h5>
                        <b>البريد الإلكتروني</b>
                      </h5>
                      <input
                        type="email"
                        maxLength={25}
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="البريد الإلكتروني"
                      />
                    </div>
                    <div className="margin-top-20">
                      <h5>
                        <b>رقم الهوية</b>
                      </h5>
                      <input
                        type="text"
                        maxLength={25}
                        name="thresholdconfig"
                        className="form-control"
                        id="thresholdconfig"
                        placeholder="رقم الهوية"
                      />
                    </div>
                    <div className="margin-top-20">
                      <h5>
                        <b>رقم الهاتف</b>
                      </h5>
                      <input
                        type="text"
                        maxLength={25}
                        name="thresholdconfig"
                        className="form-control"
                        id="thresholdconfig"
                        placeholder="رقم الهاتف"
                      />
                    </div>
                    <div className="margin-top-20">
                      <h5>
                        <b>رقم الواتساب</b>
                      </h5>
                      <input
                        type="text"
                        maxLength={25}
                        name="whatsapp"
                        className="form-control"
                        id="whatsapp"
                        placeholder="رقم الواتساب"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="padding-20">
                    <h5>
                      <b>الجنس</b>
                    </h5>
                    <select className="form-control select2_1">
                      <optgroup label="نوع الجنس">
                        <option value="ذكر">ذكر</option>
                        <option value="أنثى">أنثى</option>
                      </optgroup>
                    </select>
                    <div className="margin-top-20">
                      <h5>
                        <b>العنوان</b>
                      </h5>
                      <input
                        type="text"
                        maxLength={25}
                        name="thresholdconfig"
                        className="form-control"
                        id="thresholdconfig"
                        placeholder="العنوان"
                      />
                    </div>
                    <div className="margin-top-20">
                      <h5>
                        <b>كلمة المرور</b>
                      </h5>
                      <input
                        type="password"
                        maxLength={25}
                        name="password"
                        className="form-control"
                        id="password"
                        placeholder="كلمة المرور"
                      />
                    </div>
                    <div className="margin-top-20">
                    <h5>
                      <b>الصلاحية</b>
                    </h5>
                    <select className="form-control select2_1">
                      <optgroup label="اختر الصلاحية">
                        <option value="">اختر الصلاحية</option>
                        <option value="نائب مدير">نائب مدير</option>
                        <option value="محامي">محامي</option>
                        <option value="سكرتير">سكرتير</option>
                        <option value="محاسب">محاسب</option>
                      </optgroup>
                    </select>
                    </div>
                    <div className="margin-top-20">
                    <div className="box-content">
                      <h4 className="box-title">قم بتحميل الصورة</h4>
                      {/* /.box-title */}
                      <input
                        type="file"
                        id="input-file-now-custom-1"
                        className="dropify"
                        // onChange={onChangeDocument}
                        // data-default-file={document}
                      />
                    </div>
                    {/* /.box-content */}
                    </div>
                  </div>
                </div>
                <div className="col-md-12 d-flex justify-content-start">
                  <button
                    type="submit"
                    className="btn mt-4 btn-primary btn-sm waves-effect waves-light"
                  >
                    حفظ
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

export default AddUserComponent;
