import { useDispatch } from "react-redux";
import { getAllCase, getAllCasePage } from "../../redux/actions/caseAction";

const AllCaseComponentHook = () => {
  const dispatch = useDispatch();

  // when pressed page
  const getPage = (page) => {
    dispatch(getAllCasePage(page));
    // console.log(page);
  };

  // when change limit
  const handleLimitChange = (e) => {
    e.persist();
    dispatch(getAllCase(e.target.value));
    // console.log(e.target.value);
  };

  return [getPage, handleLimitChange];
};

export default AllCaseComponentHook;
