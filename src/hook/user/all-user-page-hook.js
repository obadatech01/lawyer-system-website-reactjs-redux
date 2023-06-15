import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, updateLimitUsers, updatePageUsers, updateSearchUsers } from "../../redux/actions/userAction";

const AllUserPageHook = () => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.allUser.limit);
  const page = useSelector((state) => state.allUser.page);
  const search = useSelector((state) => state.allUser.search);

  // when first load
  useEffect(() => {
    dispatch(getAllUsers(limit, page, search));
  }, [limit, page, search, dispatch]);

  // to get state from redux
  const users = useSelector((state) => state.allUser.users);
  const loading = useSelector((state) => state.allUser.loading);

  let pageCount = 0;
  if (users.paginationResult)
    pageCount = users.paginationResult.numberOfPages;

  // when pressed page
  const getPage = (page) => {
    dispatch(updatePageUsers(page));
    // console.log(page);
  };

  // when change limit
  const handleLimitChange = (e) => {
    e.persist();
    dispatch(updateLimitUsers(e.target.value));
    // console.log(e.target.value);
  };

  // when change search
  const handleSearchChange = (e) => {
    e.persist();
    dispatch(updateSearchUsers(e.target.value));
    // console.log(e.target.value);
  };

  return [users, loading, pageCount, limit, search, getPage, handleLimitChange, handleSearchChange];
};

export default AllUserPageHook;
