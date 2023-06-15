import React from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Utils/Footer";
import Navbar from "../Utils/Navbar";
import Sidebar from "../Utils/Sidebar";

const Starter = (props) => {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname.startsWith("/clients-profile"));
  const breadcrumbs = [
    { label: "الرئيسية", to: "/" },
    { label: "القضايا", to: "#" },
    { label: "القضايا المكتملة", to: "#", active: true },
  ];

  return (
    <div>
      <Sidebar />
      <Navbar />
      <div id="wrapper">
        <div className="main-content">
          <div className="box-content">
            <h4 className="box-title">أهلًا وسهلًا بك في برنامج المحامي</h4>
            <ol className="breadcrumb">
              {breadcrumbs.map((item, index) => (
                <li key={index}>
                  {item.active ? (
                    <b className="h4">{item.label}</b>
                  ) : (
                    <Link to={item.to}>
                      <b className="h4">{item.label}</b>
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {props.children}

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Starter;
