import { useEffect, useState } from "react";

const ProtectedRouteHook = () => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [isOwner, setIsOwner] = useState(false);
  const [isVicePresident, setIsVicePresident] = useState(false);
  const [isSecretary, setIsSecretary] = useState(false);
  const [isAccountant, setIsAccountant] = useState(false);
  const [isLawyer, setIsLawyer] = useState(false);

  useEffect(() => {
    if (userData != null) {
      switch (userData.role) {
        case "مدير":
          setIsOwner(true);
          break;

        case "نائب مدير":
          setIsVicePresident(true);
          break;

        case "سكرتير":
          setIsSecretary(true);
          break;

        case "محاسب":
          setIsAccountant(true);
          break;

        case "محامي":
          setIsLawyer(true);
          break;

        default:
          break;
      }
    } else {
      setIsOwner(false);
      setIsVicePresident(false);
      setIsSecretary(false);
      setIsAccountant(false);
      setIsLawyer(false);
    }
  }, [userData]);

  return [
    userData,
    isOwner,
    isVicePresident,
    isSecretary,
    isAccountant,
    isLawyer,
  ];
};

export default ProtectedRouteHook;
