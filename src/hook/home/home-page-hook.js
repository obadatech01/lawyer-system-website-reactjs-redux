import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHome } from "../../redux/actions/homeAction";

const HomePageHook = () => {
  const dispatch = useDispatch();

  // when first load
  useEffect(() => {
    dispatch(getAllHome());
  }, [dispatch]);

  // to get state from redux
  const data = useSelector((state) => state.allHome.home.data);
  const loading = useSelector((state) => state.allHome.loading);
  // console.log(data);

  return [data, loading];
};

export default HomePageHook;
