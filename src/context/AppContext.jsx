import { createContext, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const supabase = createClient(
    "https://fdtnfwnyiknfkxwvcfbq.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkdG5md255aWtuZmt4d3ZjZmJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNDY1NDIsImV4cCI6MjAwNDkyMjU0Mn0.9UmG6GIaDyHQ7qfizkTnR_py_2__vokyiXiBwiqCttA"
  );
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

  async function insertPacientes() {
    const { error } = await supabase.from("cadastro_usuarios").insert({
      nome: formPacientes.name,
      email: formPacientes.email,
      cpf: formPacientes.cpf,
      idade: formPacientes.age,
      endereco: formPacientes.endereco,
      bairro: formPacientes.bairro,
      cidade: formPacientes.cidade,
      estado: formPacientes.estado,
      cep: formPacientes.cep,
    });
    if (error) {
      console.log(error.message);
    }
    setRefresh(true);
  }

  const value = {
    usuarios,
    setUsuarios,
    refresh,
    setRefresh,
    formValue,
    setFormValue,
    formPacientes,
    setFormPacientes,
    supabase,
    insertPacientes,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
