import { useState } from "react";
import { Container, Sidebar, Sidenav, Navbar, Nav } from "rsuite";
import AngleLeftIcon from "@rsuite/icons/legacy/AngleLeft";
import AngleRightIcon from "@rsuite/icons/legacy/AngleRight";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import DashboardIcon from "@rsuite/icons/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import ExitIcon from "@rsuite/icons/Exit";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaHospital } from "react-icons/fa";

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
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Nav>
        <Nav.Menu
          noCaret
          placement="topStart"
          trigger="click"
          title={<ExitIcon style={{ width: 20, height: 20 }} size="sm" />}
        >
          <Nav.Item>Ajuda</Nav.Item>
          <Nav.Item>Configurações</Nav.Item>
          <Nav.Item>
            <Link to="/login"> Sair </Link>
          </Nav.Item>
        </Nav.Menu>
      </Nav>

      <Nav pullRight>
        <Nav.Item onClick={onChange} style={{ width: 56, textAlign: "center" }}>
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
      <Container>
        <Sidebar
          style={{ display: "flex", flexDirection: "column" }}
          width={expand ? 260 : 60}
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
                  marginLeft: "18px",
                  fontSize: "22px",
                }}
              >
                Hospital
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
                  active
                  icon={<DashboardIcon />}
                >
                  Home
                </Nav.Item>
                <Nav.Item
                  onClick={() => navigate("/login")}
                  eventKey="2"
                  icon={<GroupIcon />}
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
                  <Nav.Item eventKey="5-4">Tags</Nav.Item>
                  <Nav.Item eventKey="5-5">Versões</Nav.Item>
                </Nav.Menu>
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
