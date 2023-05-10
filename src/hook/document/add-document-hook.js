import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDocument } from "../../redux/actions/documentAction";
import notify from "../useNotification";

const AddDocumentHook = () => {
  const dispatch = useDispatch();
  const defaultDocument = "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";
  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [document, setDocument] = useState(defaultDocument);
  const [caseId, setCaseId] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  //to change title state
  const onChangeTitle = (e) => {
    e.persist();
    setTitle(e.target.value);
  };

  //to change document state
  const onChangeDocument = (e) => {
    e.persist();
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      setDocument(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  //to change case id state
  const onChangeCaseId = (e) => {
    e.persist();
    setCaseId(e.target.value);
  };

  const res = useSelector((state) => state.allDocument.documents);

  // save data in database
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("document", selectedFile);
    formData.append("case", caseId);
    setLoading(true);
    setIsPress(true);
    await dispatch(createDocument(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setDocument(defaultDocument);
      setSelectedFile(null);
      setTitle("");
      setCaseId("");
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (res.status === 201) {
        notify("تمت عملية الاضافة بنجاح", "success");
      } else {
        res.data.errors.map((err) => notify(err.msg, "error"));
      }
    }
  }, [loading, res]);

  return [
    title,
    document,
    caseId,
    loading,
    isPress,
    handleSubmit,
    onChangeTitle,
    onChangeDocument,
    onChangeCaseId
  ];
};

export default AddDocumentHook;
