import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hook/useNotification";
import { createCase } from "../../redux/actions/caseAction";

const AddCaseHook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [courtCaseNumber, setCourtCaseNumber] = useState("");
  const [courtName, setCourtName] = useState("");
  const [judgeName, setJudgeName] = useState("");
  const [client, setClient] = useState("");
  const [clientType, setClientType] = useState("");
  const [cost, setCost] = useState("");
  const [opponentName, setOpponentName] = useState("");
  const [opponentIdentificationNumber, setOpponentIdentificationNumber] = useState("");
  const [opponentPhone, setOpponentPhone] = useState("");
  const [opponentAddress, setOpponentAddress] = useState("");
  const [opponentType, setOpponentType] = useState("");
  const [opponentLawyerName, setOpponentLawyerName] = useState("");
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const res = useSelector((state) => state.allCase.cases);

  //to change title state
  const onChangeTitle = (e) => {
    e.persist();
    setTitle(e.target.value);
  };

  //to change title state
  const onChangeType = (e) => {
    e.persist();
    setType(e.target.value);
  };

  //to change title state
  const onChangeCourtCaseNumber = (e) => {
    e.persist();
    setCourtCaseNumber(e.target.value);
  };

  //to change title state
  const onChangeCourtName = (e) => {
    e.persist();
    setCourtName(e.target.value);
  };

  //to change title state
  const onChangeJudgeName = (e) => {
    e.persist();
    setJudgeName(e.target.value);
  };

  //to change title state
  const onChangeClient = (e) => {
    e.persist();
    setClient(e.target.value);
  };

  //to change title state
  const onChangeClientType = (e) => {
    e.persist();
    setClientType(e.target.value);
  };

  //to change title state
  const onChangeCost = (e) => {
    e.persist();
    setCost(e.target.value);
  };

  //to change title state
  const onChangeOpponentName = (e) => {
    e.persist();
    setOpponentName(e.target.value);
  };

  //to change opponentIdentificationNumber state
  const onChangeOpponentIdentificationNumber = (e) => {
    e.persist();
    setOpponentIdentificationNumber(e.target.value);
  };

  //to change title state
  const onChangeOpponentPhone = (e) => {
    e.persist();
    setOpponentPhone(e.target.value);
  };

  //to change title state
  const onChangeOpponentAddress = (e) => {
    e.persist();
    setOpponentAddress(e.target.value);
  };

  //to change title state
  const onChangeOpponentType = (e) => {
    e.persist();
    setOpponentType(e.target.value);
  };

  //to change title state
  const onChangeOpponentLawyerName = (e) => {
    e.persist();
    setOpponentLawyerName(e.target.value);
  };

  //to change title state
  const onChangeStatus = (e) => {
    e.persist();
    setStatus(e.target.value);
  };

  //to change title state
  const onChangeNotes = (e) => {
    e.persist();
    setNotes(e.target.value);
  };

  // save data in database
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      type,
      courtCaseNumber,
      courtName,
      judgeName,
      client,
      clientType,
      cost,
      opponentName,
      opponentIdentificationNumber,
      opponentPhone,
      opponentAddress,
      opponentType,
      opponentLawyerName,
      status,
      notes,
    };
    setLoading(true);
    setIsPress(true);
    await dispatch(createCase(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setTitle("");
      setType("");
      setCourtCaseNumber("");
      setCourtName("");
      setJudgeName("");
      setClient("");
      setClientType("");
      setCost("");
      setOpponentName("");
      setOpponentIdentificationNumber("");
      setOpponentPhone("");
      setOpponentAddress("");
      setOpponentType("");
      setOpponentLawyerName("");
      setStatus("");
      setNotes("");
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (res.status === 201) {
        notify("تمت عملية الاضافة بنجاح", "success");
        setTimeout(() => {
          window.location.href = "/cases";
        }, 1500);
      } else {
        // console.log("res",res);
        res.data.errors.map((err) => notify(err.msg, "error"));
      }
    }
  }, [loading, res]);

  return [
    title,
    type,
    courtCaseNumber,
    courtName,
    judgeName,
    client,
    clientType,
    cost,
    opponentName,
    opponentIdentificationNumber,
    opponentPhone,
    opponentAddress,
    opponentType,
    opponentLawyerName,
    status,
    notes,
    loading,
    isPress,
    handleSubmit,
    onChangeTitle,
    onChangeType,
    onChangeCourtCaseNumber,
    onChangeCourtName,
    onChangeJudgeName,
    onChangeClient,
    onChangeClientType,
    onChangeCost,
    onChangeOpponentName,
    onChangeOpponentIdentificationNumber,
    onChangeOpponentPhone,
    onChangeOpponentAddress,
    onChangeOpponentType,
    onChangeOpponentLawyerName,
    onChangeStatus,
    onChangeNotes,
  ];
};

export default AddCaseHook;
