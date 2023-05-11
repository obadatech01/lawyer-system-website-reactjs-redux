import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSession } from "../../redux/actions/sessionAction";

const AllSessionPageHook = () => {
  const dispatch = useDispatch();

  // when first load
  useEffect(() => {
    dispatch(getAllSession(3));
  }, [dispatch]);

  // to get state from redux
  const sessions = useSelector((state) => state.allSession.sessions);
  const loading = useSelector((state) => state.allSession.loading);

  let pageCount = 0;
  if (sessions.paginationResult)
    pageCount = sessions.paginationResult.numberOfPages;

  return [sessions, loading, pageCount];
};

export default AllSessionPageHook;
