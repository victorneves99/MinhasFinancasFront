import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Lancamentos from "./pages/Lancamentos";
import Usuario from "./pages/Usuarios";
import PrivateRoute from "../src/PrivateRoute";
import CadastroLancamentos from "./pages/CadastroLancamentos";
import Header from "./components/Header";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/home" element={<Home />} />
            <Route path="/lancamentos" element={<Lancamentos />} />
            <Route path="/add-lancamento" element={<CadastroLancamentos />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Usuario />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}
