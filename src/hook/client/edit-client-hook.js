import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneClient, updateClient } from "../../redux/actions/clientAction";
import notify from "../useNotification";

const EditClientHook = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const run = async () => {
      await dispatch(getOneClient(id));
    };
    run();
  }, [dispatch, id]);

  //get one client
  const item = useSelector((state) => state.allClient.oneClient);

  // value state
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

  useEffect(() => {
    if (item.data) {
      setName(item.data.name);
      setEmail(item.data.email);
      setNationality(item.data.nationality);
      setIdentificationNumber(item.data.identificationNumber);
      setPhone(item.data.phone);
      setGender(item.data.gender);
      setAddress(item.data.address);
      setCompanyName(item.data.companyName);
      setNotes(item.data.notes);
      setLoading(true);
    }
  }, [item]);

  //to change name state
  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  //to change email state
  const onChangeEmail = (e) => {
    e.persist();
    setEmail(e.target.value);
  };

  //to change nationality state
  const onChangeNationality = (e) => {
    e.persist();
    setNationality(e.target.value);
  };

  //to change identificationNumber state
  const onChangeIdentificationNumber = (e) => {
    e.persist();
    setIdentificationNumber(e.target.value);
  };

  //to change phone state
  const onChangePhone = (e) => {
    e.persist();
    setPhone(e.target.value);
  };

  //to change gender state
  const onChangeGender = (e) => {
    e.persist();
    setGender(e.target.value);
  };

  //to change address state
  const onChangeAddress = (e) => {
    e.persist();
    setAddress(e.target.value);
  };

  //to change companyName state
  const onChangeCompanyName = (e) => {
    e.persist();
    setCompanyName(e.target.value);
  };

  //to change notes state
  const onChangeNotes = (e) => {
    e.persist();
    setNotes(e.target.value);
  };

  //to save data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !nationality ||
      !identificationNumber ||
      !phone ||
      !gender ||
      !address ||
      !companyName ||
      !notes
    ) {
      notify("من فضلك أكمل البيانات", "warn");
      return;
    }

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

    setTimeout(async () => {
      setLoading(true);
      await dispatch(updateClient(id, formData));
      setLoading(false);
    }, 1000);
  };

  //get one client
  const client = useSelector((state) => state.allClient.updateClient);

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
      setTimeout(() => setLoading(true), 1500);
      
      if(client) {
        if (client.status === 200) {
          notify("تمت عملية التعديل بنجاح", "success");
          window.location.replace('/clients');
        } else {
          notify("هناك مشكلة فى عملية التعديل", "error");
        }
      }
    }
  }, [loading, client]);

  return [name, email, nationality, identificationNumber, phone, gender, address, companyName, notes, handleSubmit, onChangeName, onChangeEmail, onChangeNationality, onChangeIdentificationNumber, onChangePhone, onChangeGender, onChangeAddress, onChangeCompanyName, onChangeNotes];

};

export default EditClientHook;
