import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllClient } from "../../redux/actions/clientAction";

const AllClientPageHook = () => {
  const dispatch = useDispatch();

  // when first load
  useEffect(() => {
    const get = () => {
      dispatch(getAllClient(3));
    };
    get();
  }, [dispatch]);

  // to get state from redux
  const clients = useSelector((state) => state.allClient.client);
  const loading = useSelector((state) => state.allClient.loading);

  let pageCount = 0;
  if (clients.paginationResult)
    pageCount = clients.paginationResult.numberOfPages;

  return [clients, loading, pageCount];
};

export default AllClientPageHook;
