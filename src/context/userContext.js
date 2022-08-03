import React from "react";

//Create Context
const UserContext = React.createContext(undefined);

//Custom Provider
function UserProvider({ children }) {
  const [userData] = React.useState({
    name: "Huzaifa",
  });

  //Create Provider
  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}

//Get User Context through Custom Hooks
const useUserContext = () => {
  const context = React.useContext(UserContext);
  return context;
};

export { UserProvider, useUserContext };
