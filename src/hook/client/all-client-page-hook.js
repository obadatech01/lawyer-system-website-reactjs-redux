import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllClients, updateLimitClients, updatePageClients, updateSearchClients } from "../../redux/actions/clientAction";

const AllClientPageHook = () => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.allClient.limit);
  const page = useSelector((state) => state.allClient.page);
  const search = useSelector((state) => state.allClient.search);

  // when first load
  useEffect(() => {
    dispatch(getAllClients(limit, page, search));
  }, [limit, page, search, dispatch]);

  // to get state from redux
  const clients = useSelector((state) => state.allClient.clients);
  const loading = useSelector((state) => state.allClient.loading);

  let pageCount = 0;
  if (clients.paginationResult)
    pageCount = clients.paginationResult.numberOfPages;

  // when pressed page
  const getPage = (page) => {
    dispatch(updatePageClients(page));
    // console.log(page);
  };

  // when change limit
  const handleLimitChange = (e) => {
    e.persist();
    dispatch(updateLimitClients(e.target.value));
    // console.log(e.target.value);
  };

  // when change search
  const handleSearchChange = (e) => {
    e.persist();
    dispatch(updateSearchClients(e.target.value));
    // console.log(e.target.value);
  };

  return [clients, loading, pageCount, limit, search, getPage, handleLimitChange, handleSearchChange];
};

export default AllClientPageHook;
