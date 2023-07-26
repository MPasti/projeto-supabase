import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Login/App.css";
import { supabase } from "../../supabase/Client";

function AppSuccess() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          setUser(value.data.user);
          console.log(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function signOut() {
    // eslint-disable-next-line no-unused-vars
    const { error } = await supabase.auth.signOut;

    if (!error) {
      navigate("/login");
    }
  }

  return (
    <div className="Success">
      <header className="Success-header">
        {user ? (
          <>
            <h1>Logado com sucesso</h1>
            <button onClick={signOut}> Sair </button>
          </>
        ) : (
          <>
            <h1> Usuário não logado</h1>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Voltar para login
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default AppSuccess;
