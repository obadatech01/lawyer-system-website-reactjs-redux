import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneCase, updateCase } from "../../redux/actions/caseAction";
import notify from "../useNotification";
import { useNavigate } from "react-router-dom";

const EditCaseHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const run = async () => {
      await dispatch(getOneCase(id));
    };
    run();
  }, [dispatch, id]);

  //get one case
  const item = useSelector((state) => state.allCase.oneCase);

  // value state
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

  useEffect(() => {
    if (item.data) {
      setTitle(item.data.title);
      setType(item.data.type);
      setCourtCaseNumber(item.data.courtCaseNumber);
      setCourtName(item.data.courtName);
      setJudgeName(item.data.judgeName);
      setClient(item.data.client);
      setClientType(item.data.clientType);
      setCost(item.data.cost);
      setOpponentName(item.data.opponentName);
      setOpponentIdentificationNumber(item.data.opponentIdentificationNumber);
      setOpponentPhone(item.data.opponentPhone);
      setOpponentAddress(item.data.opponentAddress);
      setOpponentType(item.data.opponentType);
      setOpponentLawyerName(item.data.opponentLawyerName);
      setStatus(item.data.status);
      setNotes(item.data.notes);
      setLoading(true);
    }
  }, [item]);

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

  //to save data
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (
      !title ||
      !type ||
      !courtCaseNumber ||
      !courtName ||
      !judgeName ||
      !cost ||
      !opponentName ||
      !opponentIdentificationNumber ||
      !opponentPhone ||
      !opponentAddress ||
      !opponentType ||
      !opponentLawyerName ||
      !status ||
      !notes
    ) {
      notify("من فضلك أكمل البيانات", "warn");
      return;
    }

    const formData = {
      title,
      type,
      courtCaseNumber,
      courtName,
      judgeName,
      client: client._id,
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

    setTimeout(async () => {
      setLoading(true);
      await dispatch(updateCase(id, formData));
      setLoading(false);
    }, 1000);
  };

  //get one case
  const oneCase = useSelector((state) => state.allCase.updateCase);

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
      setTimeout(() => setLoading(true), 1500);

      if(oneCase) {
        if (oneCase.status === 200) {
          notify("تمت عملية التعديل بنجاح", "success");
          window.location.replace('/cases');
          setTimeout(() => {
            navigate('/cases')
        }, 2000);
        } else {
          notify("هناك مشكلة فى عملية التعديل", "error");
        }
      }
    }
  }, [loading, oneCase, navigate]);

  return [title, type, courtCaseNumber, courtName, judgeName, client, clientType, cost, opponentName, opponentIdentificationNumber, opponentPhone, opponentAddress, opponentType, opponentLawyerName, status, notes, handleSubmit, onChangeTitle, onChangeType, onChangeCourtCaseNumber, onChangeCourtName, onChangeJudgeName, onChangeClient, onChangeClientType, onChangeCost, onChangeOpponentName, onChangeOpponentIdentificationNumber, onChangeOpponentPhone, onChangeOpponentAddress, onChangeOpponentType, onChangeOpponentLawyerName, onChangeStatus, onChangeNotes];

};

export default EditCaseHook;
