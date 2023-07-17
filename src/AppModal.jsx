import React, { useContext } from "react";
import { Modal, ButtonToolbar, Button, Placeholder } from "rsuite";
import { AppContext } from "./context/AppContext";

const AppModal = () => {
  const { usuarios } = useContext(AppContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* <RadioGroup
        name="radioList"
        appearance="picker"
        inline
        value={"backdrop"}
        onChange={(value) => setBackdrop(value)}
      >
        <span style={styles.radioGroupLabel}>Backdrop: </span>
        <Radio value="static">static</Radio>
        <Radio value={true}>true</Radio>
        <Radio value={false}>false</Radio>
      </RadioGroup> */}
      <hr />
      <ButtonToolbar>
        <Button color="cyan" appearance="ghost" onClick={handleOpen}>
          Abrir
        </Button>
      </ButtonToolbar>

      <Modal backdrop={true} keyboard={false} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Lista de usuários cadastrados</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Placeholder.Paragraph />
          <ul>
            {usuarios.map((usuario) => (
              <li key={usuario.id}>{usuario.nome}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AppModal;