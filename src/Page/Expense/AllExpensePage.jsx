import React from "react";
import AllExpenseComponent from "../../Components/Expense/AllExpensesComponent";
import Starter from "../../Components/UI/Starter";
import AllExpensePageHook from "../../hook/expense/all-expense-page-hook";

const AllExpensePage = () => {
  const [expenses, loading, pageCount] = AllExpensePageHook();

  return (
    <Starter>
      <AllExpenseComponent
        data={expenses.data}
        loading={loading}
        pageCount={pageCount}
       />
    </Starter>
  );
};

export default AllExpensePage;
