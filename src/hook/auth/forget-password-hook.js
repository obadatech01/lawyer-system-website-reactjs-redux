import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgetPassword } from "../../redux/actions/authAction";
import notify from "../useNotification";

const ForgetPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeEmail = (e) => {
    e.persist();
    setEmail(e.target.value);
  };

  const onSubmit = async () => {
    if (!email) {
      notify("من فضلك أدخل بريدك الإلكتروني", "error");
      return;
    }
    localStorage.setItem("user-email", email);
    setLoading(true);
    await dispatch(
      forgetPassword({
        email,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.forgetPassword);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        // console.log(res);
        if (res.data.status === "Success") {
          notify("تم ارسال الكود للايميل بنجاح", "success");
          setTimeout(() => {
            navigate("/verify-code");
          }, 1000);
        }
        if (res.data.status === "fail") {
          notify("هذا الحساب غير موجود لدينا", "error");
        }
      }
    }
  }, [loading, res, navigate, dispatch]);

  return [onChangeEmail, email, onSubmit,];
};

export default ForgetPasswordHook;
