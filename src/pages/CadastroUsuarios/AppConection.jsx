import { useEffect } from "react";
import { Button, Divider } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import AppModal from "../CadastroPacientes/AppModal";
import AppForm from "./AppForm";

function AppConection() {
  const { usuarios, setUsuarios, refresh, setRefresh, formValue, supabase } =
    useContext(AppContext);

  //state para ao dar o insert, mudar o estado e usar o useEffect toda vez que der refresh e mudar o nome

  //função de get
  async function getUsuarios() {
    const { data } = await supabase.from("usuarios_cadastrados").select();
    setUsuarios(data);
  }
  //função de insert
  async function updateUsuarios() {
    const { error } = await supabase
      .from("usuarios_cadastrados")
      .update({ usuario: "Matheus" })
      .eq("id", 1);
    if (error) {
      console.log(error.message);
    }
    setRefresh(true);
  }

  async function insertUsuarios() {
    async function signInWithEmail() {
      const { data, error } = await supabase.auth.signUp({
        email: formValue.name,
        password: formValue.password,
      });
    }
    console.log(formValue);
    const { error } = await supabase.from("usuarios_cadastrados").insert({
      usuario: formValue.name,
      email: formValue.email,
      senha: formValue.password,
    });
    if (error) {
      console.log(error.message);
    }
    setRefresh(true);
  }

  async function deleteUsuarios() {
    const { error } = await supabase
      .from("usuarios_cadastrados")
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
      <Divider style={{ margin: "0 0 0 0" }}></Divider>

      <div style={{ margin: "30px", position: "relative" }}>
        <div style={{ position: "absolute", right: "5%" }}>
          <AppModal></AppModal>
        </div>
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

export default AppConection;
