import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import ForgetPasswordPage from "./Page/Auth/ForgetPasswordPage";
import LoginPage from "./Page/Auth/LoginPage";
import ResetPasswordPage from "./Page/Auth/ResetPasswordPage";
import VerifyPasswordPage from "./Page/Auth/VerifyPasswordPage";
import AddCasePage from "./Page/Case/AddCasePage";
import AllCasePage from "./Page/Case/AllCasePage";
import EditCasePage from "./Page/Case/EditCasePage";
import ProfileCasePage from "./Page/Case/ProfileCasePage";
import AddClientPage from "./Page/Client/AddClientPage";
import AllClientPage from "./Page/Client/AllClientPage";
import EditClientPage from "./Page/Client/EditClientPage";
import ProfileClientPage from "./Page/Client/ProfileClientPage";
import AddDocumentPage from "./Page/Document/AddDocumentPage";
import AllDocumentPage from "./Page/Document/AllDocumentPage";
import AddExpensePage from "./Page/Expense/AddExpensePage";
import AllExpensePage from "./Page/Expense/AllExpensePage";
import EditExpensePage from "./Page/Expense/EditExpensePage";
import HomePage from "./Page/Home/HomePage";
import NotFoundPage from "./Page/NotFound/NotFoundPage";
import AddPaymentPage from "./Page/Payment/AddPaymentPage";
import AllPaymentPage from "./Page/Payment/AllPaymentPage";
import EditPaymentPage from "./Page/Payment/EditPaymentPage";
import AddSessionPage from "./Page/Session/AddSessionPage";
import AllSessionPage from "./Page/Session/AllSessionPage";
import EditSessionPage from "./Page/Session/EditSessionPage";
import AddUserPage from "./Page/User/AddUserPage";
import AllUserPage from "./Page/User/AllUserPage";
import EditProfileMe from "./Page/User/EditProfileMe";
import EditUserPage from "./Page/User/EditUserPage";
import PasswordChangeMePage from "./Page/User/PasswordChangeMePage";
import PasswordChangeUserPage from "./Page/User/PasswordChangeUserPage";

function App() {
  useEffect(() => {
    Auth.init();
  }, []);
  console.log(localStorage.getItem('obada'));

  return (
    <div className="font color-body">
      <BrowserRouter>
        <Routes>
          {Auth.guest() && (
            <>
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/forget-password" element={<ForgetPasswordPage />} />
              <Route exact path="/verify-code" element={<VerifyPasswordPage />} />
              <Route exact path="/reset-password" element={<ResetPasswordPage />} />
            </>
          )}

          {Auth.auth() && (
            <>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/cases" element={<AllCasePage />} />
              <Route exact path="/cases-profile/:id" element={<ProfileCasePage />} />
              <Route exact path="/clients" element={<AllClientPage />} />
              <Route exact path="/clients-profile/:id" element={<ProfileClientPage />} />
              <Route exact path="/documents" element={<AllDocumentPage />} />
              <Route exact path="/payments" element={<AllPaymentPage />} />
              <Route exact path="/sessions" element={<AllSessionPage />} />
              <Route exact path="/profile-edit" element={<EditProfileMe />} />
              <Route exact path="/password-change-me" element={<PasswordChangeMePage />} />
            </>
          )}

          {(Auth.isOwner || Auth.isLawyer) && (
            <>
              <Route exact path="/cases-add" element={<AddCasePage />} />
              <Route exact path="/clients-add" element={<AddClientPage />} />
              <Route exact path="/documents-add" element={<AddDocumentPage />} />
            </>
          )}

          {(Auth.isOwner || Auth.isAccountant) && (
            <>
              <Route exact path="/expenses" element={<AllExpensePage />} />
              <Route exact path="/expenses-add" element={<AddExpensePage />} />
              <Route exact path="/expenses-edit/:id" element={<EditExpensePage />} />
            </>
          )}

          {(Auth.isOwner || Auth.isSecretary) && (
            <>
              <Route exact path="/users" element={<AllUserPage />} />
            </>
          )}

          {(Auth.isOwner || Auth.isLawyer || Auth.isAccountant) && (
            <>
              <Route exact path="/payments-add" element={<AddPaymentPage />} />
              <Route exact path="/payments-edit/:id" element={<EditPaymentPage />} />
            </>
          )}

          {(Auth.isOwner || Auth.isLawyer || Auth.isSecretary) && (
            <>
              <Route exact path="/sessions-add" element={<AddSessionPage />} />
              <Route exact path="/sessions-edit/:id" element={<EditSessionPage />} />
            </>
          )}

          {Auth.isOwner() && (
            <>
              <Route exact path="/users-add" element={<AddUserPage />} />
              <Route exact path="/users-edit/:id" element={<EditUserPage />} />
              <Route exact path="/users-password-change/:id" element={<PasswordChangeUserPage />} />
              <Route exact path="/cases-edit/:id" element={<EditCasePage />} />
              <Route exact path="/clients-edit/:id" element={<EditClientPage />} />
            </>
          )}

          {
            Auth.guest() ?
            <Route path="*" element={<LoginPage />} /> :
            <Route path="*" element={<NotFoundPage />} />
          }

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
