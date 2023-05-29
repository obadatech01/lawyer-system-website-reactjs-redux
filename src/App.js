import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/Utils/ProtectedRoute";
import ForgetPasswordPage from "./Page/Auth/ForgetPasswordPage";
import LoginPage from "./Page/Auth/LoginPage";
import ResetPasswordPage from "./Page/Auth/ResetPasswordPage";
import VerifyPasswordPage from "./Page/Auth/VerifyPasswordPage";
import AddCasePage from "./Page/Case/AddCasePage";
import AllCasePage from "./Page/Case/AllCasePage";
import EditCasePage from "./Page/Case/EditCasePage";
import AddClientPage from "./Page/Client/AddClientPage";
import AllClientPage from "./Page/Client/AllClientPage";
import EditClientPage from "./Page/Client/EditClientPage";
import ProfileClientPage from "./Page/Client/ProfileClientPage";
import AddDocumentPage from "./Page/Document/AddDocumentPage";
import AllDocumentPage from "./Page/Document/AllDocumentPage";
import EditDocumentPage from "./Page/Document/EditDocumentPage";
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
import EditUserPage from "./Page/User/EditUserPage";
import ProfileUserPage from "./Page/User/ProfileUserPage";
import ProtectedRouteHook from "./hook/auth/protected-route-hook";

function App() {
  const [
    userData,
    isOwner,
    isVicePresident,
    isSecretary,
    isAccountant,
    isLawyer,
  ] = ProtectedRouteHook();

  return (
    <div className="font color-body">
      <BrowserRouter>
        <Routes>
          {/* auth routes */}
          {userData === null ? (
            <>
              <Route exact path="/login" element={<LoginPage />} />
              <Route
                exact
                path="/forget-password"
                element={<ForgetPasswordPage />}
              />
              <Route
                exact
                path="/verify-code"
                element={<VerifyPasswordPage />}
              />
              <Route
                exact
                path="/reset-password"
                element={<ResetPasswordPage />}
              />

              <Route path="*" element={<LoginPage />} />
            </>
          ) : (
            <>
              <Route exact path="/" element={<HomePage />} />

              {/* cases routes */}
              <Route exact path="/cases" element={<AllCasePage />} />
              <Route
                element={<ProtectedRoute auth={isOwner || isVicePresident} />}
              >
                <Route exact path="/cases-add" element={<AddCasePage />} />
                <Route exact path="/cases-edit/:id" element={<EditCasePage />} />
              </Route>

              {/* clients routes */}
              <Route
                element={
                  <ProtectedRoute auth={isOwner || isVicePresident} />
                }
              >
                <Route exact path="/clients" element={<AllClientPage />} />
                <Route exact path="/clients-add" element={<AddClientPage />} />
                <Route
                  exact
                  path="/clients-edit/:id"
                  element={<EditClientPage />}
                />
                <Route
                  exact
                  path="/clients-profile/:id"
                  element={<ProfileClientPage />}
                />
              </Route>

              {/* documents routes */}
              <Route
                element={
                  <ProtectedRoute auth={isOwner || isVicePresident} />
                }
              >
                <Route exact path="/documents" element={<AllDocumentPage />} />
                <Route
                  exact
                  path="/documents-add"
                  element={<AddDocumentPage />}
                />
                <Route
                  exact
                  path="/documents-edit"
                  element={<EditDocumentPage />}
                />
              </Route>

              {/* expenses routes */}
              <Route
                element={
                  <ProtectedRoute auth={isOwner || isVicePresident} />
                }
              >
                <Route exact path="/expenses" element={<AllExpensePage />} />
                <Route
                  exact
                  path="/expenses-add"
                  element={<AddExpensePage />}
                />
                <Route
                  exact
                  path="/expenses-edit/:id"
                  element={<EditExpensePage />}
                />
              </Route>

              {/* payments routes */}
              <Route
                element={
                  <ProtectedRoute auth={isOwner || isVicePresident} />
                }
              >
                <Route exact path="/payments" element={<AllPaymentPage />} />
                <Route
                  exact
                  path="/payments-add"
                  element={<AddPaymentPage />}
                />
                <Route
                  exact
                  path="/payments-edit"
                  element={<EditPaymentPage />}
                />
              </Route>

              {/* sessions routes */}
              <Route
                element={
                  <ProtectedRoute auth={isOwner || isVicePresident} />
                }
              >
                <Route exact path="/sessions" element={<AllSessionPage />} />
                <Route
                  exact
                  path="/sessions-add"
                  element={<AddSessionPage />}
                />
                <Route
                  exact
                  path="/sessions-edit"
                  element={<EditSessionPage />}
                />
              </Route>

              {/* users routes */}
              <Route
                element={<ProtectedRoute auth={isOwner} />}
              >
                <Route exact path="/users" element={<AllUserPage />} />
                <Route exact path="/users-add" element={<AddUserPage />} />
                <Route exact path="/users-edit" element={<EditUserPage />} />
                <Route
                  exact
                  path="/users-profile"
                  element={<ProfileUserPage />}
                />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
