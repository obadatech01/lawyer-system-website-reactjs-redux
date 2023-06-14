import React, { useEffect, useState } from 'react'
import ChangeUserPasswordHook from '../../hook/user/change-user-password-hook';
import { useParams } from 'react-router-dom';
import { useGetDataToken } from '../../hooks/useGetData';

const PasswordChangeUserComponent = () => {
  const { id } = useParams();
  const [password, confirmPassword, onSubmit, onChangePassword, onChangeConfirmPassword] = ChangeUserPasswordHook(id);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getOneUser = async () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useGetDataToken(`/api/v1/users/${id}`);
      // console.log(res.data);
      setUser(res.data);
    };

    getOneUser();
  }, [id]);

  return (
    <div className="row small-spacing">

      <div className="col-xs-12">
        <div className="box-content">
          <h4 className="box-title d-flex justify-content-center">
            تحديث كلمة السر الخاصة ب {user.name}
          </h4>

          <div className="row">
            <div className="card-content">
              {/* <from> */}
              <div className="col-md-6">
                <div className="padding-20">
                  <h5>
                    <b>كلمة السر الجديدة</b>
                  </h5>
                  <input
                    type="password"
                    className="form-control"
                    maxLength={25}
                    name="password"
                    id="password"
                    value={password}
                    onChange={onChangePassword}
                    placeholder="كلمة السر الجديدة"
                  />
                  <div className="margin-top-20">
                    <h5>
                      <b>مطابقة كلمة السر</b>
                    </h5>
                    <input
                      type="password"
                      maxLength={25}
                      name="confirmPassword"
                      className="form-control"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={onChangeConfirmPassword}
                      placeholder="مطابقة كلمة السر"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12 d-flex justify-content-start">
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="btn mt-4 btn-primary btn-sm waves-effect waves-light"
                >
                  تعديل
                </button>
              </div>
              {/* </from> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordChangeUserComponent;