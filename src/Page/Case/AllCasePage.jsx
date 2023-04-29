import React from "react";
import AllCasesComponent from "../../Components/Case/AllCasesComponent";
import Starter from "../../Components/UI/Starter";
import AllCasePageHook from "../../hook/case/all-case-page-hook";

const AllCasePage = () => {
  const [cases, loading, pageCount] = AllCasePageHook();

  return (
    <Starter>
      <AllCasesComponent 
        data={cases.data}
        loading={loading}
        pageCount={pageCount}
      />
    </Starter>
  );
};

export default AllCasePage;
