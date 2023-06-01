import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneCase } from "../../redux/actions/caseAction";

const ViewCaseProfileHook = (id) => {
  const dispatch = useDispatch();

  // when first load
  useEffect(() => {
    dispatch(getOneCase(id));
  }, [dispatch, id]);

  // to get state from redux
  const oneCase = useSelector((state) => state.allCase.oneCase);
  let item = [];
  if(oneCase.data) {
    item = oneCase.data;
  } else {
    item = [];
  }
  // console.log(item);
  return [item];
}

export default ViewCaseProfileHook;