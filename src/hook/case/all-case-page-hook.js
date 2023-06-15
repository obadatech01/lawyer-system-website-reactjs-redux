import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCases, updateLimitCases, updatePageCases, updateSearchCases } from "../../redux/actions/caseAction";

const AllCasePageHook = () => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.allCase.limit);
  const page = useSelector((state) => state.allCase.page);
  const search = useSelector((state) => state.allCase.search);

  // when first load
  useEffect(() => {
    dispatch(getAllCases(limit, page, search));
  }, [limit, page, search, dispatch]);

  // to get state from redux
  const cases = useSelector((state) => state.allCase.cases);
  const loading = useSelector((state) => state.allCase.loading);

  let pageCount = 0;
  if (cases.paginationResult)
    pageCount = cases.paginationResult.numberOfPages;

  // when pressed page
  const getPage = (page) => {
    dispatch(updatePageCases(page));
    // console.log(page);
  };

  // when change limit
  const handleLimitChange = (e) => {
    e.persist();
    dispatch(updateLimitCases(e.target.value));
    // console.log(e.target.value);
  };

  // when change search
  const handleSearchChange = (e) => {
    e.persist();
    dispatch(updateSearchCases(e.target.value));
    // console.log(e.target.value);
  };

  return [cases, loading, pageCount, limit, search, getPage, handleLimitChange, handleSearchChange];
};

export default AllCasePageHook;
