import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDocument } from "../../redux/actions/documentAction";

const AllDocumentPageHook = () => {
  const dispatch = useDispatch();

  // when first load
  useEffect(() => {
    dispatch(getAllDocument(3));
  }, [dispatch]);

  // to get state from redux
  const documents = useSelector((state) => state.allDocument.documents);
  const loading = useSelector((state) => state.allDocument.loading);

  let pageCount = 0;
  if (documents.paginationResult)
    pageCount = documents.paginationResult.numberOfPages;

  return [documents, loading, pageCount];
};

export default AllDocumentPageHook;
