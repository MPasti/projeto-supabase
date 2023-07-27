import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.jsx";
import Login from "./routes/Login.jsx";
import CadastroPacientes from "./routes/CadastroPacientes.jsx";
import Success from "./routes/Success.jsx";
import Calendario from "./routes/Calendario.jsx";
import { AppProvider } from "./context/AppContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/cadastro-pacientes", element: <CadastroPacientes /> },
      { path: "/success", element: <Success /> },
      { path: "/calendario", element: <Calendario /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
