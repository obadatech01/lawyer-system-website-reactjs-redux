import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneDocument } from "../../redux/actions/documentAction";

const ViewDocumentOneHook = (id) => {
  const dispatch = useDispatch();

  // when first load
  useEffect(() => {
    dispatch(getOneDocument(id));
  }, [dispatch, id]);

  // to get state from redux
  const oneDocument = useSelector((state) => state.allDocument.oneDocument);
  let item = [];
  if(oneDocument.data) {
    item = oneDocument.data;
  } else {
    item = [];
  }
  // console.log(item);
  return [item];
}

export default ViewDocumentOneHook;