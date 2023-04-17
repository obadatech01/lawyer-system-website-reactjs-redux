import React, { useEffect } from "react";
import AllClientsComponent from "../../Components/Client/AllClientsComponent";
import Starter from "../../Components/UI/Starter";
import { useDispatch, useSelector } from "react-redux";
import { getAllClient } from "../../redux/actions/clientAction";

const AllClientPage = () => {
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


  return (
    <Starter>
      <AllClientsComponent
        data={clients.data}
        loading={loading}
        pageCount={pageCount}
      />
    </Starter>
  );
};

export default AllClientPage;
