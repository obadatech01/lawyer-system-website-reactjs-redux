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
                  <h4>
                    <b>اسم الموظف</b>
                  </h4>
                  <input
                    type="text"
                    style={{ fontSize: "1.8rem" }}
                    className="form-control"
                    maxLength={25}
                    name="name"
                    id="name"
                    value={name}
                    onChange={onChangeName}
                    placeholder="اسم الموظف"
                  />
                  <div className="margin-top-20">
                    <h4>
                      <b>البريد الإلكتروني</b>
                    </h4>
                    <input
                      type="email"
                      maxLength={25}
                      name="email"
                      style={{ fontSize: "1.8rem" }}
                    className="form-control"
                      id="email"
                      value={email}
                      onChange={onChangeEmail}
                      placeholder="البريد الإلكتروني"
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>رقم الهوية</b>
                    </h4>
                    <input
                      type="text"
                      maxLength={25}
                      name="identificationNumber"
                      style={{ fontSize: "1.8rem" }}
                    className="form-control"
                      id="identificationNumber"
                      value={identificationNumber}
                      onChange={onChangeIdentificationNumber}
                      placeholder="رقم الهوية"
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>رقم الهاتف</b>
                    </h4>
                    <input
                      type="text"
                      maxLength={25}
                      name="phone"
                      style={{ fontSize: "1.8rem" }}
                    className="form-control"
                      id="phone"
                      value={phone}
                      onChange={onChangePhone}
                      placeholder="رقم الهاتف"
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>رقم الواتساب</b>
                    </h4>
                    <input
                      type="text"
                      maxLength={25}
                      name="whatsapp"
                      style={{ fontSize: "1.8rem" }}
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
                  <h4>
                    <b>الجنس</b>
                  </h4>
                  <select
                    style={{ fontSize: "1.8rem" }}
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
                    <h4>
                      <b>العنوان</b>
                    </h4>
                    <input
                      type="text"
                      maxLength={25}
                      name="address"
                      style={{ fontSize: "1.8rem" }}
                    className="form-control"
                      id="address"
                      value={address}
                      onChange={onChangeAddress}
                      placeholder="العنوان"
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>كلمة المرور</b>
                    </h4>
                    <input
                      type="password"
                      maxLength={25}
                      name="password"
                      style={{ fontSize: "1.8rem" }}
                    className="form-control"
                      id="password"
                      value={password}
                      onChange={onChangePassword}
                      placeholder="كلمة المرور"
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>الصلاحية</b>
                    </h4>
                    <select
                      style={{ fontSize: "1.8rem" }}
                    className="form-control select2_1"
                      value={role}
                      onChange={onChangeRole}
                    >
                      <optgroup label="اختر الصلاحية">
                        <option value="">اختر الصلاحية</option>
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

export default AddUserComponent;
