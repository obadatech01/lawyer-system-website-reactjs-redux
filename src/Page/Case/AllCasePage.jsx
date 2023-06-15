import React from "react";
import AllCasesComponent from "../../Components/Case/AllCasesComponent";
import Starter from "../../Components/UI/Starter";
import AllCasePageHook from "../../hook/case/all-case-page-hook";

const AllCasePage = () => {
  const [cases, loading, pageCount, limit, search, getPage, handleLimitChange, handleSearchChange] = AllCasePageHook();

  return (
    <Starter>
      <AllCasesComponent
        data={cases.data}
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

export default AllCasePage;
