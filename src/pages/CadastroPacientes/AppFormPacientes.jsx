import * as locales from "rsuite/locales";
import {
  Form,
  Button,
  ButtonToolbar,
  Schema,
  Panel,
  FlexboxGrid,
  Grid,
  Col,
  Row,
  useToaster,
  DatePicker,
} from "rsuite";
import { JSONTree } from "react-json-tree";
import { forwardRef, useContext, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { successMessage, errorMessage } from "../../components/Notificacao";

// eslint-disable-next-line react/prop-types, no-unused-vars
const JSONView = ({ formValue, formError }) => (
  <div style={{ marginBottom: 10 }}>
    <Panel className="json-tree-wrapper" header={<p>formValue</p>}>
      <JSONTree data={formValue} />
    </Panel>

    <Panel className="json-tree-wrapper" header={<p>formError</p>}>
      <JSONTree data={formError} />
    </Panel>
  </div>
);

const data = Object.keys(locales).map((key) => ({
  key,
  value: locales[key],
}));

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired("O nome é obrigatório"),
  email: StringType()
    .isEmail("Por favor, entre um Email válido")
    .isRequired("Este campo é obrigatório"),
  cpf: StringType().isRequired("O CPF é obrigatório"),
  cep: StringType().isRequired("O CEP é obrigatório"),
  endereco: StringType().isRequired("O endereço é obrigatório"),
  bairro: StringType().isRequired("O bairro é obrigatório"),
  cidade: StringType().isRequired("A cidade é obrigatório"),
  estado: StringType().isRequired("O Estado é obrigatório"),
});

const TextField = forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

const AppFormPacientes = () => {
  const [localeKey, setLocaleKey] = useState("ptBR");
  const locale = data.find((item) => item.key === localeKey);
  const toaster = useToaster();
  const { formPacientes, setFormPacientes, insertPacientes, local, placement } =
    useContext(AppContext);
  const formRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const [formError, setFormError] = useState({});
  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error("Form Error");
      toaster.push(errorMessage, { placement });
      return;
    }
    console.log(formPacientes, "Form Value");
    insertPacientes();
    toaster.push(successMessage, { placement });
  };

  const handleClean = () => {
    setFormPacientes({
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
    setFormError({});
  };

  const handleCheckEmail = () => {
    formRef.current.checkForField("email", (checkResult) => {
      console.log(checkResult);
    });
  };

  return (
    <FlexboxGrid
      style={{
        margin: "5%",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <FlexboxGrid.Item>
        <Form
          ref={formRef}
          onChange={setFormPacientes}
          onCheck={setFormError}
          formValue={formPacientes}
          model={model}
        >
          <Grid>
            <Row>
              <Col xs={5} xsPush={0}>
                <TextField name="name" label="Nome"></TextField>
              </Col>

              <Col xs={5} xsPush={3}>
                <TextField name="email" label="Email" />
              </Col>
              <Col xs={5} xsPush={6}>
                <TextField name="cpf" label="CPF" />
              </Col>
            </Row>
          </Grid>

          <Grid style={{ marginTop: "5%" }}>
            <Row>
              <Col xs={5} xsPush={0}>
                <TextField name="cep" label="CEP" />
              </Col>
              <Col xs={5} xsPush={3}>
                <TextField name="endereco" label="Endereço" />
              </Col>
              <Col xs={5} xsPush={6}>
                <TextField name="bairro" label="Bairro" />
              </Col>
            </Row>
          </Grid>

          <Grid style={{ marginTop: "5%" }}>
            <Row>
              <Col xs={5} xsPush={0}>
                <TextField name="cidade" label="Cidade" />
              </Col>
              <Col xs={5} xsPush={3}>
                <TextField name="estado" label="Estado" />
              </Col>
              <Col xs={5} xsPush={6}>
                <Form.Group controlId="nascimento" style={{ width: 300 }}>
                  <Form.ControlLabel>Data de nascimento</Form.ControlLabel>
                  <Form.Control
                    style={{ width: 300 }}
                    name="nascimento"
                    format="dd/MM/yyyy"
                    accepter={DatePicker}
                    locale={local}
                  />
                </Form.Group>
              </Col>
            </Row>

            <div style={{ margin: "5% 0% 0% 0%" }}>
              <ButtonToolbar>
                <Button appearance="primary" onClick={handleSubmit}>
                  Enviar
                </Button>

                <Button color="orange" appearance="ghost" onClick={handleClean}>
                  Limpar
                </Button>
                <Button
                  onClick={() => {
                    toaster.push(successMessage, { placement });
                  }}
                >
                  Sucesso
                </Button>
                <Button
                  onClick={() => {
                    toaster.push(errorMessage, { placement });
                  }}
                >
                  Erro
                </Button>
                <Button onClick={handleCheckEmail}>Verificar Email</Button>
              </ButtonToolbar>
            </div>
          </Grid>
        </Form>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={12}>
        <JSONView formValue={formPacientes} formError={formError} />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default AppFormPacientes;
