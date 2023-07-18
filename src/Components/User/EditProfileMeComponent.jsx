import React from 'react'
import EditProfileMeHook from '../../hook/user/edit-profile-me-hook';

const EditProfileMeComponent = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [name, identificationNumber, profileImg, phone, whatsapp, address, gender, handleSubmit, onChangeName, onChangeIdentificationNumber, onChangeProfileImg, onChangePhone, onChangeWhatsApp, onChangeAddress, onChangeGender] = EditProfileMeHook(userData?._id);

  return (
    <div className="row small-spacing">

      <div className="col-xs-12">
        <div className="box-content">
          <h4 className="box-title d-flex justify-content-center">
            تعديل بياناتي الشخصية
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
                  style={{ fontSize: "2rem" }}
                  onClick={handleSubmit}
                  className="btn btn-primary mx-4 btn-sm waves-effect waves-light"
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

export default EditProfileMeComponent;