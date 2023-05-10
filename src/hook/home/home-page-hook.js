import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCase } from "../../redux/actions/caseAction";
import { getAllSession } from "../../redux/actions/sessionAction";

const HomePageHook = () => {
  const dispatch = useDispatch();

  // when first load
  useEffect(() => {
    dispatch(getAllCase(10));
  }, [dispatch]);

  // when first load
  useEffect(() => {
    dispatch(getAllSession(10));
  }, [dispatch]);

  // to get state from redux
  const cases = useSelector((state) => state.allCase.cases.data);
  const loadingCase = useSelector((state) => state.allCase.loading);
  const sessions = useSelector((state) => state.allSession.sessions.data);
  const loadingSession = useSelector((state) => state.allSession.loading);
  // console.log(loadingSession);

  return [cases, loadingCase, sessions, loadingSession];
};

export default HomePageHook;
