import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import api from "../../api";
import Header from "../../components/Header";
export default function Home() {
  const [saldo, setSaldo] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const usuarioLogado = localStorage.getItem("_usuarioLogado");
    const logado = JSON.parse(usuarioLogado);

    api
      .get(`/api/usuario/${logado.id}/saldo`)
      .then((res) => {
        setSaldo(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        navigate("/login");
      });
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div className="container d-flex justify-content-center">
        <div className="card text-white bg-dark w-75 ">
          <div className="card-body">
            <h1 className="card-title">Bem Vindo!</h1>
            <p className="card-text">Esse é seu sistema de finanças.</p>
            <p className="card-text">
              Seu saldo para o mês atual é de R$ {saldo}
            </p>
            <hr></hr>
            <Link to={"/cadastro"}>
              <button type="button" className="btn btn-primary">
                Cadastrar Usuario
              </button>
            </Link>
            <Link to={"/add-lancamento"}>
              <button type="button" className="btn btn-danger">
                Cadastrar Lançamento
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
