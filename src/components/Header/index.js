import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const sair = () => {
    localStorage.removeItem("_usuarioLogado");
  };

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">
      <Link className="navbar-brand" to={"/home"}>
        Financas
      </Link>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to={"/home"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/cadastro"}>
            Usuarios
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/lancamentos"}>
            Lançamentos
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/login"} onClick={sair}>
            Sair
          </Link>
        </li>
      </ul>
    </header>
  );
}
