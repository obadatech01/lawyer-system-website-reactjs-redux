import React from "react";
import AllDocumentsComponent from "../../Components/Document/AllDocumentsComponent";
import Starter from "../../Components/UI/Starter";
import AllDocumentPageHook from "../../hook/document/all-document-page-hook";

const AllDocumentPage = () => {
  const [documents, loading, pageCount] = AllDocumentPageHook();

  return (
    <Starter>
      <AllDocumentsComponent
        data={documents.data}
        loading={loading}
        pageCount={pageCount}
      />
    </Starter>
  );
};

export default AllDocumentPage;
