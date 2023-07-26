import { Container, Content, Header } from "rsuite";
import AppConectionPacientes from "../pages/CadastroPacientes/AppConectionPacientes";

const Cadastrar = () => {
  return (
    <Container>
      <Header style={{ height: "10.4%" }}>
        <h2 style={{ margin: "1.2% 0 0 2%" }}> Cadastro de Pacientes</h2>
      </Header>
      <Content>
        <AppConectionPacientes></AppConectionPacientes>
      </Content>
    </Container>
  );
};

export default Cadastrar;
