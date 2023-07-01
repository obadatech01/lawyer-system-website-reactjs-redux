import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

const CurrentLocation = () => {
  const location = useLocation();
  const [user, setUser] = useState("");
  const [locations, setLocations] = useState({
    homeLocation: false,
    clientLocation: false,
    caseLocation: false,
    sessionLocation: false,
    documentLocation: false,
    paymentLocation: false,
    expenseLocation: false,
    userLocation: false
  });

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  useEffect(() => {
    const pathMapping = {
      '/': 'homeLocation',
      '/clients': 'clientLocation',
      '/cases': 'caseLocation',
      '/sessions': 'sessionLocation',
      '/documents': 'documentLocation',
      '/payments': 'paymentLocation',
      '/expenses': 'expenseLocation',
      '/users': 'userLocation'
    };

    const updateLocation = (path) => {
      const newLocations = { ...locations };
      for (const key in newLocations) {
        newLocations[key] = false;
      }
      newLocations[pathMapping[path]] = true;
      setLocations(newLocations);
    };

    updateLocation(location.pathname);
  }, [location]);

  return [user, ...Object.values(locations)];
}

export default CurrentLocation;