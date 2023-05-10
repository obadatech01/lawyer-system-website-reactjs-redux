import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPayment } from "../../redux/actions/paymentAction";

const AllPaymentPageHook = () => {
  const dispatch = useDispatch();

  // when first load
  useEffect(() => {
    dispatch(getAllPayment(3));
  }, [dispatch]);

  // to get state from redux
  const payments = useSelector((state) => state.allPayment.payments);
  const loading = useSelector((state) => state.allPayment.loading);

  let pageCount = 0;
  if (payments.paginationResult)
    pageCount = payments.paginationResult.numberOfPages;

  return [payments, loading, pageCount];
};

export default AllPaymentPageHook;
