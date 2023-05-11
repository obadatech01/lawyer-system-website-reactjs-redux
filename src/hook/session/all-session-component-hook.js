import { useDispatch } from "react-redux";
import { getAllSession, getAllSessionPage } from "../../redux/actions/sessionAction";

const AllSessionComponentHook = () => {
  const dispatch = useDispatch();

  // when pressed page
  const getPage = (page) => {
    dispatch(getAllSessionPage(page));
    // console.log(page);
  };

  // when change limit
  const handleLimitChange = (e) => {
    e.persist();
    dispatch(getAllSession(e.target.value));
    // console.log(e.target.value);
  };

  return [getPage, handleLimitChange];
};

export default AllSessionComponentHook;
