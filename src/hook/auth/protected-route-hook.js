import { useEffect, useState } from "react";

const ProtectedRouteHook = () => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [isOwner, setIsOwner] = useState(false);
  const [isUsersPermission, setIsUsersPermission] = useState(false);
  const [isClientsPermission, setIsClientsPermission] = useState(false);
  const [isCasesPermission, setIsCasesPermission] = useState(false);
  const [isSessionsPermission, setIsSessionsPermission] = useState(false);
  const [isDocumentsPermission, setIsDocumentsPermission] = useState(false);
  const [isExpensesPermission, setIsExpensesPermission] = useState(false);
  const [isPaymentsPermission, setIsPaymentsPermission] = useState(false);
  const [isRolesPermission, setIsRolesPermission] = useState(false);

  useEffect(() => {
    if (userData != null) {
      if (userData.role === "owner") {
        setIsOwner(true);
      } else {
        setIsOwner(false);
      }

      userData.permissions.permissions.map((permission) => {
        switch (permission) {
          case "users-permission":
            setIsUsersPermission(true);
            break;

          case "clients-permission":
            setIsClientsPermission(true);
            break;

          case "cases-permission":
            setIsCasesPermission(true);
            break;

          case "sessions-permission":
            setIsSessionsPermission(true);
            break;

          case "documents-permission":
            setIsDocumentsPermission(true);
            break;

          case "expenses-permission":
            setIsExpensesPermission(true);
            break;

          case "payments-permission":
            setIsPaymentsPermission(true);
            break;

          case "roles-permission":
            setIsRolesPermission(true);
            break;

          default:
            break;
        }
      });
    } else {
      setIsOwner(false);
      setIsUsersPermission(false);
      setIsClientsPermission(false);
      setIsCasesPermission(false);
      setIsSessionsPermission(false);
      setIsDocumentsPermission(false);
      setIsExpensesPermission(false);
      setIsPaymentsPermission(false);
      setIsRolesPermission(false);
    }
  }, [userData]);

  return [
    userData,
    isOwner,
    isUsersPermission,
    isClientsPermission,
    isCasesPermission,
    isSessionsPermission,
    isDocumentsPermission,
    isExpensesPermission,
    isPaymentsPermission,
    isRolesPermission,
  ];
};

export default ProtectedRouteHook;
