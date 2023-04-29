import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCase } from "../../redux/actions/caseAction";

const AllCasePageHook = () => {
  const dispatch = useDispatch();

  // when first load
  useEffect(() => {
    dispatch(getAllCase(3));
  }, [dispatch]);

  // to get state from redux
  const cases = useSelector((state) => state.allCase.cases);
  const loading = useSelector((state) => state.allCase.loading);

  let pageCount = 0;
  if (cases.paginationResult)
    pageCount = cases.paginationResult.numberOfPages;

  return [cases, loading, pageCount];
};

export default AllCasePageHook;
