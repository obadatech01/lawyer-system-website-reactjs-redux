import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOnePayment, updatePayment } from "../../redux/actions/paymentAction";
import notify from "../useNotification";
import { useNavigate } from "react-router-dom";

const EditPaymentHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const run = async () => {
      await dispatch(getOnePayment(id));
    };
    run();
  }, [dispatch, id]);

  //get one Payment
  const item = useSelector((state) => state.allPayment.onePayment);

  // value state
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [exchangeDate, setExchangeDate] = useState("");
  const [exchangeMethod, setExchangeMethod] = useState("كاش");
  const [user, setUser] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (item.data) {
      setTitle(item.data.title);
      setAmount(item.data.amount);
      setExchangeDate(item.data.exchangeDate);
      setExchangeMethod(item.data.exchangeMethod);
      setUser(item.data.user);
      setNotes(item.data.notes);
      setLoading(true);
    }
  }, [item]);

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

  //to save data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !title ||
      !amount ||
      !exchangeDate ||
      !exchangeMethod ||
      !user ||
      !notes
    ) {
      notify("من فضلك أكمل البيانات", "warn");
      return;
    }

    const formData = {
      title,
      amount,
      exchangeDate,
      exchangeMethod,
      user,
      notes,
    };

    setTimeout(async () => {
      setLoading(true);
      await dispatch(updatePayment(id, formData));
      setLoading(false);
    }, 1000);
  };

  // get one payment
  const payment = useSelector((state) => state.allPayment.updatePayment);

  useEffect(() => {
    if (loading === false) {
      setTitle("");
      setAmount("");
      setExchangeDate("");
      setExchangeMethod("كاش");
      setUser("");
      setNotes("");
      setTimeout(() => setLoading(true), 1500);

      if(payment) {
        if (payment.status === 200) {
          notify("تمت عملية التعديل بنجاح", "success");
          window.location.replace('/payments');
          setTimeout(() => {
            navigate('/payments')
        }, 2000);
        } else {
          // console.log(payment);
          // payment.data.errors.map(err => notify(err.msg, "error"));
          notify("هناك مشكلة فى عملية التعديل", "error");
        }
      }
    }
  }, [loading, payment, navigate]);

  return [title, amount, exchangeDate, exchangeMethod, user, notes, loading, handleSubmit, onChangeTitle, onChangeAmount, onChangeExchangeDate, onChangeExchangeMethod, onChangeUser, onChangeNotes];

};

export default EditPaymentHook;
