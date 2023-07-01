import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createExpense } from "../../redux/actions/expenseAction";
import notify from "../useNotification";
import { useGetDataToken } from "../../hooks/useGetData";

const AddExpenseHook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [exchangeDate, setExchangeDate] = useState("");
  const [exchangeMethod, setExchangeMethod] = useState("كاش");
  const [userName, setUserName] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const res = useSelector((state) => state.allExpense.expenses);

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

  //to change userName state
  const onChangeUserName = (e) => {
    e.persist();
    setUserName(e.target.value)
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
      userName,
      notes,
    };
    setLoading(true);
    setIsPress(true);
    await dispatch(createExpense(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setTitle("");
      setAmount("");
      setExchangeDate("");
      setExchangeMethod("كاش");
      setUserName("");
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

  return [title, amount, exchangeDate, exchangeMethod, userName, notes, loading, isPress, handleSubmit, onChangeTitle, onChangeAmount, onChangeExchangeDate, onChangeExchangeMethod, onChangeUserName, onChangeNotes];
};

export default AddExpenseHook;
