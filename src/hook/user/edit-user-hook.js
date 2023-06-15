import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser, updateUser } from "../../redux/actions/userAction";
import notify from "../useNotification";
import { useNavigate } from "react-router-dom";

const EditUserHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const run = async () => {
      await dispatch(getOneUser(id));
    };
    run();
  }, [dispatch, id]);

  //get one client
  const item = useSelector((state) => state.allUser.oneUser);

  // value state
  const defaultDocument = "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";
  const [name, setName] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("ذكر");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (item.data) {
      setName(item.data.name);
      setIdentificationNumber(item.data.identificationNumber);
      setProfileImg(item.data.profileImg);
      setPhone(item.data.phone);
      setWhatsapp(item.data.whatsapp);
      setAddress(item.data.address);
      setGender(item.data.gender);
      setRole(item.data.role);
      setLoading(true);
    }
  }, [item]);

  //to change name state
  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value)
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

  //to change profileImg state
  const onChangeProfileImg = (e) => {
    e.persist();
    if (e.target.files && e.target.files[0]) {
      // console.log(e.target.files[0]);
      setProfileImg(URL.createObjectURL(e.target.files[0]))
      setSelectedFile(e.target.files[0]);
    }
  }

  //to save data
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedFile);
    if (
      !name ||
      !identificationNumber ||
      !phone ||
      !whatsapp ||
      !address ||
      !role
    ) {
      notify("من فضلك أكمل البيانات", "warn");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("identificationNumber", identificationNumber);
    if(selectedFile != null) {
      formData.append("profileImg", selectedFile)
    }
    formData.append("phone", phone);
    formData.append("whatsapp", whatsapp);
    formData.append("address", address);
    formData.append("gender", gender);
    formData.append("role", role);

    setTimeout(async () => {
      setLoading(true);
      await dispatch(updateUser(id, formData));
      setLoading(false);
    }, 1000);
  };

  //get one user
  const user = useSelector((state) => state.allUser.updateUser);

  useEffect(() => {
    if (loading === false) {
      setName("");
      setIdentificationNumber("");
      setProfileImg(defaultDocument);
      setSelectedFile(null);
      setPhone("");
      setWhatsapp("");
      setAddress("");
      setGender("");
      setRole("");
      setTimeout(() => setLoading(true), 1500);

      if(user) {
        if (user.status === 200) {
          notify("تمت عملية التعديل بنجاح", "success");
          window.location.replace('/users');
          setTimeout(() => {
            navigate('/users')
        }, 2000);
        } else {
          // console.log(user);
          // user.data.errors.map(err => notify(err.msg, "error"));
          notify("هناك مشكلة فى عملية التعديل", "error");
        }
      }
    }
  }, [loading, user, navigate]);

  return [name, identificationNumber, profileImg, phone, whatsapp, address, gender, role, handleSubmit, onChangeName, onChangeIdentificationNumber, onChangeProfileImg, onChangePhone, onChangeWhatsApp, onChangeAddress, onChangeGender, onChangeRole];
};

export default EditUserHook;
