import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import "../Login/App.css";
import { supabase } from "../../supabase/Client";

function AppLogin() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event === "SIGNED_IN") {
      // vai para o sucesso
      navigate("/success");
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <Auth
          supabaseClient={supabase}
          localization={{
            variables: {
              sign_in: {
                email_label: "Entre com seu Email",
                password_label: "Entre com sua senha",
                email_input_placeholder: "Email",
                password_input_placeholder: "Senha",
                button_label: "Entrar",
                loading_button_label: "Entrando...",
                social_provider_text: "Entrar com o {{provider}}",
                link_text: "Logar com uma conta",
                confirmation_text: "Olhe seu Email pelo link de confirmação",
              },
              sign_up: {
                email_label: "Entre com seu Email",
                password_label: "Crie uma senha",
                email_input_placeholder: "Email",
                password_input_placeholder: "Senha",
                button_label: "Entrar",
                loading_button_label: "Entrando...",
                social_provider_text: "Entrar com o {{provider}}",
                link_text: "Não possui uma conta? Crie uma!",
                confirmation_text: "Olhe seu Email pelo link de confirmação",
              },
              forgotten_password: {
                email_label: "Entre seu Email",
                password_label: "Entre com sua senha",
                email_input_placeholder: "Email",
                password_input_placeholder: "Senha",
                button_label: "Entrar",
                loading_button_label: "Entrando...",
                social_provider_text: "Entrar com o {{provider}}",
                link_text: "Esqueceu sua senha?",
                confirmation_text: "Olhe seu Email pelo link de confirmação",
              },
            },
          }}
          appearance={{
            style: {
              button: { background: "black", color: "white" },
              anchor: { color: "blue" },
              //..
            },
          }}
          providers={["discord", "google"]}
        />
      </header>
    </div>
  );
}

export default AppLogin;
