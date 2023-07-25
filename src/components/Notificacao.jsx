import {
  Notification,
  useToaster,
  Placeholder,
  Uploader,
  ButtonToolbar,
  SelectPicker,
  Button,
} from "rsuite";
import { useState } from "react";

export const successMessage = (
  <Notification type={"success"} header={"Sucesso"} closable>
    <h5> Paciente cadastrado com sucesso </h5>
    <hr />
  </Notification>
);

export const errorMessage = (
  <Notification type={"error"} header={"Erro"} closable>
    <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
    <hr />
  </Notification>
);

const Notificacao = () => {
  const [placement, setPlacement] = useState("topEnd");
  const toaster = useToaster();

  return (
    <div>
      {successMessage}
      <hr />
      <ButtonToolbar>
        <Button onClick={() => toaster.push(successMessage, { placement })}>
          Push
        </Button>
        <Button onClick={() => toaster.remove()}>Remove</Button>
        <Button onClick={() => toaster.clear()}>Clear</Button>
      </ButtonToolbar>
    </div>
  );
};

export default Notificacao;
