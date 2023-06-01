import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { Link, useParams } from "react-router-dom";
import ViewCaseProfileHook from "../../hook/case/view-case-profile-hook";
import { useGetDataToken } from "../../hooks/useGetData";

const ProfileCaseComponent = () => {
  const { id } = useParams();
  const [item] = ViewCaseProfileHook(id);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const getAllSessionsForCase = async () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useGetDataToken(`/api/v1/sessions?limit=5&case=${id}`);
      setSessions(res.data);
    };

    getAllSessionsForCase();
  }, [id]);

  return (
    <>
      <div className="row small-spacing">
        <div className="col-md-3 col-xs-12">
          <div className="box-content bordered primary margin-bottom-20">
            <div className="profile-avatar">
              <h3>
                عنوان القضية: <strong>{item.title}</strong>
              </h3>
              <h4>نوع القضية: {item.type}</h4>
              <p>الملاحظات: {item.notes}</p>
            </div>
            {/* .profile-avatar */}
            <table className="table table-hover no-margin">
              <tbody>
                <tr>
                  <td>رقم القضية</td>
                  <td>{item.courtCaseNumber}</td>
                </tr>
                <tr>
                  <td>اسم المحكمة</td>
                  <td>{item.courtName}</td>
                </tr>
                <tr>
                  <td>اسم القاضي</td>
                  <td>{item.judgeName}</td>
                </tr>
                <tr>
                  <td>أتعاب القضية</td>
                  <td>{item.cost}</td>
                </tr>
                <tr>
                  <td>اسم الموكل</td>
                  <td>{item.client?.name}</td>
                </tr>
                <tr>
                  <td>اسم الخصم</td>
                  <td>{item.opponentName}</td>
                </tr>
                <tr>
                  <td>اسم محامي الخصم</td>
                  <td>{item.opponentLawyerName}</td>
                </tr>
                <tr>
                  <td>حالة القضية</td>
                  <td>
                    <span className="label label-danger p-2 h6">
                      {item.status}
                    </span>
                  </td>
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
                  الجلسات
                </h4>
                {/* /.box-title */}
                <div className="dropdown js__drop_down">
                  <span className="label label-primary h5">{sessions.length}</span>
                </div>
                {/* /.dropdown js__dropdown */}
                <div className="card-content">
                  <div className="row">
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th className="h5 text-center">تاريخ الجلسة</th>
                          <th className="h5 text-center"> عنوان الجلسة</th>
                          <th className="h5 text-center"> محامي الجلسة </th>
                          <th className="h5 text-center"> أضيفت بواسطة </th>
                          <th className="h5 text-center"> أكشن</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th className="h5 text-center">تاريخ الجلسة</th>
                          <th className="h5 text-center"> عنوان الجلسة</th>
                          <th className="h5 text-center"> محامي الجلسة </th>
                          <th className="h5 text-center"> أضيفت بواسطة </th>
                          <th className="h5 text-center"> أكشن</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {sessions.length > 0 ? (
                          sessions.map((session) => (
                            <tr key={session._id}>
                              <td className="h5 text-center">
                                {new Date(session.sessionDate).toISOString().split("T")[0]}
                              </td>
                              <td className="h5 text-center">{session.title}</td>
                              <td className="h5 text-center">
                                {session.title}
                              </td>
                              <td className="h5 text-center">
                                {session.lawyerName}
                              </td>
                              <td className="h5 text-center">
                                {session.createdBy?.name}
                              </td>
                              <td className="h5 text-center">
                                <Link
                                  to={`/sessions-edit/${session._id}`}
                                  className="mx-3 btn btn-success btn-icon btn-icon-right btn-xs waves-effect waves-light"
                                >
                                  <i className="ico fa fa-edit"></i> تعديل
                                </Link>
                                <Link
                                  to={`/sessions-delete/${session._id}`}
                                  className="mx-3 btn btn-danger btn-icon btn-icon-right btn-xs waves-effect waves-light"
                                >
                                  <i className="ico fa fa-trash"></i> حذف
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
