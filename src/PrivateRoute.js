import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header";

const PrivateRoute = () => {
  const usuario = localStorage.getItem("_usuarioLogado");

  if (usuario) {
    return (
      <div>
        <Header /> <Outlet />
      </div>
    );
  } else {
    return <Navigate to={"/login"} />;
  }

  // return usuario ? <Outlet/> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
