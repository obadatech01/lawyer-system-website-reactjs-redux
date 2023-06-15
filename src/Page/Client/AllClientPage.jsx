import React from "react";
import AllClientsComponent from "../../Components/Client/AllClientsComponent";
import Starter from "../../Components/UI/Starter";
import AllClientPageHook from "../../hook/client/all-client-page-hook";

const AllClientPage = () => {
  const [clients, loading, pageCount, limit, search, getPage, handleLimitChange, handleSearchChange] = AllClientPageHook();

  return (
    <Starter>
      <AllClientsComponent
        data={clients.data}
        loading={loading}
        pageCount={pageCount}
        limit={limit}
        search={search}
        getPage={getPage}
        handleLimitChange={handleLimitChange}
        handleSearchChange={handleSearchChange}
      />
    </Starter>
  );
};

export default AllClientPage;
