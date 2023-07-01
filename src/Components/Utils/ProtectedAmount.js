import { useEffect, useState } from "react";
import { useGetDataToken } from "../../hooks/useGetData";

const ProtectedAmount = () => {
  const [url, setUrl] = useState("/api/v1/home/report");
  const [maxAddExpense, setMaxAddExpense] = useState(0);
  const [maxAddPayment, setMaxAddPayment] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const res = await useGetDataToken(url);

        setMaxAddExpense(res?.data?.maxAddExpense || 0);
        setMaxAddPayment(res?.data?.maxAddPayment || 0);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [url]);
  // console.log(url);

  return [maxAddExpense, maxAddPayment, setUrl];
};

export default ProtectedAmount;
