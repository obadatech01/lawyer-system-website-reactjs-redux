import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllExpenses, updateLimitExpenses, updatePageExpenses, updateSearchExpenses } from "../../redux/actions/expenseAction";

const AllExpensePageHook = () => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.allExpense.limit);
  const page = useSelector((state) => state.allExpense.page);
  const search = useSelector((state) => state.allExpense.search);

  // when first load
  useEffect(() => {
    dispatch(getAllExpenses(limit, page, search));
  }, [limit, page, search, dispatch]);

  // to get state from redux
  const expenses = useSelector((state) => state.allExpense.expenses);
  const loading = useSelector((state) => state.allExpense.loading);

  let pageCount = 0;
  if (expenses.paginationResult)
    pageCount = expenses.paginationResult.numberOfPages;

  // when pressed page
  const getPage = (page) => {
    dispatch(updatePageExpenses(page));
    // console.log(page);
  };

  // when change limit
  const handleLimitChange = (e) => {
    e.persist();
    dispatch(updateLimitExpenses(e.target.value));
    // console.log(e.target.value);
  };

  // when change search
  const handleSearchChange = (e) => {
    e.persist();
    dispatch(updateSearchExpenses(e.target.value));
    // console.log(e.target.value);
  };

  return [expenses, loading, pageCount, limit, search, getPage, handleLimitChange, handleSearchChange];
};

export default AllExpensePageHook;
