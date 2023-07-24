import { Container, Content, Header } from "rsuite";
import AppConection from "../pages/CadastroUsuarios/AppConection";

const Home = () => {
  return (
    <Container>
      <Header style={{ height: "10.4%" }}>
        <h2 style={{ margin: "1.2% 0 0 2%" }}> Cadastro de usuários</h2>
      </Header>
      <Content>
        <AppConection></AppConection>
      </Content>
    </Container>
  );
};

export default Home;
