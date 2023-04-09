import React from 'react'

const EditCaseComponent = () => {
  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <h4 className="box-title d-flex justify-content-center">
            تعديل بيانات العميل
          </h4>

          <div className="row">
            <div className="card-content">
              <from>
                <div className="col-md-6">
                  <div className="padding-20">
                    <h5>
                      <b>اسم العميل</b>
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
                        <b>البريد الإلكتروني</b>
                      </h5>
                      <input
                        type="email"
                        maxLength={25}
                        name="thresholdconfig"
                        className="form-control"
                        id="thresholdconfig"
                        placeholder="البريد الإلكتروني"
                      />
                    </div>
                    <div className="margin-top-20">
                      <h5>
                        <b>الجنسية</b>
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
                        <b>اسم الوظيفة أو الشركة التابع لها</b>
                      </h5>
                      <input
                        type="text"
                        maxLength={25}
                        name="thresholdconfig"
                        className="form-control"
                        id="thresholdconfig"
                        placeholder="اسم الوظيفة أو الشركة التابع لها"
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
  )
}

export default EditCaseComponent;