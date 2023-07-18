import React from 'react'
import { useParams } from 'react-router-dom';
import EditClientHook from '../../hook/client/edit-client-hook';

const EditClientComponent = () => {
  const { id } = useParams();
  const [name, email, nationality, identificationNumber, phone, gender, address, companyName, notes, handleSubmit, onChangeName, onChangeEmail, onChangeNationality, onChangeIdentificationNumber, onChangePhone, onChangeGender, onChangeAddress, onChangeCompanyName, onChangeNotes] = EditClientHook(id);

  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <h4 className="box-title text-center">
            تعديل بيانات العميل - {name}
          </h4>
          <div className="row">
            <div className="card-content">
              {/* <from action="#"> */}
              <div className="col-md-6">
                <div className="padding-20">
                  <h4>
                    <b>اسم العميل</b>
                  </h4>
                  <input
                    type="text"
                    style={{ fontSize: "1.8rem" }}
                      className="form-control"
                    maxLength={25}
                    name="name"
                    id="name"
                    placeholder="اسم العميل"
                    onChange={onChangeName}
                    value={name}
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
                      placeholder="البريد الإلكتروني"
                      onChange={onChangeEmail}
                      value={email}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>الجنسية</b>
                    </h4>
                    <input
                      type="text"
                      maxLength={25}
                      name="nationality"
                      style={{ fontSize: "1.8rem" }}
                      className="form-control"
                      id="nationality"
                      placeholder="الجنسية"
                      onChange={onChangeNationality}
                      value={nationality}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>رقم الهوية</b>
                    </h4>
                    <input
                      type="number"
                      // minLength={9}
                      // maxLength={9}
                      min={0}
                      name="identificationNumber"
                      style={{ fontSize: "1.8rem" }}
                      className="form-control"
                      id="identificationNumber"
                      placeholder="رقم الهوية"
                      onChange={onChangeIdentificationNumber}
                      value={identificationNumber}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>رقم الهاتف</b>
                    </h4>
                    <input
                      type="number"
                      min={9}
                      max={9}
                      name="phone"
                      style={{ fontSize: "1.8rem" }}
                      className="form-control"
                      id="phone"
                      placeholder="رقم الهاتف"
                      onChange={onChangePhone}
                      value={phone}
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
                    onChange={onChangeGender}
                    value={gender}
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
                      placeholder="العنوان"
                      onChange={onChangeAddress}
                      value={address}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h4>
                      <b>اسم الوظيفة أو الشركة التابع لها</b>
                    </h4>
                    <input
                      type="text"
                      maxLength={25}
                      name="companyName"
                      style={{ fontSize: "1.8rem" }}
                      className="form-control"
                      id="companyName"
                      placeholder="اسم الوظيفة أو الشركة التابع لها"
                      onChange={onChangeCompanyName}
                      value={companyName}
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
                      placeholder="الملاحظات التي تخص العميل"
                      onChange={onChangeNotes}
                      // value={name}
                      defaultValue={notes}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
              <button
                  type="submit"
                  style={{ fontSize: "2rem" }}
                  onClick={handleSubmit}
                  className="btn btn-primary mx-4 btn-sm waves-effect waves-light"
                >
                  تحديث
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

export default EditClientComponent;