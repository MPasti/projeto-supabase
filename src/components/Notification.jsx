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

const Notificacao = () => {
  const [type, setType] = useState("info");
  const [placement, setPlacement] = useState("topStart");
  const toaster = useToaster();

  const message = (
    <Notification type={type} header={type} closable>
      <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
      <hr />
      <Uploader action="#" />
    </Notification>
  );

  return (
    <div>
      {message}
      <hr />
      <ButtonToolbar>
        <SelectPicker
          value={type}
          data={[
            { label: "info", value: "info" },
            { label: "success", value: "success" },
            { label: "warning", value: "warning" },
            { label: "error", value: "error" },
          ]}
          onChange={setType}
          style={{ width: 200 }}
        />
        <SelectPicker
          value={placement}
          data={[
            { label: "topStart", value: "topStart" },
            { label: "topCenter", value: "topCenter" },
            { label: "topEnd", value: "topEnd" },
            { label: "bottomStart", value: "bottomStart" },
            { label: "bottomCenter", value: "bottomCenter" },
            { label: "bottomEnd", value: "bottomEnd" },
          ]}
          onChange={setPlacement}
          style={{ width: 200 }}
        />
        <Button onClick={() => toaster.push(message, { placement })}>
          Push
        </Button>
        <Button onClick={() => toaster.remove()}>Remove</Button>
        <Button onClick={() => toaster.clear()}>Clear</Button>
      </ButtonToolbar>
    </div>
  );
};

export default Notificacao;
