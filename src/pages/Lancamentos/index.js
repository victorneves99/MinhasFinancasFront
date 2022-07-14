import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SelectMenu from "../../components/Select";
import api from "../../api";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Lancamentos() {
  const [ano, setAno] = useState(0);
  const [mes, setMes] = useState(0);
  const [tipo, setTipo] = useState("");
  const [lancamentos, setLancamentos] = useState([]);

  const meses = [
    {
      label: "Selecione...",
      value: "",
    },
    {
      label: "Janeiro",
      value: 1,
    },
    {
      label: "Fevereiro",
      value: 2,
    },
    {
      label: "Março",
      value: 3,
    },
    {
      label: "Abril",
      value: 4,
    },
    {
      label: "Maio",
      value: 5,
    },
    {
      label: "Junho",
      value: 6,
    },
    {
      label: "Julho",
      value: 7,
    },
    {
      label: "Agosto",
      value: 8,
    },
    {
      label: "Setembro",
      value: 9,
    },
    {
      label: "Outubro",
      value: 10,
    },
    {
      label: "Novembro",
      value: 11,
    },
    {
      label: "Dezembro",
      value: 12,
    },
  ];

  const buscar = () => {
    const usuario = localStorage.getItem("_usuarioLogado");

    let params = `?ano=${lancamentos.ano}`;

    if (lancamentos.mes) {
      params = `${params}&mes=${lancamentos.mes}`;
    }
    if (lancamentos.tipo) {
      params = `${params}&tipo=${lancamentos.tipo}`;
    }
    if (lancamentos.status) {
      params = `${params}&status=${lancamentos.status}`;
    }

    params = `${params}&usuario=${usuario.id}`;

    api
      .get(`/api/lancamentos${params}`)
      .then((res) => {
        setLancamentos(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.warn(err.response.data);
      });
  };

  const tipos = [
    { label: "Selecione . . .", value: "" },
    { label: "Despesa", value: "DESPESA" },
    { label: "Receita", value: "RECEITA" },
  ];

  return (
    <div className="container">
      <h1>Busca Lançamentos</h1>
      <form className="row  g-3">
        <div className="col-md-6">
          <div className="col-md">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="ano"
                placeholder="name@example.com"
                name="ano"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
              />
              <label htmlFor="floatingInput">Ano</label>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="inputState" className="form-label">
                Mês
              </label>
              <SelectMenu
                value={mes}
                onChange={(e) => setMes(e.target.value)}
                className="form-select"
                lista={meses}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="inputState" className="form-label">
                Tipo do Lancamento
              </label>
              <SelectMenu
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="form-select"
                lista={tipos}
              />
            </div>
          </div>
          <hr className="mt-5"></hr>
        </div>
      </form>

      {/* <table className="table table-dark table-hover">...</table> */}

      <button type="button" onClick={buscar} className="btn btn-primary">
        Salvar
      </button>
      <Link to={"/home"}>
        <button type="button" className="btn btn-danger">
          Cancelar
        </button>
      </Link>

      <hr />

      <div className="row">
        <div className="col-md-12">
          <table className="table table-dark table-hover">
            <thead>
              <tr key={lancamentos.id}>
                <th>Descricao</th>
                <th>Valor</th>
                <th>Tipo</th>
                <th>Mês</th>
                <th>Situação</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {lancamentos.map((item) => {
                return (
                  <>
                    <tr key={item.id}>
                      <td>{item.descricao}</td>
                      <td>{item.valor}</td>
                      <td>{item.tipo}</td>
                      <td>{item.mes}</td>
                      <td>{item.status}</td>
                      <td></td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="col-md-4 mb-3">
                <label htmlFor="inputState" className="form-label">
                  Mês
                </label>
                <select id="inputState" className="form-select">
                  <option selected></option>
                  <option>...</option>
                  <option>...</option>
                </select>
              </div> */
}
