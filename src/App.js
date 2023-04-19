import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import LoginPage from './Page/Auth/LoginPage';
import AllCasePage from './Page/Case/AllCasePage';
import AddCasePage from './Page/Case/AddCasePage';
import EditCasePage from './Page/Case/EditCasePage';
import AllClientPage from './Page/Client/AllClientPage';
import AddClientPage from './Page/Client/AddClientPage';
import EditClientPage from './Page/Client/EditClientPage';
import ProfileClientPage from './Page/Client/ProfileClientPage';
import AllDocumentPage from './Page/Document/AllDocumentPage';
import AddDocumentPage from './Page/Document/AddDocumentPage';
import EditDocumentPage from './Page/Document/EditDocumentPage';
import AllExpensePage from './Page/Expense/AllExpensePage';
import AddExpensePage from './Page/Expense/AddExpensePage';
import EditExpensePage from './Page/Expense/EditExpensePage';
import HomePage from './Page/Home/HomePage';
import NotFoundPage from './Page/NotFound/NotFoundPage';
import AllPaymentPage from './Page/Payment/AllPaymentPage';
import AddPaymentPage from './Page/Payment/AddPaymentPage';
import EditPaymentPage from './Page/Payment/EditPaymentPage';
import AllPermissionPage from './Page/Permission/AllPermissionPage';
import AddPermissionPage from './Page/Permission/AddPermissionPage';
import EditPermissionPage from './Page/Permission/EditPermissionPage';
import AllSessionPage from './Page/Session/AllSessionPage';
import AddSessionPage from './Page/Session/AddSessionPage';
import EditSessionPage from './Page/Session/EditSessionPage';
import AllUserPage from './Page/User/AllUserPage';
import AddUserPage from './Page/User/AddUserPage';
import EditUserPage from './Page/User/EditUserPage';
import ProfileUserPage from './Page/User/ProfileUserPage';
import ForgetPasswordPage from './Page/Auth/ForgetPasswordPage';
import VerifyPasswordPage from './Page/Auth/VerifyPasswordPage';
import ResetPasswordPage from './Page/Auth/ResetPasswordPage';


function App() {
  return (
    <div className="font color-body">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />

          {/* cases routes */}
          <Route exact path="/cases" element={<AllCasePage />} />
          <Route exact path="/cases-add" element={<AddCasePage />} />
          <Route exact path="/cases-edit" element={<EditCasePage />} />
          
          {/* clients routes */}
          <Route exact path="/clients" element={<AllClientPage />} />
          <Route exact path="/clients-add" element={<AddClientPage />} />
          <Route exact path="/clients-edit/:id" element={<EditClientPage />} />
          <Route exact path="/clients-profile/:id" element={<ProfileClientPage />} />
                    
          {/* documents routes */}
          <Route exact path="/documents" element={<AllDocumentPage />} />
          <Route exact path="/documents-add" element={<AddDocumentPage />} />
          <Route exact path="/documents-edit" element={<EditDocumentPage />} />
          
          {/* expenses routes */}
          <Route exact path="/expenses" element={<AllExpensePage />} />
          <Route exact path="/expenses-add" element={<AddExpensePage />} />
          <Route exact path="/expenses-edit" element={<EditExpensePage />} />
          
          {/* payments routes */}
          <Route exact path="/payments" element={<AllPaymentPage />} />
          <Route exact path="/payments-add" element={<AddPaymentPage />} />
          <Route exact path="/payments-edit" element={<EditPaymentPage />} />
          
          {/* permissions routes */}
          <Route exact path="/permissions" element={<AllPermissionPage />} />
          <Route exact path="/permissions-add" element={<AddPermissionPage />} />
          <Route exact path="/permissions-edit" element={<EditPermissionPage />} />

          {/* sessions routes */}
          <Route exact path="/sessions" element={<AllSessionPage />} />
          <Route exact path="/sessions-add" element={<AddSessionPage />} />
          <Route exact path="/sessions-edit" element={<EditSessionPage />} />

          {/* users routes */}
          <Route exact path="/users" element={<AllUserPage />} />
          <Route exact path="/users-add" element={<AddUserPage />} />
          <Route exact path="/users-edit" element={<EditUserPage />} />
          <Route exact path="/users-profile" element={<ProfileUserPage />} />
          
          {/* auth routes */}
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/forget-password" element={<ForgetPasswordPage />} />
          <Route exact path="/verify-code" element={<VerifyPasswordPage />} />
          <Route exact path="/reset-password" element={<ResetPasswordPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;