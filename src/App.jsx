import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import AppModal from "./AppModal";
import AppForm from "./AppForm";

const supabase = createClient(
  "https://fdtnfwnyiknfkxwvcfbq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkdG5md255aWtuZmt4d3ZjZmJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNDY1NDIsImV4cCI6MjAwNDkyMjU0Mn0.9UmG6GIaDyHQ7qfizkTnR_py_2__vokyiXiBwiqCttA"
);

function App() {
  const { usuarios, setUsuarios, refresh, setRefresh } = useContext(AppContext);

  //state para ao dar o insert, mudar o estado e usar o useEffect toda vez que der refresh e mudar o nome

  //função de get
  async function getUsuarios() {
    const { data } = await supabase.from("cadastro_usuarios").select();
    setUsuarios(data);
  }
  //função de insert
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

  async function insertUsuarios() {
    const { error } = await supabase.from("cadastro_usuarios").insert({
      nome: "Robertinho",
      email: "roberto@gmail.com",
      cpf: 11122233340,
      endereco: "Rua Whatsapp",
      bairro: "Vila da folha",
      cidade: "São Paulo",
      estado: "SP",
      cep: "14403640",
    });
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

  useEffect(() => {
    getUsuarios();
    setRefresh(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  console.log(usuarios);
  return (
    <div className="container">
      <Outlet></Outlet>
      <Navbar></Navbar>

      <AppModal></AppModal>
      <div style={{ margin: "25px" }}>
        <AppForm></AppForm>
      </div>

      <div className="button-container" style={{ marginTop: "15px" }}>
        <Button
          appearance="primary"
          style={{ marginRight: "10px" }}
          onClick={updateUsuarios}
        >
          update
        </Button>
        <Button
          appearance="primary"
          style={{ marginRight: "10px" }}
          onClick={insertUsuarios}
        >
          insert
        </Button>
        <Button
          appearance="primary"
          style={{ marginRight: "10px" }}
          onClick={deleteUsuarios}
        >
          delete
        </Button>
      </div>
    </div>
  );
}

export default App;
