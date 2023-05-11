import { useDispatch } from "react-redux";
import { getAllUser, getAllUserPage } from "../../redux/actions/userAction";

const AllUserComponentHook = () => {
  const dispatch = useDispatch();

  // when pressed page
  const getPage = (page) => {
    dispatch(getAllUserPage(page));
    // console.log(page);
  };

  // when change limit
  const handleLimitChange = (e) => {
    e.persist();
    dispatch(getAllUser(e.target.value));
    // console.log(e.target.value);
  };

  return [getPage, handleLimitChange];
};

export default AllUserComponentHook;
