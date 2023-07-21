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
  const [formPacientes, setFormPacientes] = useState({
    name: "",
    email: "",
    age: "",
    cpf: "",
    endereco: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
  });

  const value = {
    usuarios,
    setUsuarios,
    refresh,
    setRefresh,
    formValue,
    setFormValue,
    formPacientes,
    setFormPacientes,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
