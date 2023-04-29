import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllClient } from "../../redux/actions/clientAction";

const AllClientPageHook = () => {
  const dispatch = useDispatch();

  // when first load
  useEffect(() => {
    dispatch(getAllClient(3));
  }, [dispatch]);

  // to get state from redux
  const clients = useSelector((state) => state.allClient.clients);
  const loading = useSelector((state) => state.allClient.loading);

  let pageCount = 0;
  if (clients.paginationResult)
    pageCount = clients.paginationResult.numberOfPages;
  
  return [clients, loading, pageCount];
};

export default AllClientPageHook;
