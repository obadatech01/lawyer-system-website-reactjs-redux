import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getOneDocument,
  updateDocument,
} from "../../redux/actions/documentAction";
import notify from "../useNotification";

const EditDocumentHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const run = async () => {
      await dispatch(getOneDocument(id));
    };
    run();
  }, [dispatch, id]);

  //get one document
  const item = useSelector((state) => state.allDocument.oneDocument);

  // value state
  const defaultDocument =
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";
  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [document, setDocument] = useState(defaultDocument);
  const [caseId, setCaseId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (item.data) {
      setTitle(item.data.name);
      setDocument(item.data.document);
      setCaseId(item.data.case._id);
      setLoading(true);
    }
  }, [item]);

  //to change title state
  const onChangeTitle = (e) => {
    e.persist();
    setTitle(e.target.value);
  };

  //to change document state
  const onChangeDocument = (e) => {
    e.persist();
    if (e.target.files && e.target.files[0]) {
      // console.log(e.target.files[0]);
      setDocument(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  //to change case id state
  const onChangeCaseId = (e) => {
    e.persist();
    setCaseId(e.target.value);
  };

  //to save data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !document || !caseId) {
      notify("من فضلك أكمل البيانات", "warn");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("document", selectedFile);
    formData.append("case", caseId);

    setTimeout(async () => {
      setLoading(true);
      await dispatch(updateDocument(id, formData));
      setLoading(false);
    }, 1000);
  };

  //get one document
  const documentUpdate = useSelector(
    (state) => state.allDocument.updateDocument
  );

  useEffect(() => {
    if (loading === false) {
      setDocument(defaultDocument);
      setSelectedFile(null);
      setTitle("");
      setCaseId("");
      setTimeout(() => setLoading(true), 1500);

      if (documentUpdate) {
        if (documentUpdate.status === 200) {
          notify("تمت عملية التعديل بنجاح", "success");
          window.location.replace("/documents");
          setTimeout(() => {
            navigate("/documents");
          }, 2000);
        } else {
          // console.log(documentUpdate);
          // documentUpdate.data.errors.map(err => notify(err.msg, "error"));
          notify("هناك مشكلة فى عملية التعديل", "error");
        }
      }
    }
  }, [loading, documentUpdate, navigate]);

  return [
    title,
    document,
    caseId,
    loading,
    handleSubmit,
    onChangeTitle,
    onChangeDocument,
    onChangeCaseId,
  ];
};

export default EditDocumentHook;
