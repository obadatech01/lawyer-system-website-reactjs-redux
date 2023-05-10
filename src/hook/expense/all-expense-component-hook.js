import { useDispatch } from "react-redux";
import { getAllExpense, getAllExpensePage } from "../../redux/actions/expenseAction";

const AllExpenseComponentHook = () => {
  const dispatch = useDispatch();

  // when pressed page
  const getPage = (page) => {
    dispatch(getAllExpensePage(page));
    // console.log(page);
  };

  // when change limit
  const handleLimitChange = (e) => {
    e.persist();
    dispatch(getAllExpense(e.target.value));
    // console.log(e.target.value);
  };

  return [getPage, handleLimitChange];
};

export default AllExpenseComponentHook;
