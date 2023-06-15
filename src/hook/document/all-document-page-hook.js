import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDocuments, updateLimitDocuments, updatePageDocuments, updateSearchDocuments } from "../../redux/actions/documentAction";

const AllDocumentPageHook = () => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.allDocument.limit);
  const page = useSelector((state) => state.allDocument.page);
  const search = useSelector((state) => state.allDocument.search);

  // when first load
  useEffect(() => {
    dispatch(getAllDocuments(limit, page, search));
  }, [limit, page, search, dispatch]);

  // to get state from redux
  const documents = useSelector((state) => state.allDocument.documents);
  const loading = useSelector((state) => state.allDocument.loading);

  let pageCount = 0;
  if (documents.paginationResult)
    pageCount = documents.paginationResult.numberOfPages;

  // when pressed page
  const getPage = (page) => {
    dispatch(updatePageDocuments(page));
    // console.log(page);
  };

  // when change limit
  const handleLimitChange = (e) => {
    e.persist();
    dispatch(updateLimitDocuments(e.target.value));
    // console.log(e.target.value);
  };

  // when change search
  const handleSearchChange = (e) => {
    e.persist();
    dispatch(updateSearchDocuments(e.target.value));
    // console.log(e.target.value);
  };

  return [documents, loading, pageCount, limit, search, getPage, handleLimitChange, handleSearchChange];
};

export default AllDocumentPageHook;
