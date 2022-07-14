import React, { useState, useContext } from "react";
import "./login.css";
import api from "../../api";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function entrar() {
    api
      .post("/api/usuario/autenticar", {
        email: email,
        senha: senha,
      })
      .then((res) => {
        localStorage.setItem("_usuarioLogado", JSON.stringify(res.data));
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response);
        toast.warn(err.response.data);
      });
  }

  return (
    <div className="container ">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <div className="card">
            <h3 className="card-header">LOGIN</h3>
            <div className="card-body">
              <form className="row  g-3">
                <div className="col-md">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="user"
                      placeholder="name@example.com"
                      name="user"
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
                </div>
              </form>
              <button
                type="button"
                onClick={() => entrar()}
                className="btn btn-success me-3"
              >
                Entrar
              </button>
              <Link to={"/cadastro"}>
                <button type="button" className="btn btn-danger">
                  Cadastrar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
