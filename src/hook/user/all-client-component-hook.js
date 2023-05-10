import { useDispatch } from "react-redux";
import { getAllClient, getAllClientPage } from "../../redux/actions/clientAction";

const AllClientComponentHook = () => {
  const dispatch = useDispatch();

  // when pressed page
  const getPage = (page) => {
    dispatch(getAllClientPage(page));
    // console.log(page);
  };

  // when change limit
  const handleLimitChange = (e) => {
    e.persist();
    dispatch(getAllClient(e.target.value));
    // console.log(e.target.value);
  };

  return [getPage, handleLimitChange];
};

export default AllClientComponentHook;
