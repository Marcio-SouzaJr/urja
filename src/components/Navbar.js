import React from "react";
import "../App.css";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="container-fluid " id="navbar">
      <header class="d-flex align-items-center justify-content-between py-3 border-bottom">
        <div className="col-4 ">
          <Link
            to="/"
            class="d-flex align-items-center col-md-6 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <img src={logo} alt="logo" className="img-fluid" />
          </Link>
        </div>
        {/* Regular Menu*/}
        <div>
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center align-items-center mb-md-0">
            <li>
              <Link to="/" className="menu-link px-2 navbar-link">
                Início
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="menu-link px-2  navbar-link">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/impactos" className="menu-link px-2  navbar-link">
                Impactos
              </Link>
            </li>
            <li>
              <Link to="/resultados" className="menu-link px-2  navbar-link">
                Resultados
              </Link>
            </li>
            <li>
              <Link to="/tecnologias" className="menu-link px-2  navbar-link">
                Tecnologias
              </Link>
            </li>
            {/* <li>
              <Link to="/portifolio" className="menu-link px-2  navbar-link">
                Portifolio
              </Link>
            </li> */}
            <li>
              <Link to="/depoimentos" className="menu-link px-2  navbar-link">
                Depoimentos
              </Link>
            </li>
            <li>
              <a href="#contato" className="menu-link px-2  navbar-link">
                Contato
              </a>
            </li>
          </ul>
        </div>
        {/* hamburguer menu*/}
        <div id="hamburguer-menu-wrapper">
          <button
            type="button"
            id="hamburguer-menu"
            className="btn fw-bold fs-6"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="bi bi-list me-1 "></i>
            Menu
          </button>
          {/* Modal Menu */}
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Menu
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <ul class="nav flex-column col-12 justify-content-center align-items-center fs-1">
                    <li className="my-1">
                      <Link to="/" className="menu-link px-2">
                        Início
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link to="/servicos" className="menu-link px-2">
                        Serviços
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link to="/impactos" className="menu-link px-2">
                        Impactos
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link to="/resultados" className="menu-link px-2">
                        Resultados
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link to="/tecnologias" className="menu-link px-2">
                        Tecnologias
                      </Link>
                    </li>
                    {/* <li className="my-1">
                      <Link to="/portifolio" className="menu-link px-2">
                        Portifolio
                      </Link>
                    </li> */}
                    <li className="my-1">
                      <Link to="/depoimentos" className="menu-link px-2">
                        Depoimentos
                      </Link>
                    </li>
                    <li className="my-1">
                      <a href="#contato" className="menu-link px-2">
                        Contato
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
