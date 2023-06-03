import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/actions/userAction";
import notify from "../useNotification";

const AddUserHook = () => {
  const dispatch = useDispatch();
  const defaultDocument = "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";
  const [name, setName] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [email, setEmail] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [address, setAddress] = useState("");
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

  //to change profileImg state
  const onChangeProfileImg = (e) => {
    e.persist();
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      setProfileImg(URL.createObjectURL(e.target.files[0]))
      setSelectedFile(e.target.files[0]);
    }
  }

  // save data in database
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("identificationNumber", identificationNumber);
    formData.append("profileImg", profileImg);
    formData.append("phone", phone);
    formData.append("whatsapp", whatsapp);
    formData.append("address", address);

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
      setProfileImg(defaultDocument);
      setSelectedFile(null);
      setPhone("");
      setWhatsapp("");
      setAddress("");
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (res.status === 201) {
        notify("تمت عملية الاضافة بنجاح", "success");
      } else {
        res.data.errors.map(err => notify(err.msg, "error"));
      }
    }
  }, [loading, res]);

  return [name, email, identificationNumber, profileImg, phone, whatsapp, address, loading, isPress, handleSubmit, onChangeName, onChangeEmail, onChangeIdentificationNumber, onChangeProfileImg, onChangePhone, onChangeWhatsApp, onChangeAddress];
};

export default AddUserHook;
