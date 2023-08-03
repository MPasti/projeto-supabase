import {
  Form,
  Button,
  ButtonToolbar,
  Schema,
  Panel,
  FlexboxGrid,
} from "rsuite";
import { JSONTree } from "react-json-tree";
import { forwardRef, useContext, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";

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

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired("Este campo é obrigatório"),
  email: StringType()
    .isEmail("Por favor, entre um Email válido")
    .isRequired("Este campo é obrigatório"),
  password: StringType().isRequired("Este campo é obrigatório"),
  verifyPassword: StringType()
    .addRule((value, data) => {
      console.log(data);

      if (value !== data.password) {
        return false;
      }

      return true;
    }, "As duas senhas não correspondem")
    .isRequired("Este campo é obrigatório"),
});

const TextField = forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

const AppForm = () => {
  const { formValue, setFormValue, insertUsuarios } = useContext(AppContext);
  const formRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const [formError, setFormError] = useState({});

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error("Form Error");
      return;
    }
    insertUsuarios();
    console.log(formValue, "Form Value");
  };

  const handleClean = () => {
    setFormValue({
      name: "",
      email: "",
      age: "",
      password: "",
      verifyPassword: "",
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
        justifyContent: "center",
      }}
    >
      <FlexboxGrid.Item colspan={12}>
        <Form
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          ref={formRef}
          onChange={setFormValue}
          onCheck={setFormError}
          formValue={formValue}
          model={model}
        >
          <TextField name="name" label="Usuário" />
          <TextField name="email" label="Email" />
          <TextField
            name="password"
            label="Senha"
            type="password"
            autoComplete="off"
          />
          <TextField
            name="verifyPassword"
            label="Verificação de Senha"
            type="password"
            autoComplete="off"
          />

          <ButtonToolbar>
            <Button appearance="primary" onClick={handleSubmit}>
              Enviar
            </Button>

            <Button color="orange" appearance="ghost" onClick={handleClean}>
              Limpar
            </Button>

            <Button onClick={handleCheckEmail}>Verificar Email</Button>
          </ButtonToolbar>
        </Form>
      </FlexboxGrid.Item>
      {/* <FlexboxGrid.Item colspan={12}>
        <JSONView formValue={formValue} formError={formError} />
      </FlexboxGrid.Item> */}
    </FlexboxGrid>
  );
};

export default AppForm;
