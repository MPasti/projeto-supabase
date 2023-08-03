import { createContext, useState } from "react";
import { supabase } from "../supabase/Client";
import ptBR from "rsuite/locales/pt_BR";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [usuarios, setUsuarios] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [placement, setPlacement] = useState("topEnd");
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
    cpf: "",
    endereco: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    nascimento: null,
  });

  const local = {
    sunday: "Dom",
    monday: "Seg",
    tuesday: "Terç",
    wednesday: "Qua",
    thursday: "Qui",
    friday: "Sex",
    saturday: "Sáb",
    ok: "OK",
    today: "Hoje",
    yesterday: "Ontem",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    formattedMonthPattern: "MMM, yyyy",
    formattedDayPattern: "dd MMM, yyyy",
    dateLocale: ptBR,
  };

  async function insertUsuarios() {
    console.log("caiu");
    const { error } = await supabase.auth.signUp({
      email: formValue.email,
      senha: formValue.password,
    });
    if (error) {
      console.log(error.message);
    }
    setRefresh(true);
  }

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
      nascimento: formPacientes.nascimento,
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
    local,
    placement,
    user,
    setUser,
    insertUsuarios,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
