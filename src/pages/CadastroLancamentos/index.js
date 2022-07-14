import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function AddLancamento() {
  return (
    <>
      {/* <Header /> */}
      <div className="container">
        <h1>Adicionar Lancamentos</h1>
        <form className="row g-3">
          <div className="col-md-6">
            <div className="col-md">
              <label htmlFor="inputEmail4" className="form-label">
                Descrição
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-4 ">
              <label htmlFor="inputState" className="form-label">
                Mês
              </label>
              <select selected id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="inputEmail4" className="form-label">
                Ano
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputEmail4" className="form-label">
                Valor
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                Tipo
              </label>
              <select id="inputState" className="form-select">
                <option selected></option>
                <option>DESPESA</option>
                <option>RECEITA</option>
              </select>
            </div>
            <hr></hr>
            <button type="button" className="btn btn-primary">
              Cadastrar Lançamento
            </button>
            <Link to={"/home"}>
              <button type="button" className="btn btn-danger">
                Voltar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
