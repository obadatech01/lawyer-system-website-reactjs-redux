import React from "react";
import AllExpenseComponent from "../../Components/Expense/AllExpensesComponent";
import Starter from "../../Components/UI/Starter";
import AllExpensePageHook from "../../hook/expense/all-expense-page-hook";

const AllExpensePage = () => {
  const [expenses, loading, pageCount, limit, search, getPage, handleLimitChange, handleSearchChange] = AllExpensePageHook();

  return (
    <Starter>
      <AllExpenseComponent
        data={expenses.data}
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

export default AllExpensePage;
