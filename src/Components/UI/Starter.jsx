import React from 'react'
import Footer from '../Utils/Footer';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../Utils/Sidebar';
import Navbar from '../Utils/Navbar';

const Starter = (props) => {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname.startsWith('/clients-profile'));

  return (
    <div>
      <Sidebar />
      <Navbar />
      <div id="wrapper">
        <div className="main-content">
          <div className="box-content">
            <h4 className="box-title">أهلًا وسهلًا بك في برنامج المحامي</h4>
            <ol className="breadcrumb">
              <li>
                <Link to={"/"}>
                  <b className="h4">الرئيسية</b>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <b className="h4">القضايا</b>
                </Link>
              </li>
              <li>
                <Link to="#" className="active">
                  <b className="h4">القضايا المكتملة</b>
                </Link>
              </li>
            </ol>
          </div>

          {props.children}

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Starter;