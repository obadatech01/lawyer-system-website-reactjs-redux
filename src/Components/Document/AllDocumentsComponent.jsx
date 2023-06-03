import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/esm/Table";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AllDocumentComponentHook from "../../hook/document/all-document-component-hook";
import notify from "../../hook/useNotification";
import { deleteDocument } from "../../redux/actions/documentAction";
import Pagination from "../Utils/Pagination";

const AllDocumentsComponent = ({ data, loading, pageCount }) => {
  const [getPage, handleLimitChange] = AllDocumentComponentHook();
  const dispatch = useDispatch();
  const handelDelete = async (id) => {
    await dispatch(deleteDocument(id));
    notify("تم الحذف بنجاح", "success");
    window.location.reload();
  };

  return (
    <div className="row small-spacing">
      <div className="col-xs-12">
        <div className="box-content">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <h4 className="box-title">عرض جميع الملفات</h4>
              <div className="h4">
                {"عرض "}
                <select name="limitation" id="lang" className="select px-2 " onChange={handleLimitChange}>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
                {" في الصفحة"}
              </div>
            </div>
            <div className="d-flex flex-column">
              <Link
                to={"/documents-add"}
                className="h5 btn btn-primary btn-rounded btn-icon btn-icon-right btn-xs waves-effect waves-light"
              >
                <i className="ico fa fa-plus"></i> إضافة ملفات
              </Link>
              <input
                type="search"
                className="form-control input-sm my-3"
                placeholder="ابحث ..."
                aria-controls="example"
              />
            </div>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="h5 text-center">اسم الملف </th>
                <th className="h5 text-center"> عنوان القضية</th>
                <th className="h5 text-center"> أضيف بواسطة </th>
                <th className="h5 text-center"> أكشن</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th className="h5 text-center">اسم الملف </th>
                <th className="h5 text-center"> عنوان القضية</th>
                <th className="h5 text-center"> أضيف بواسطة </th>
                <th className="h5 text-center"> أكشن</th>
              </tr>
            </tfoot>
            <tbody>
            {loading === false ? (
                data.length > 0 ? (
                  data.map((document) => (
                    <tr key={document._id}>
                      <td className="h5 text-center text-muted">
                        <a href={`${document.document}`} target="_blank" rel="noopener noreferrer">{document.title}</a>
                      </td>
                      <td className="h5 text-center text-muted">
                        {document.case.title}
                      </td>
                      <td className="h5 text-center text-muted">
                        {
                          document.createdBy.name
                        }
                      </td>
                      <td className="h5 text-center">
                        <button
                          onClick={() => handelDelete(document._id)}
                          className="mx-3 btn btn-danger btn-icon btn-icon-right btn-xs waves-effect waves-light"
                        >
                          <i className="ico fa fa-trash"></i> حذف
                        </button>
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
                      لا توجد ملفات بعد!{" "}
                    </td>
                  </tr>
                )
              ) : (
                <tr>
                  <td valign="top" colSpan="9" className="h4 text-center p-3">
                    جاري التحميل{" "}
                    <Spinner animation="border" variant="primary" />
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
          {pageCount > 1 ? (
            <Pagination pageCount={pageCount} onPress={getPage} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AllDocumentsComponent;
