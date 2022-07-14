import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api";
import { toast } from "react-toastify";
import Header from "../../components/Header";
export default function CadastroUsuarios() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repeticao, setRepeticao] = useState("");

  function salvar() {
    api
      .post("/api/usuario", {
        nome: nome,
        email: email,
        senha: senha,
        repeticao: repeticao,
      })
      .then((res) => {
        toast.success("Usuario cadastrado com sucesso.");
        navigate("/login");
      })
      .catch((err) => {
        toast.warn(err.response.data);
      });
  }

  return (
    <>
      {/* <Header /> */}
      <div className="container">
        <h1>CadastroUsuarios</h1>
        <form className="row g-3">
          <div className="col-md-6 p-2">
            <div className="col-md mb-2">
              <label htmlFor="inputEmail4" className="form-label">
                Nome :
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="col-md mb-2">
              <label htmlFor="inputEmail4" className="form-label">
                Email :
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-2">
              <label htmlFor="inputEmail4" className="form-label">
                Senha :
              </label>
              <input
                type="password"
                className="form-control"
                id="senha"
                name="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="inputEmail4" className="form-label">
                Repita a Senha :
              </label>
              <input
                type="password"
                className="form-control"
                id="repeticao"
                name="repeticao"
                value={repeticao}
                onChange={(e) => setRepeticao(e.target.value)}
              />
            </div>
            <hr></hr>
          </div>
        </form>

        <button onClick={() => salvar()} className="btn btn-primary">
          Cadastrar Usuario
        </button>
        <Link to={"/home"}>
          <button className="btn btn-danger">Voltar</button>
        </Link>
      </div>
    </>
  );
}
