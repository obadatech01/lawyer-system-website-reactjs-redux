import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createClient } from "../../redux/actions/clientAction";
import Spinner from "react-bootstrap/esm/Spinner";
import notify from "../../hook/useNotification";

const AddClientComponent = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("ذكر");
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const res = useSelector((state) => state.allClient.client);

  // save data in database
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      nationality,
      identificationNumber,
      phone,
      gender,
      address,
      companyName,
      notes,
    };
    setLoading(true);
    setIsPress(true);
    await dispatch(createClient(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setName("");
      setEmail("");
      setNationality("");
      setIdentificationNumber("");
      setPhone("");
      setGender("");
      setAddress("");
      setCompanyName("");
      setNotes("");
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (res.status === 201) {
        notify("تمت عملية الاضافة بنجاح", "success");
      } else {
        notify("هناك مشكله فى عملية الاضافة", "error");
      }
    }
  }, [loading, res]);

  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <h4 className="box-title text-center">
            إضافة عميل جديد
          </h4>
          <div className="row">
            <div className="card-content">
              {/* <from action="#"> */}
              <div className="col-md-6">
                <div className="padding-20">
                  <h5>
                    <b>اسم العميل</b>
                  </h5>
                  <input
                    type="text"
                    className="form-control"
                    maxLength={25}
                    name="name"
                    id="name"
                    placeholder="اسم العميل"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
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
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h5>
                      <b>الجنسية</b>
                    </h5>
                    <input
                      type="text"
                      maxLength={25}
                      name="nationality"
                      className="form-control"
                      id="nationality"
                      placeholder="الجنسية"
                      onChange={(e) => setNationality(e.target.value)}
                      value={nationality}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h5>
                      <b>رقم الهوية</b>
                    </h5>
                    <input
                      type="text"
                      maxLength={9}
                      name="identificationNumber"
                      className="form-control"
                      id="identificationNumber"
                      placeholder="رقم الهوية"
                      onChange={(e) => setIdentificationNumber(e.target.value)}
                      value={identificationNumber}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h5>
                      <b>رقم الهاتف</b>
                    </h5>
                    <input
                      type="number"
                      min={9}
                      max={9}
                      name="phone"
                      className="form-control"
                      id="phone"
                      placeholder="رقم الهاتف"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
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
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
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
                      placeholder="العنوان"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                    />
                  </div>
                  <div className="margin-top-20">
                    <h5>
                      <b>اسم الوظيفة أو الشركة التابع لها</b>
                    </h5>
                    <input
                      type="text"
                      maxLength={25}
                      name="companyName"
                      className="form-control"
                      id="companyName"
                      placeholder="اسم الوظيفة أو الشركة التابع لها"
                      onChange={(e) => setCompanyName(e.target.value)}
                      value={companyName}
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
                      onChange={(e) => setNotes(e.target.value)}
                      // value={name}
                      defaultValue={notes}
                    />
                  </div>
                </div>
              </div> 
              <div className="col-md-12">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary"
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

export default AddClientComponent;
