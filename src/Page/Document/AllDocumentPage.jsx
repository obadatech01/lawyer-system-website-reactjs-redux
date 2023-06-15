import React from "react";
import AllDocumentsComponent from "../../Components/Document/AllDocumentsComponent";
import Starter from "../../Components/UI/Starter";
import AllDocumentPageHook from "../../hook/document/all-document-page-hook";

const AllDocumentPage = () => {
  const [documents, loading, pageCount, limit, search, getPage, handleLimitChange, handleSearchChange] = AllDocumentPageHook();

  return (
    <Starter>
      <AllDocumentsComponent
        data={documents.data}
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

export default AllDocumentPage;
