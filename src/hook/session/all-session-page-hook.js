import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSessions, updateLimitSessions, updatePageSessions, updateSearchSessions } from "../../redux/actions/sessionAction";

const AllSessionPageHook = () => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.allSession.limit);
  const page = useSelector((state) => state.allSession.page);
  const search = useSelector((state) => state.allSession.search);

  // when first load
  useEffect(() => {
    dispatch(getAllSessions(limit, page, search));
  }, [limit, page, search, dispatch]);

  // to get state from redux
  const sessions = useSelector((state) => state.allSession.sessions);
  const loading = useSelector((state) => state.allSession.loading);

  let pageCount = 0;
  if (sessions.paginationResult)
    pageCount = sessions.paginationResult.numberOfPages;

  // when pressed page
  const getPage = (page) => {
    dispatch(updatePageSessions(page));
    // console.log(page);
  };

  // when change limit
  const handleLimitChange = (e) => {
    e.persist();
    dispatch(updateLimitSessions(e.target.value));
    // console.log(e.target.value);
  };

  // when change search
  const handleSearchChange = (e) => {
    e.persist();
    dispatch(updateSearchSessions(e.target.value));
    // console.log(e.target.value);
  };

  return [sessions, loading, pageCount, limit, search, getPage, handleLimitChange, handleSearchChange];
};

export default AllSessionPageHook;
