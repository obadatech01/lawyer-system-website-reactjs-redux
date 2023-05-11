import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneClient, updateClient } from "../../redux/actions/userAction";
import notify from "../useNotification";
import { useNavigate } from "react-router-dom";

const EditProfileUserHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const run = async () => {
      await dispatch(getOneClient(id));
    };
    run();
  }, [dispatch, id]);

  //get one client
  const item = useSelector((state) => state.allClient.oneClient);

  // value state
  const defaultDocument = "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";
  const [name, setName] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [email, setEmail] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [address, setAddress] = useState("");
  const [permissions, setPermissions] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (item.data) {
      setName(item.data.name);
      setEmail(item.data.email);
      setIdentificationNumber(item.data.identificationNumber);
      setProfileImg(item.data.profileImg);
      setPhone(item.data.phone);
      setWhatsapp(item.data.whatsapp);
      setAddress(item.data.address);
      setPermissions(item.data.permissions);
      setLoading(true);
    }
  }, [item]);

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

  //to change permissions state
  const onChangePermissions = (e) => {
    e.persist();
    setPermissions(e.target.value)
  }

  //to save data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !identificationNumber ||
      !phone ||
      !whatsapp ||
      !profileImg ||
      !address ||
      !permissions
    ) {
      notify("من فضلك أكمل البيانات", "warn");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("identificationNumber", identificationNumber);
    formData.append("profileImg", profileImg);
    formData.append("phone", phone);
    formData.append("whatsapp", whatsapp);
    formData.append("address", address);
    formData.append("permissions", permissions);

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
      setIdentificationNumber("");
      setProfileImg(defaultDocument);
      setSelectedFile(null);
      setPhone("");
      setWhatsapp("");
      setAddress("");
      setPermissions("");
      setTimeout(() => setLoading(true), 1500);

      if(client) {
        if (client.status === 200) {
          notify("تمت عملية التعديل بنجاح", "success");
          window.location.replace('/clients');
          setTimeout(() => {
            navigate('/clients')
        }, 2000);
        } else {
          // console.log(client);
          // client.data.errors.map(err => notify(err.msg, "error"));
          notify("هناك مشكلة فى عملية التعديل", "error");
        }
      }
    }
  }, [loading, client, navigate]);

  return [name, email, identificationNumber, profileImg, phone, whatsapp, address, permissions, loading, handleSubmit, onChangeName, onChangeEmail, onChangeIdentificationNumber, onChangeProfileImg, onChangePhone, onChangeWhatsApp, onChangeAddress, onChangePermissions];

};

export default EditProfileUserHook;
