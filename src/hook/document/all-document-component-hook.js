import { useDispatch } from "react-redux";
import { getAllDocument, getAllDocumentPage } from "../../redux/actions/documentAction";

const AllDocumentComponentHook = () => {
  const dispatch = useDispatch();

  // when pressed page
  const getPage = (page) => {
    dispatch(getAllDocumentPage(page));
    // console.log(page);
  };

  // when change limit
  const handleLimitChange = (e) => {
    e.persist();
    dispatch(getAllDocument(e.target.value));
    // console.log(e.target.value);
  };

  return [getPage, handleLimitChange];
};

export default AllDocumentComponentHook;
