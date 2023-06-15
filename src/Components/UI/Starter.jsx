import React from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Utils/Footer";
import Navbar from "../Utils/Navbar";
import Sidebar from "../Utils/Sidebar";

const Starter = (props) => {
  const location = useLocation();
  const breadcrumbs1 = [
    { id: "clients", label: "العملاء", to: "/clients" },
    { id: "cases", label: "القضايا", to: "/cases" },
    { id: "sessions", label: "الجلسات", to: "/sessions" },
    { id: "documents", label: "الملفات", to: "/documents" },
    { id: "payments", label: "المدفوعات", to: "/payments" },
    { id: "expenses", label: "المصروفات", to: "/expenses" },
    { id: "users", label: "الموظفين", to: "/users" },
  ];

  const breadcrumbs2 = [
    { id: "users-add", label: "إضافة موظف" },
    { id: "users-edit", label: "تحديث بيانات الموظف" },
    { id: "users-password-change", label: "تحديث كلمة سر الموظف" },
    { id: "profile-edit", label: "تحديث بياناتي" },
    { id: "password-change-me", label: "تحديث كلمة السر الخاصة بي" },
    { id: "cases-add", label: "إضافة قضية" },
    { id: "cases-edit", label: "تحديث القضية" },
    { id: "cases-profile", label: "تفاصيل القضية" },
    { id: "clients-add", label: "إضافة عميل" },
    { id: "clients-edit", label: "تحديث بيانات العميل" },
    { id: "clients-profile", label: "تفاصيل العميل" },
    { id: "documents-add", label: "إضافة ملف" },
    { id: "expenses-add", label: "إضافة مصروف" },
    { id: "expenses-edit", label: "تعديل المصروف" },
    { id: "payments-add", label: "إضافة دفعة" },
    { id: "payments-edit", label: "تعديل الدفعة" },
    { id: "sessions-add", label: "إضافة جلسة" },
    { id: "sessions-edit", label: "تعديل الجلسة" },
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
              <li>
                {location.pathname.length > 1 ? (
                  <Link to={"/"}>
                    <b className="h4">الرئيسية</b>
                  </Link>
                ) : (
                  <b className="h4">الرئيسية</b>
                )}
              </li>
              {breadcrumbs1.map(
                (link) =>
                  location.pathname.split("/")[1].startsWith(link.id) && (
                    <li key={link.id}>
                      {location.pathname.split("/")[1].includes("-") ? (
                        <Link to={link.to}>
                          <b className="h4">{link.label}</b>
                        </Link>
                      ) : (
                        <b className="h4">{link.label}</b>
                      )}
                    </li>
                  )
              )}
              {breadcrumbs2.map(
                (link) =>
                  location.pathname.split("/")[1].startsWith(link.id) && (
                    <li key={link.id}>{<b className="h4">{link.label}</b>}</li>
                  )
              )}
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
