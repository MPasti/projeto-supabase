import { createContext, useState } from "react";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const value = {
    usuarios,
    setUsuarios,
    refresh,
    setRefresh,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
