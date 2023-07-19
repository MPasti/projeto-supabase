import { createContext, useState } from "react";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    verifyPassword: "",
  });

  const value = {
    usuarios,
    setUsuarios,
    refresh,
    setRefresh,
    formValue,
    setFormValue,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
