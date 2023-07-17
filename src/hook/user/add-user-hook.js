import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/actions/userAction";
import notify from "../useNotification";

const AddUserHook = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("ذكر");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const res = useSelector((state) => state.allUser.users);

  //to change name state
  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value)
  }

  //to change email state
  const onChangeEmail = (e) => {
    e.persist();
    setEmail(e.target.value)
  }

  //to change identificationNumber state
  const onChangeIdentificationNumber = (e) => {
    e.persist();
    setIdentificationNumber(e.target.value)
  }

  //to change phone state
  const onChangePhone = (e) => {
    e.persist();
    setPhone(e.target.value)
  }

  //to change whatsApp state
  const onChangeWhatsApp = (e) => {
    e.persist();
    setWhatsapp(e.target.value)
  }

  //to change address state
  const onChangeAddress = (e) => {
    e.persist();
    setAddress(e.target.value)
  }

  //to change gender state
  const onChangeGender = (e) => {
    e.persist();
    setGender(e.target.value)
  }

  //to change role state
  const onChangeRole = (e) => {
    e.persist();
    setRole(e.target.value)
  }

  //to change password state
  const onChangePassword = (e) => {
    e.persist();
    setPassword(e.target.value)
  }

  // save data in database
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      identificationNumber,
      phone,
      whatsapp,
      address,
      gender,
      role,
      password
    };

    setLoading(true);
    setIsPress(true);
    await dispatch(createUser(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setName("");
      setEmail("");
      setIdentificationNumber("");
      setPhone("");
      setWhatsapp("");
      setAddress("");
      setGender("");
      setRole("");
      setPassword("");
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (res.status === 201) {
        notify("تمت عملية الاضافة بنجاح", "success");
        setTimeout(() => {
          window.location.href = "/users";
        }, 1500);
      } else {
        res.data.errors.map(err => notify(err.msg, "error"));
      }
    }
  }, [loading, res]);

  return [name, email, identificationNumber, phone, whatsapp, address, gender, role, password, loading, isPress, handleSubmit, onChangeName, onChangeEmail, onChangeIdentificationNumber, onChangePhone, onChangeWhatsApp, onChangeAddress, onChangeGender, onChangeRole, onChangePassword];
};

export default AddUserHook;
