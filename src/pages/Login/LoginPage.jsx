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
          appearance={{ theme: ThemeSupa }}
          providers={["discord", "google"]}
        />
      </header>
    </div>
  );
}

export default AppLogin;
