import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPayments, updateLimitPayments, updatePagePayments, updateSearchPayments } from "../../redux/actions/paymentAction";

const AllPaymentPageHook = () => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.allPayment.limit);
  const page = useSelector((state) => state.allPayment.page);
  const search = useSelector((state) => state.allPayment.search);

  // when first load
  useEffect(() => {
    dispatch(getAllPayments(limit, page, search));
  }, [limit, page, search, dispatch]);

  // to get state from redux
  const payments = useSelector((state) => state.allPayment.payments);
  const loading = useSelector((state) => state.allPayment.loading);

  let pageCount = 0;
  if (payments.paginationResult)
    pageCount = payments.paginationResult.numberOfPages;

  // when pressed page
  const getPage = (page) => {
    dispatch(updatePagePayments(page));
    // console.log(page);
  };

  // when change limit
  const handleLimitChange = (e) => {
    e.persist();
    dispatch(updateLimitPayments(e.target.value));
    // console.log(e.target.value);
  };

  // when change search
  const handleSearchChange = (e) => {
    e.persist();
    dispatch(updateSearchPayments(e.target.value));
    // console.log(e.target.value);
  };

  return [payments, loading, pageCount, limit, search, getPage, handleLimitChange, handleSearchChange];
};

export default AllPaymentPageHook;
