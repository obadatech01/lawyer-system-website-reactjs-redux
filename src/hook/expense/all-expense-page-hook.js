import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllExpense } from "../../redux/actions/expenseAction";

const AllExpensePageHook = () => {
  const dispatch = useDispatch();

  // when first load
  useEffect(() => {
    dispatch(getAllExpense(3));
  }, [dispatch]);

  // to get state from redux
  const expenses = useSelector((state) => state.allExpense.expenses);
  const loading = useSelector((state) => state.allExpense.loading);

  let pageCount = 0;
  if (expenses.paginationResult)
    pageCount = expenses.paginationResult.numberOfPages;

  return [expenses, loading, pageCount];
};

export default AllExpensePageHook;
