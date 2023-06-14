import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeMePassword } from "../../redux/actions/authAction";
import notify from "../useNotification";

const ChangeMePasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangePassword = (e) => {
    e.persist();
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    e.persist();
    setConfirmPassword(e.target.value);
  };

  const onSubmit = async () => {
    if (password === "") {
      notify("من فضلك ادخل كلمة السر", "error");
      return;
    }

    if (password.length < 6) {
      notify("كلمة السر قصيرة أقل من 6 حروف", "error");
      return;
    }

    if (password !== confirmPassword) {
      notify("كلمة السر غير متطابقه مع تاكيد كلمه السر", "error");
      return;
    }

    setLoading(true);
    await dispatch(
      changeMePassword({
        password: password
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.changeMePassword);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        // console.log(res.status);
        if (res.status === 200) {
          notify("تم تغير كلمة السر بنجاح", "success");
          setTimeout(() => {
            navigate("/login");
          }, 1000);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
        if (res.data.status === "fail") {
          notify("هناك مشكلة فى عملية التعديل"  , "error");
        }
      }
    }
  }, [loading, res, navigate]);

  return [password, confirmPassword, onSubmit, onChangePassword, onChangeConfirmPassword];
};

export default ChangeMePasswordHook;
