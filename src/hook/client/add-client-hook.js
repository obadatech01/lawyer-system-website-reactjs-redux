import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createClient } from "../../redux/actions/clientAction";
import notify from "../../hook/useNotification";

const AddClientHook = () => {
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

  const res = useSelector((state) => state.allClient.clients);

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

  //to change nationality state
  const onChangeNationality = (e) => {
    e.persist();
    setNationality(e.target.value)
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

  //to change gender state
  const onChangeGender = (e) => {
    e.persist();
    setGender(e.target.value)
  }

  //to change address state
  const onChangeAddress = (e) => {
    e.persist();
    setAddress(e.target.value)
  }

  //to change companyName state
  const onChangeCompanyName = (e) => {
    e.persist();
    setCompanyName(e.target.value)
  }

  //to change notes state
  const onChangeNotes = (e) => {
    e.persist();
    setNotes(e.target.value)
  }

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
        setTimeout(() => {
          window.location.href = "/clients";
        }, 1500);
      } else {
        res.data.errors.map(err => notify(err.msg, "error"));
      }
    }
  }, [loading, res]);

  return [name, email, nationality, identificationNumber, phone, gender, address, companyName, notes, loading, isPress, handleSubmit, onChangeName, onChangeEmail, onChangeNationality, onChangeIdentificationNumber, onChangePhone, onChangeGender, onChangeAddress, onChangeCompanyName, onChangeNotes];
};

export default AddClientHook;
