import React from "react";
import AllClientsComponent from "../../Components/Client/AllClientsComponent";
import Starter from "../../Components/UI/Starter";
import AllClientPageHook from "../../hook/client/all-client-page-hook";

const AllClientPage = () => {
  const [clients, loading, pageCount] = AllClientPageHook();

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
