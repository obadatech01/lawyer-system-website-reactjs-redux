import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSession } from "../../redux/actions/sessionAction";
import notify from "../useNotification";

const AddSessionHook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [lawyerName, setLawyerName] = useState("");
  const [sessionDate, setSessionDate] = useState("");
  const [caseId, setCaseId] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const res = useSelector((state) => state.allSession.sessions);

  //to change title state
  const onChangeTitle = (e) => {
    e.persist();
    setTitle(e.target.value)
  }

  //to change lawyerName state
  const onChangeLawyerName = (e) => {
    e.persist();
    setLawyerName(e.target.value)
  }

  //to change sessionDate state
  const onChangeSessionDate = (e) => {
    e.persist();
    setSessionDate(e.target.value)
  }

  //to change caseId state
  const onChangeCaseId = (e) => {
    e.persist();
    setCaseId(e.target.value)
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
      lawyerName,
      sessionDate,
      case: caseId,
      notes,
    };
    setLoading(true);
    setIsPress(true);
    await dispatch(createSession(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setTitle("");
      setLawyerName("");
      setSessionDate("");
      setCaseId("");
      setNotes("");
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (res.status === 201) {
        notify("تمت عملية الاضافة بنجاح", "success");
        setTimeout(() => {
          window.location.href = "/sessions";
        }, 1500);
      } else {
        res.data.errors.map(err => notify(err.msg, "error"));
      }
    }
  }, [loading, res]);

  return [title, lawyerName, sessionDate, caseId, notes, loading, isPress, handleSubmit, onChangeTitle, onChangeLawyerName, onChangeSessionDate, onChangeCaseId, onChangeNotes];
};

export default AddSessionHook;
