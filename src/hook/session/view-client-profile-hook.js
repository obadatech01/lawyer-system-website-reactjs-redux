import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneClient } from "../../redux/actions/clientAction";

const ViewClientProfileHook = (id) => {
  const dispatch = useDispatch();

  // when first load
  useEffect(() => {
    dispatch(getOneClient(id));
  }, [dispatch, id]);

  // to get state from redux
  const oneClient = useSelector((state) => state.allClient.oneClient);
  let item = [];
  if(oneClient.data) {
    item = oneClient.data;
  } else {
    item = [];
  }
  // console.log(item);
  return [item]; 
}

export default ViewClientProfileHook;