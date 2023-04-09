import React, { useEffect } from "react";
import AllClientsComponent from "../../Components/Client/AllClientsComponent";
import Starter from "../../Components/UI/Starter";
import { useDispatch, useSelector } from "react-redux";
import { getAllClient } from "../../redux/actions/clientAction";

const AllClientPage = () => {  

  return (
    <Starter>
      <AllClientsComponent />
    </Starter>
  );
};

export default AllClientPage;
