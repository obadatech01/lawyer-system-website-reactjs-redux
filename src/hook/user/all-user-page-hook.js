import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/actions/userAction";

const AllUserPageHook = () => {
  const dispatch = useDispatch();

  // when first load
  useEffect(() => {
    dispatch(getAllUser(3));
  }, [dispatch]);

  // to get state from redux
  const users = useSelector((state) => state.allUser.users);
  const loading = useSelector((state) => state.allUser.loading);

  let pageCount = 0;
  if (users.paginationResult)
    pageCount = users.paginationResult.numberOfPages;

  return [users, loading, pageCount];
};

export default AllUserPageHook;
