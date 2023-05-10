import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPayment } from "../../redux/actions/paymentAction";
import notify from "../useNotification";

const AddPaymentHook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [exchangeDate, setExchangeDate] = useState("");
  const [exchangeMethod, setExchangeMethod] = useState("كاش");
  const [user, setUser] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const res = useSelector((state) => state.allPayment.payments);

  //to change title state
  const onChangeTitle = (e) => {
    e.persist();
    setTitle(e.target.value)
  }

  //to change amount state
  const onChangeAmount = (e) => {
    e.persist();
    setAmount(e.target.value)
  }

  //to change exchangeDate state
  const onChangeExchangeDate = (e) => {
    e.persist();
    setExchangeDate(e.target.value)
  }

  //to change exchangeMethod state
  const onChangeExchangeMethod = (e) => {
    e.persist();
    setExchangeMethod(e.target.value)
  }

  //to change user state
  const onChangeUser = (e) => {
    e.persist();
    setUser(e.target.value)
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
      title,
      amount,
      exchangeDate,
      exchangeMethod,
      user,
      notes,
    };
    setLoading(true);
    setIsPress(true);
    await dispatch(createPayment(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setTitle("");
      setAmount("");
      setExchangeDate("");
      setExchangeMethod("كاش");
      setUser("");
      setNotes("");
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (res.status === 201) {
        notify("تمت عملية الاضافة بنجاح", "success");
      } else {
        res.data.errors.map(err => notify(err.msg, "error"));
      }
    }
  }, [loading, res]);

  return [title, amount, exchangeDate, exchangeMethod, user, notes, loading, isPress, handleSubmit, onChangeTitle, onChangeAmount, onChangeExchangeDate, onChangeExchangeMethod, onChangeUser, onChangeNotes];
};

export default AddPaymentHook;
