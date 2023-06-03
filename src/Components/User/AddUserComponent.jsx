import React from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import AddUserHook from "../../hook/user/add-user-hook";

const AddUserComponent = () => {
  const [
    name,
    email,
    identificationNumber,
    phone,
    whatsapp,
    address,
    gender,
    role,
    password,
    loading,
    isPress,
    handleSubmit,
    onChangeName,
    onChangeEmail,
    onChangeIdentificationNumber,
    onChangePhone,
    onChangeWhatsApp,
    onChangeAddress,
    onChangeGender,
    onChangeRole,
    onChangePassword,
  ] = AddUserHook();

  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <h4 className="box-title d-flex justify-content-center">
            إضافة موظف جديد
          </h4>

          <div className="row">
            <div className="card-content">
              {/* <from> */}
              <div className="col-md-6">
                <div className="padding-20">
                  <h5>
                    <b>اسم الموظف</b>
                  </h5>
                  <input
                    type="text"
                    className="form-control"
                    maxLength={25}
                    name="name"
                    id="name"
                    value={name}
                    onChange={onChangeName}
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
                      value={email}
                      onChange={onChangeEmail}
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
                      name="identificationNumber"
                      className="form-control"
                      id="identificationNumber"
                      value={identificationNumber}
                      onChange={onChangeIdentificationNumber}
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
                      name="phone"
                      className="form-control"
                      id="phone"
                      value={phone}
                      onChange={onChangePhone}
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
                      value={whatsapp}
                      onChange={onChangeWhatsApp}
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
                  <select
                    className="form-control select2_1"
                    value={gender}
                    onChange={onChangeGender}
                  >
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
                      name="address"
                      className="form-control"
                      id="address"
                      value={address}
                      onChange={onChangeAddress}
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
                      value={password}
                      onChange={onChangePassword}
                      placeholder="كلمة المرور"
                    />
                  </div>
                  <div className="margin-top-20">
                    <h5>
                      <b>الصلاحية</b>
                    </h5>
                    <select
                      className="form-control select2_1"
                      value={role}
                      onChange={onChangeRole}
                    >
                      <optgroup label="اختر الصلاحية">
                        <option value="">اختر الصلاحية</option>
                        <option value="نائب مدير">نائب مدير</option>
                        <option value="محامي">محامي</option>
                        <option value="سكرتير">سكرتير</option>
                        <option value="محاسب">محاسب</option>
                      </optgroup>
                    </select>
                  </div>
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

export default AddUserComponent;
