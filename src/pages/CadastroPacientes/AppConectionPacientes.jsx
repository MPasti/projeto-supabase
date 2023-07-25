import { useEffect } from "react";
import { Divider } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import AppModal from "./AppModal";
import AppFormPacientes from "./AppFormPacientes";
import Notificacao from "../../components/Notificacao";

function AppConectionPacientes() {
  const { usuarios, refresh, setRefresh, getUsuarios } = useContext(AppContext);

  //state para ao dar o insert, mudar o estado e usar o useEffect toda vez que der refresh e mudar o nome

  //função de get

  //função de insert

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
    </div>
  );
}

export default AppConectionPacientes;
