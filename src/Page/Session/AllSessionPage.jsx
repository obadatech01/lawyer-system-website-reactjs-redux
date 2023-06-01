import React from "react";
import AllSessionsComponent from "../../Components/Session/AllSessionsComponent";
import Starter from "../../Components/UI/Starter";
import AllSessionPageHook from "../../hook/session/all-session-page-hook";

const AllSessionPage = () => {
  const [sessions, loading, pageCount] = AllSessionPageHook();

  return (
    <Starter>
      <AllSessionsComponent
        data={sessions.data}
        loading={loading}
        pageCount={pageCount}
      />
    </Starter>
  );
};

export default AllSessionPage;
