import { useDispatch } from "react-redux";
import { getAllPayment, getAllPaymentPage } from "../../redux/actions/paymentAction";

const AllPaymentComponentHook = () => {
  const dispatch = useDispatch();

  // when pressed page
  const getPage = (page) => {
    dispatch(getAllPaymentPage(page));
    // console.log(page);
  };

  // when change limit
  const handleLimitChange = (e) => {
    e.persist();
    dispatch(getAllPayment(e.target.value));
    // console.log(e.target.value);
  };

  return [getPage, handleLimitChange];
};

export default AllPaymentComponentHook;
