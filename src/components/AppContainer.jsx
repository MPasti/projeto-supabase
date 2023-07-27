import { useState } from "react";
import { Container, Sidebar, Sidenav, Navbar, Nav } from "rsuite";
import AngleLeftIcon from "@rsuite/icons/legacy/AngleLeft";
import AngleRightIcon from "@rsuite/icons/legacy/AngleRight";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import DashboardIcon from "@rsuite/icons/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import ExitIcon from "@rsuite/icons/Exit";
import { Outlet, useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaHospital, FaLaptopMedical } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import "./styles.css";

const headerStyles = {
  display: "block",
  padding: 15,
  fontWeight: "bold",
  fontSize: 18,
  height: 65,
  background: "#ff4a50",
  color: " #fff",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

// eslint-disable-next-line react/prop-types
const NavToggle = ({ expand, onChange }) => {
  const navigate = useNavigate();
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Nav>
        <Nav.Menu
          noCaret
          placement="topStart"
          trigger="click"
          title={
            <div style={{ marginLeft: "5px" }}>
              <ExitIcon
                style={{
                  fontSize: "18px",
                }}
                size="sm"
              />
            </div>
          }
        >
          <Nav.Item>Ajuda</Nav.Item>
          <Nav.Item>Configurações</Nav.Item>
          <Nav.Item onClick={() => navigate("/login")}>Sair</Nav.Item>
        </Nav.Menu>
      </Nav>

      <Nav pullRight>
        <Nav.Item onClick={onChange}>
          {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

const AppContainer = () => {
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);
  return (
    <div className="show-fake-browser sidebar-page">
      <Container style={{ height: "100vh" }}>
        <Sidebar
          style={{ display: "flex", flexDirection: "column" }}
          width={expand ? 260 : 55}
          collapsible
        >
          <Sidenav.Header>
            <div style={headerStyles}>
              <FaHospital
                style={{
                  fontSize: "1.5em",
                }}
              />
              <span
                style={{
                  marginLeft: "16px",
                  fontSize: "20px",
                }}
              >
                Wuthering Heights
              </span>
            </div>
          </Sidenav.Header>
          <Sidenav
            expanded={expand}
            defaultOpenKeys={["3"]}
            appearance="subtle"
          >
            <Sidenav.Body>
              <Nav>
                <Nav.Item
                  onClick={() => navigate("/")}
                  eventKey="1"
                  icon={
                    <FaHome
                      style={{
                        marginLeft: "-37px",
                        marginRight: "18px",
                        fontSize: "18px",
                      }}
                    />
                  }
                  placement="rightStart"
                >
                  Início
                </Nav.Item>
                <Nav.Item
                  onClick={() => navigate("/login")}
                  eventKey="2"
                  icon={<GroupIcon />}
                  placement="rightStart"
                >
                  Login
                </Nav.Item>
                <Nav.Menu
                  eventKey="4"
                  trigger="hover"
                  title="Pacientes"
                  icon={<DashboardIcon />}
                  placement="rightStart"
                >
                  <Nav.Item
                    onClick={() => navigate("/cadastro-pacientes")}
                    eventKey="4-1"
                  >
                    Cadastro de Pacientes
                  </Nav.Item>
                  <Nav.Item eventKey="4-2">Aparelhos</Nav.Item>
                  <Nav.Item eventKey="4-3">Brand</Nav.Item>
                </Nav.Menu>
                <Nav.Menu
                  eventKey="5"
                  trigger="hover"
                  title="Configurações"
                  icon={<GearCircleIcon />}
                  placement="rightStart"
                >
                  <Nav.Item eventKey="5-1">Applications</Nav.Item>
                  <Nav.Item eventKey="5-2">Websites</Nav.Item>
                  <Nav.Item eventKey="5-3">Channels</Nav.Item>
                </Nav.Menu>
                <Nav.Item
                  onClick={() => navigate("/calendario")}
                  eventKey="6"
                  icon={
                    <FaCalendarAlt
                      style={{
                        marginLeft: "-37px",
                        marginRight: "18px",
                        fontSize: "18px",
                      }}
                    />
                  }
                  placement="rightStart"
                >
                  Agenda
                </Nav.Item>
                <Nav.Item
                  onClick={() => navigate("/login")}
                  eventKey="7"
                  icon={
                    <FaLaptopMedical
                      style={{
                        marginLeft: "-37px",
                        marginRight: "18px",
                        fontSize: "18px",
                      }}
                    />
                  }
                  placement="rightStart"
                >
                  Laudo médico
                </Nav.Item>
                <Nav.Item
                  onClick={() => navigate("/cadastro-teste")}
                  eventKey="8"
                  icon={
                    <FaLaptopMedical
                      style={{
                        marginLeft: "-37px",
                        marginRight: "18px",
                        fontSize: "18px",
                      }}
                    />
                  }
                  placement="rightStart"
                >
                  Teste
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>

        <Outlet></Outlet>
      </Container>
    </div>
  );
};
export default AppContainer;
