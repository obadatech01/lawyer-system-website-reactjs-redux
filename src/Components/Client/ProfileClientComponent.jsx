import React from "react";
import ViewClientProfileHook from "../../hook/client/view-client-profile-hook";
import { Link, useParams } from "react-router-dom";

const ProfileClientComponent = () => {
  const { id } = useParams();
  const [item] = ViewClientProfileHook(id);

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
                    <span className="notice notice-danger">
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
                  <Link
                    href="#"
                    className="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"
                  />
                  <ul className="sub-menu">
                    <li>
                      <Link href="#">Action</Link>
                    </li>
                    <li>
                      <Link href="#">Another action</Link>
                    </li>
                    <li>
                      <Link href="#">Something else there</Link>
                    </li>
                    <li className="split" />
                    <li>
                      <Link href="#">Separated link</Link>
                    </li>
                  </ul>
                  {/* /.sub-menu */}
                </div>
                {/* /.dropdown js__dropdown */}
                <div className="card-content">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-xs-5">
                          <label>First Name:</label>
                        </div>
                        {/* /.col-xs-5 */}
                        <div className="col-xs-7">Betty</div>
                        {/* /.col-xs-7 */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* /.col-md-6 */}
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-xs-5">
                          <label>Last Name:</label>
                        </div>
                        {/* /.col-xs-5 */}
                        <div className="col-xs-7">Simmons</div>
                        {/* /.col-xs-7 */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* /.col-md-6 */}
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-xs-5">
                          <label>User Name:</label>
                        </div>
                        {/* /.col-xs-5 */}
                        <div className="col-xs-7">Betty</div>
                        {/* /.col-xs-7 */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* /.col-md-6 */}
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-xs-5">
                          <label>Email:</label>
                        </div>
                        {/* /.col-xs-5 */}
                        <div className="col-xs-7">youremail@gmail.com</div>
                        {/* /.col-xs-7 */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* /.col-md-6 */}
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-xs-5">
                          <label>City:</label>
                        </div>
                        {/* /.col-xs-5 */}
                        <div className="col-xs-7">Los Angeles</div>
                        {/* /.col-xs-7 */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* /.col-md-6 */}
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-xs-5">
                          <label>Country:</label>
                        </div>
                        {/* /.col-xs-5 */}
                        <div className="col-xs-7">United States</div>
                        {/* /.col-xs-7 */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* /.col-md-6 */}
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-xs-5">
                          <label>Birthday:</label>
                        </div>
                        {/* /.col-xs-5 */}
                        <div className="col-xs-7">Jan 22, 1984</div>
                        {/* /.col-xs-7 */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* /.col-md-6 */}
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-xs-5">
                          <label>Interests:</label>
                        </div>
                        {/* /.col-xs-5 */}
                        <div className="col-xs-7">
                          Basketball, Web, Design, etc.
                        </div>
                        {/* /.col-xs-7 */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* /.col-md-6 */}
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-xs-5">
                          <label>Website:</label>
                        </div>
                        {/* /.col-xs-5 */}
                        <div className="col-xs-7">
                          <Link href="#">yourwebsite.com</Link>
                        </div>
                        {/* /.col-xs-7 */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* /.col-md-6 */}
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-xs-5">
                          <label>Phone:</label>
                        </div>
                        {/* /.col-xs-5 */}
                        <div className="col-xs-7">+1-234-5678</div>
                        {/* /.col-xs-7 */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* /.col-md-6 */}
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

export default ProfileClientComponent;
