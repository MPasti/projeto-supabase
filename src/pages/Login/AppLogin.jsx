import {
  Container,
  Header,
  Content,
  Footer,
  Form,
  ButtonToolbar,
  Button,
  Navbar,
  Panel,
  FlexboxGrid,
} from "rsuite";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AppLogin = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginForm.email,
      password: loginForm.password,
    });
  }

  return (
    <div className="show-fake-browser login-page">
      <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Brand>
              <a style={{ color: "#fff" }}>Wuthering Heights</a>
            </Navbar.Brand>
          </Navbar>
        </Header>
        <Content>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12}>
              <Panel header={<h3>Login</h3>} bordered>
                <Form
                  fluid
                  ref={formRef}
                  onChange={setLoginForm}
                  onCheck={setFormError}
                  formValue={loginForm}
                  model={model}
                >
                  <Form.Group>
                    <Form.ControlLabel>
                      Entre com o usuário ou com o Email
                    </Form.ControlLabel>
                    <Form.Control name="name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.ControlLabel>Senha</Form.ControlLabel>
                    <Form.Control
                      name="password"
                      type="password"
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group>
                    <ButtonToolbar>
                      <Button
                        onClick={() => navigate("/")}
                        appearance="primary"
                      >
                        Logar
                      </Button>
                      <Button
                        onClick={() => navigate("/cadastro")}
                        appearance="primary"
                      >
                        Cadastrar
                      </Button>
                      <Button appearance="link">Esqueceu a senha?</Button>
                    </ButtonToolbar>
                  </Form.Group>
                </Form>
              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
        <Footer>Footer</Footer>
      </Container>
    </div>
  );
};
export default AppLogin;
