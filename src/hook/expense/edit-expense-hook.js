import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneExpense, updateExpense } from "../../redux/actions/expenseAction";
import notify from "../useNotification";
import { useNavigate } from "react-router-dom";

const EditExpenseHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const run = async () => {
      await dispatch(getOneExpense(id));
    };
    run();
  }, [dispatch, id]);

  //get one Expense
  const item = useSelector((state) => state.allExpense.oneExpense);

  // value state
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [exchangeDate, setExchangeDate] = useState("");
  const [exchangeMethod, setExchangeMethod] = useState("كاش");
  const [userName, setUserName] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (item.data) {
      setTitle(item.data.title);
      setAmount(item.data.amount);
      setExchangeDate(item.data.exchangeDate);
      setExchangeMethod(item.data.exchangeMethod);
      setUserName(item.data.userName);
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

  //to save data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !title ||
      !amount ||
      !exchangeDate ||
      !exchangeMethod ||
      !userName ||
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
      userName,
      notes,
    };

    setTimeout(async () => {
      setLoading(true);
      await dispatch(updateExpense(id, formData));
      setLoading(false);
    }, 1000);
  };

  // get one expense
  const expense = useSelector((state) => state.allExpense.updateExpense);

  useEffect(() => {
    if (loading === false) {
      setTitle("");
      setAmount("");
      setExchangeDate("");
      setExchangeMethod("كاش");
      setUserName("");
      setNotes("");
      setTimeout(() => setLoading(true), 1500);

      if(expense) {
        if (expense.status === 200) {
          notify("تمت عملية التعديل بنجاح", "success");
          window.location.replace('/expenses');
          setTimeout(() => {
            navigate('/expenses')
        }, 2000);
        } else {
          // console.log(expense);
          // expense.data.errors.map(err => notify(err.msg, "error"));
          notify("هناك مشكلة فى عملية التعديل", "error");
        }
      }
    }
  }, [loading, expense, navigate]);

  return [title, amount, exchangeDate, exchangeMethod, userName, notes, handleSubmit, onChangeTitle, onChangeAmount, onChangeExchangeDate, onChangeExchangeMethod, onChangeUserName, onChangeNotes];

};

export default EditExpenseHook;
