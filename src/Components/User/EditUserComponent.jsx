import React from 'react'
import EditUserHook from '../../hook/user/edit-user-hook';
import { useParams } from 'react-router-dom';

const EditUserComponent = () => {
  const { id } = useParams();
  const [name, identificationNumber, profileImg, phone, whatsapp, address, gender, role, handleSubmit, onChangeName, onChangeIdentificationNumber, onChangeProfileImg, onChangePhone, onChangeWhatsApp, onChangeAddress, onChangeGender, onChangeRole] = EditUserHook(id);

  return (
    <div className="row small-spacing">

      <div className="col-xs-12">
        <div className="box-content">
          <h4 className="box-title d-flex justify-content-center">
            تعديل بيانات الموظف
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
                  <div className="margin-top-20">
                  <div className="box-content">
                      <h4 className="box-title">قم بتعديل الصورة</h4>
                      {/* /.box-title */}
                      <input
                        type="file"
                        id="input-file-now-custom-1"
                        className="dropify mb-3"
                        onChange={onChangeProfileImg}
                        data-default-file={profileImg}
                      />
                      <img src={profileImg} width={50} height={50} alt="" />
                    </div>
                    {/* /.box-content */}
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
  )
}

export default EditUserComponent;