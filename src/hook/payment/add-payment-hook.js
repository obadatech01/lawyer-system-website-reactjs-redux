import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPayment } from "../../redux/actions/paymentAction";
import notify from "../useNotification";
import ProtectedAmount from "../../Components/Utils/ProtectedAmount";

const AddPaymentHook = () => {
  const dispatch = useDispatch();
  const [maxAddExpense, maxAddPayment, setUrl] = ProtectedAmount();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [exchangeDate, setExchangeDate] = useState("");
  const [caseId, setCaseId] = useState("");
  const [exchangeMethod, setExchangeMethod] = useState("كاش");
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

  //to change caseId state
  const onChangeCaseId = (e) => {
    e.persist();
    setCaseId(e.target.value);
    setUrl(`/api/v1/home/report?caseId=${caseId}`)
  }

  //to change exchangeMethod state
  const onChangeExchangeMethod = (e) => {
    e.persist();
    setExchangeMethod(e.target.value)
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
      case: caseId,
      exchangeMethod,
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
      setCaseId("");
      setExchangeMethod("كاش");
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

  return [title, maxAddPayment, amount, exchangeDate, caseId, exchangeMethod, notes, loading, isPress, handleSubmit, onChangeTitle, onChangeAmount, onChangeExchangeDate, onChangeCaseId, onChangeExchangeMethod, onChangeNotes];

};

export default AddPaymentHook;
