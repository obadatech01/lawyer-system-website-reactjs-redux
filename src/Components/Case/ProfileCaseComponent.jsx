import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { Link, useParams } from "react-router-dom";
import ViewClientProfileHook from "../../hook/client/view-client-profile-hook";
import { useGetDataToken } from "../../hooks/useGetData";

const ProfileCaseComponent = () => {
  const { id } = useParams();
  const [item] = ViewClientProfileHook(id);
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const getAllCasesForClient = async () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useGetDataToken(`/api/v1/cases?limit=5&client=${id}`);
      setCases(res.data);
    };

    getAllCasesForClient();
  }, [id]);

  return (
    <>
      <div className="row small-spacing">
        <div className="col-md-3 col-xs-12">
          <div className="box-content bordered primary margin-bottom-20">
            <div className="profile-avatar">
              <h3>
                الاسم: <strong>{item.name}</strong>
              </h3>
              <h4>الشركة: {item.companyName}</h4>
              <p>الملاحظات: {item.notes}</p>
            </div>
            {/* .profile-avatar */}
            <table className="table table-hover no-margin">
              <tbody>
                <tr>
                  <td>الجنسية</td>
                  <td>{item.nationality}</td>
                </tr>
                <tr>
                  <td>رقم الهوية</td>
                  <td>{item.identificationNumber}</td>
                </tr>
                <tr>
                  <td>الجنس</td>
                  <td>{item.gender}</td>
                </tr>
                <tr>
                  <td>البريد الإلكتروني</td>
                  <td>{item.email}</td>
                </tr>
                <tr>
                  <td>رقم الهاتف</td>
                  <td>{item.phone}</td>
                </tr>
                <tr>
                  <td>العنوان</td>
                  <td>{item.address}</td>
                </tr>
                <tr>
                  <td>أُضيف بواسطة</td>
                  <td>
                    <span className="label label-success p-2 h6">
                      {item.createdBy?.name}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /.box-content bordered */}
        </div>
        {/* /.col-md-3 col-xs-12 */}
        <div className="col-md-9 col-xs-12">
          <div className="row">
            <div className="col-xs-12">
              <div className="box-content card">
                <h4 className="box-title">
                  <i className="fa fa-user ico" />
                  القضايا
                </h4>
                {/* /.box-title */}
                <div className="dropdown js__drop_down">
                  <span className="label label-primary h5">{cases.length}</span>
                </div>
                {/* /.dropdown js__dropdown */}
                <div className="card-content">
                  <div className="row">
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th className="h5 text-center">رقم القضية</th>
                          <th className="h5 text-center"> عنوان القضية</th>
                          <th className="h5 text-center"> اسم المحكمة </th>
                          <th className="h5 text-center"> اسم القاضي </th>
                          <th className="h5 text-center">اسم العميل</th>
                          <th className="h5 text-center"> اجمالي المبلغ</th>
                          <th className="h5 text-center"> المتبقي</th>
                          <th className="h5 text-center"> حالة القضية</th>
                          <th className="h5 text-center"> أكشن</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th className="h5 text-center">رقم القضية</th>
                          <th className="h5 text-center"> عنوان القضية</th>
                          <th className="h5 text-center"> اسم المحكمة </th>
                          <th className="h5 text-center"> اسم القاضي </th>
                          <th className="h5 text-center">اسم العميل</th>
                          <th className="h5 text-center"> اجمالي المبلغ</th>
                          <th className="h5 text-center"> المتبقي</th>
                          <th className="h5 text-center"> حالة القضية</th>
                          <th className="h5 text-center"> أكشن</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {cases.length > 0 ? (
                          cases.map((cases) => (
                            <tr key={cases._id}>
                              <td className="h5 text-center">
                                {cases.courtCaseNumber}
                              </td>
                              <td className="h5 text-center">{cases.title}</td>
                              <td className="h5 text-center">
                                {cases.courtName}
                              </td>
                              <td className="h5 text-center">
                                {cases.judgeName}
                              </td>
                              <td className="h5 text-center">
                                {cases.client.name}
                              </td>
                              <td className="h5 text-center">{"1500"}</td>
                              <td className="h5 text-center">{"700"}</td>
                              <td className="h5 text-center">
                                <span className="label label-danger">
                                  {cases.status}
                                </span>
                              </td>
                              <td className="h5 text-center">
                                <Link
                                  to={`/cases-profile/${cases._id}`}
                                  className="mx-3 btn btn-primary btn-icon btn-icon-right btn-xs waves-effect waves-light"
                                >
                                  <i className="ico fa fa-eye"></i> عرض
                                </Link>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td
                              valign="top"
                              colSpan="9"
                              className="h4 text-center text-danger p-3"
                            >
                              لا يوجد قضايا لهذا العميل!{" "}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  </div>
                  {/* /.row */}
                </div>
                {/* /.card-content */}
              </div>
              {/* /.box-content card */}
            </div>
            {/* /.col-md-12 */}
          </div>
        </div>
        {/* /.col-md-9 col-xs-12 */}
      </div>
    </>
  );
};

export default ProfileCaseComponent;
