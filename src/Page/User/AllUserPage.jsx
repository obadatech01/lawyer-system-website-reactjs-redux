import React from "react";
import AllUsersComponent from "../../Components/User/AllUsersComponent";
import Starter from "../../Components/UI/Starter";
import AllUserPageHook from "../../hook/user/all-user-page-hook";

const AllUserPage = () => {
  const [users, loading, pageCount] = AllUserPageHook();

  return (
    <Starter>
      <AllUsersComponent
        data={users.data}
        loading={loading}
        pageCount={pageCount}
      />
    </Starter>
  );
};

export default AllUserPage;
