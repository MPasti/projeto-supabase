import { Container, Content } from "rsuite";
import AppCalendar from "../pages/Calendar/AppCalendar";
import CalendarioRsuite from "../components/Calendar";

const Calendario = () => {
  return (
    <Container>
      <Content>
        <CalendarioRsuite></CalendarioRsuite>
      </Content>
    </Container>
  );
};

export default Calendario;
