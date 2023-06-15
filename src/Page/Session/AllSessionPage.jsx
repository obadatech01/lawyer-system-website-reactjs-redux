import React from "react";
import AllSessionsComponent from "../../Components/Session/AllSessionsComponent";
import Starter from "../../Components/UI/Starter";
import AllSessionPageHook from "../../hook/session/all-session-page-hook";

const AllSessionPage = () => {
  const [sessions, loading, pageCount, limit, search, getPage, handleLimitChange, handleSearchChange] = AllSessionPageHook();

  return (
    <Starter>
      <AllSessionsComponent
        data={sessions.data}
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

export default AllSessionPage;
