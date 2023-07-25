import { createContext, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "../supabase/Client";

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

  async function getUsuarios() {
    const { data } = await supabase.from("cadastro_usuarios").select();
    setUsuarios(data);
  }

  async function updateUsuarios() {
    const { error } = await supabase
      .from("cadastro_usuarios")
      .update({ nome: "Matheus" })
      .eq("id", 1);
    if (error) {
      console.log(error.message);
    }
    setRefresh(true);
  }

  async function deleteUsuarios() {
    const { error } = await supabase
      .from("cadastro_usuarios")
      .delete()
      .eq("id", 5);
    if (error) {
      console.log(error.message);
    }
    setRefresh(true);
  }

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
    getUsuarios,
    updateUsuarios,
    deleteUsuarios,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
