import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://fdtnfwnyiknfkxwvcfbq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkdG5md255aWtuZmt4d3ZjZmJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNDY1NDIsImV4cCI6MjAwNDkyMjU0Mn0.9UmG6GIaDyHQ7qfizkTnR_py_2__vokyiXiBwiqCttA"
);

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [refresh, setRefresh] = useState(false);
  //state para ao dar o insert, mudar o estado e usar o useEffect toda vez que der refresh e mudar o nome

  //função de get
  async function getUsuarios() {
    const { data } = await supabase.from("cadastro_usuarios").select();
    setUsuarios(data);
  }
  //função de insert
  async function updateUsuarios() {
    const { error } = await supabase
      .from("cadastro_usuarios")
      .update({ nome: "Matheus" })
      .eq("id", 1);
    if (error) {
      console.log(error.message);
    }
    setRefresh(true);
  }

  async function insertUsuarios() {
    const { error } = await supabase.from("cadastro_usuarios").insert({
      nome: "Robertinho",
      email: "roberto@gmail.com",
      cpf: 11122233340,
      endereco: "Rua Whatsapp",
      bairro: "Vila da folha",
      cidade: "São Paulo",
      estado: "SP",
      cep: "14403640",
    });
    if (error) {
      console.log(error.message);
    }
    setRefresh(true);
  }

  async function deleteUsuarios() {
    const { error } = await supabase
      .from("cadastro_usuarios")
      .delete()
      .eq("id", 2);
    if (error) {
      console.log(error.message);
    }
    setRefresh(true);
  }

  useEffect(() => {
    getUsuarios();
    setRefresh(false);
  }, [refresh]);

  console.log(usuarios);
  return (
    <>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.nome}</li>
        ))}
      </ul>
      <button onClick={updateUsuarios}>update</button>
      <button onClick={insertUsuarios}>insert</button>
      <button onClick={deleteUsuarios}>delete</button>
    </>
  );
}

export default App;
