import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneSession, updateSession } from "../../redux/actions/sessionAction";
import notify from "../useNotification";
import { useNavigate } from "react-router-dom";

const EditSessionHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const run = async () => {
      await dispatch(getOneSession(id));
    };
    run();
  }, [dispatch, id]);

  //get one session
  const item = useSelector((state) => state.allSession.oneSession);

  // value state
  const [title, setTitle] = useState("");
  const [lawyerName, setLawyerName] = useState("");
  const [sessionDate, setSessionDate] = useState("");
  const [caseId, setCaseId] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (item.data) {
      setTitle(item.data.name);
      setLawyerName(item.data.lawyerName);
      setSessionDate(item.data.sessionDate);
      setCaseId(item.data.caseId);
      setNotes(item.data.notes);
      setLoading(true);
    }
  }, [item]);

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

  //to save data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !title ||
      !lawyerName ||
      !sessionDate ||
      !caseId ||
      !notes
    ) {
      notify("من فضلك أكمل البيانات", "warn");
      return;
    }

    const formData = {
      title,
      lawyerName,
      sessionDate,
      caseId,
      notes
    };

    setTimeout(async () => {
      setLoading(true);
      await dispatch(updateSession(id, formData));
      setLoading(false);
    }, 1000);
  };

  //get one session
  const session = useSelector((state) => state.allSession.updateSession);

  useEffect(() => {
    if (loading === false) {
      setTitle("");
      setLawyerName("");
      setSessionDate("");
      setCaseId("");
      setNotes("");
      setTimeout(() => setLoading(true), 1500);

      if(session) {
        if (session.status === 200) {
          notify("تمت عملية التعديل بنجاح", "success");
          window.location.replace('/sessions');
          setTimeout(() => {
            navigate('/sessions')
        }, 2000);
        } else {
          // console.log(session);
          // session.data.errors.map(err => notify(err.msg, "error"));
          notify("هناك مشكلة فى عملية التعديل", "error");
        }
      }
    }
  }, [loading, session, navigate]);

  return [title, lawyerName, sessionDate, caseId, notes, handleSubmit, onChangeTitle, onChangeLawyerName, onChangeSessionDate, onChangeCaseId, onChangeNotes];

};

export default EditSessionHook;
