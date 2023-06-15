import React from "react";
import AllUsersComponent from "../../Components/User/AllUsersComponent";
import Starter from "../../Components/UI/Starter";
import AllUserPageHook from "../../hook/user/all-user-page-hook";

const AllUserPage = () => {
  const [users, loading, pageCount, limit, search, getPage, handleLimitChange, handleSearchChange] = AllUserPageHook();

  return (
    <Starter>
      <AllUsersComponent
        data={users.data}
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

export default AllUserPage;
