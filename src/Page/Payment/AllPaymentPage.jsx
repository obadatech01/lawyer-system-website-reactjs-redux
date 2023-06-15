import React from "react";
import AllPaymentComponent from "../../Components/Payment/AllPaymentsComponent";
import Starter from "../../Components/UI/Starter";
import AllPaymentPageHook from "../../hook/payment/all-payment-page-hook";

const AllPaymentPage = () => {
  const [payments, loading, pageCount, limit, search, getPage, handleLimitChange, handleSearchChange] = AllPaymentPageHook();

  return (
    <Starter>
      <AllPaymentComponent
        data={payments.data}
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

export default AllPaymentPage;
