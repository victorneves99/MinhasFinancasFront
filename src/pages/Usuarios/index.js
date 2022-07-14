import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api";
import Header from "../../components/Header";

export default function Usuarios() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repeticao, setRepeticao] = useState("");
  const navigate = useNavigate();
  const usuarioLogado = localStorage.getItem("_usuarioLogado");

  const validar = () => {
    const msgs = [];
    if (!nome) {
      msgs.push("O campo Nome é obrigatorio.");
    }
    if (!email) {
      msgs.push("O campo Email é obrigatorio.");
    } else if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
      msgs.push("Informe um Email valido.");
    }
    if (!senha || !repeticao) {
      msgs.push("Digite a senha 2x");
    } else if (senha !== repeticao) {
      msgs.push("As senhas não são iguais");
    }

    return msgs;
  };

  const cadastrar = () => {
    const msgs = validar();

    if (msgs && msgs.length > 0) {
      msgs.forEach((mensagem, index) => {
        toast.warn(mensagem);
      });
      return false;
    }

    const usuario = {
      nome: nome,
      email: email,
      senha: senha,
      repeticao: repeticao,
    };

    api
      .post("/api/usuario", usuario)
      .then((res) => {
        toast.success("Usuario cadastrado com sucesso!");
        toast.info("Faça o login para acessar o Sistema.");
        if (usuarioLogado) {
          navigate("/home");
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        toast.warn(err.response.data);
      });
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1>Cadastro Usuario</h1>
        <form className="row  g-3">
          <div className="col-md-6">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  placeholder="name@example.com"
                  name="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <label htmlFor="floatingInput">Nome</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="1234"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="1234"
                  name="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
                <label htmlFor="floatingInput">Senha</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="repeticao"
                  placeholder="1234"
                  name="password"
                  value={repeticao}
                  onChange={(e) => setRepeticao(e.target.value)}
                />
                <label htmlFor="floatingInput">Repita a Senha</label>
              </div>
            </div>
            <hr className="mt-5"></hr>
          </div>
        </form>

        <button
          type="button"
          onClick={() => cadastrar()}
          className="btn btn-primary"
        >
          Salvar
        </button>
        <Link to={"/home"}>
          <button type="button" className="btn btn-danger">
            Cancelar
          </button>
        </Link>
      </div>
    </>
  );
}
