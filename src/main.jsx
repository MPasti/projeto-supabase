import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.jsx";
import Login from "./routes/Login.jsx";
import CadastroPacientes from "./routes/CadastroPacientes.jsx";
import Success from "./routes/Success.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/cadastro-pacientes", element: <CadastroPacientes /> },
      { path: "/success", element: <Success /> },
    ],
  },
]);

import { AppProvider } from "./context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
