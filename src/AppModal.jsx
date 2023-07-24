import { useContext, useState } from "react";
import { Modal, ButtonToolbar, Button } from "rsuite";
import { AppContext } from "./context/AppContext";

const AppModal = () => {
  const { usuarios } = useContext(AppContext);
  const [open, setOpen] = useState(false);
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
      <ButtonToolbar>
        <Button color="cyan" appearance="ghost" onClick={handleOpen}>
          Pacientes cadastrados
        </Button>
      </ButtonToolbar>

      <Modal backdrop={true} keyboard={false} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Lista de pacientes cadastrados</Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
