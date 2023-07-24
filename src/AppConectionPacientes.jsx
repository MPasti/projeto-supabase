import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button, Divider } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import AppModal from "./AppModal";
import AppFormPacientes from "./AppFormPacientes";

const supabase = createClient(
  "https://fdtnfwnyiknfkxwvcfbq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkdG5md255aWtuZmt4d3ZjZmJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNDY1NDIsImV4cCI6MjAwNDkyMjU0Mn0.9UmG6GIaDyHQ7qfizkTnR_py_2__vokyiXiBwiqCttA"
);

function AppConectionPacientes() {
  const { usuarios, setUsuarios, refresh, setRefresh, formPacientes } =
    useContext(AppContext);

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
      <Divider style={{ margin: "0 0 2% 0" }}></Divider>
      <div style={{ position: "absolute", right: "5%" }}>
        <AppModal></AppModal>
      </div>
      <div style={{ margin: "30px", position: "relative" }}>
        <AppFormPacientes></AppFormPacientes>
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

export default AppConectionPacientes;
