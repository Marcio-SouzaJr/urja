import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Footer = () => {
  return (
    <>
      <div class=" px-2 ">
        <footer class="py-5 ">
          <div class="d-flex justify-content-between row">
            {/* LOGO */}
            <div class="col-md-3 mb-3 ">
              <a
                href="#navbar"
                class="d-flex align-items-center text-decoration-none justify-content-center"
              >
                <img src={logo} alt="logo" className="img-fluid" />
              </a>
            </div>
            {/* Section 1*/}
            <div class="col-6 col-md-1 mb-3 text-start">
              <h5>Links</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted text-start">
                    Início
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted text-start">
                    Quem Somos
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted text-start">
                    Tecnologia
                  </a>
                </li>
              </ul>
            </div>
            {/* Section 2 */}
            <div class="col-6 col-md-1 mb-3 text-start">
              <h5>Suporte</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted text-start">
                    Perguntas Frequentes
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted text-start">
                    Currículos
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted text-start">
                    Estatísticas
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted text-start">
                    Startups
                  </a>
                </li>
              </ul>
            </div>
            {/* Section 3 */}
            <div class="col-6 col-md-2 mb-3 text-start">
              <h5>Contato</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="tel:81-3224-7070" class="nav-link p-0 text-muted text-start">
                    +55 81 3224-7070
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="mailto:contato@urjasocial.com.br" class="nav-link p-0 text-muted text-start">
                    contato@urjasocial.com.br
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="https://maps.app.goo.gl/agGiKhAEzoz4A5qN6" class="nav-link p-0 text-muted text-start">
                    R. prof. Agamenon Magalhães, 50. CEP 53230-010. Olinda.
                    Pernambuco, Brasil.
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Bottom */}
          <div class="d-flex flex-column-reverse flex-sm-row align-items-center justify-content-between pt-4 border-top">
            <p>
              &copy; Copyright / Developed by <span className="marcio">Márcio Souza</span> - All rights
              reserved.
            </p>
            <div className="d-flex justify-content-between align-items-center col-sm-3">
              <Link class="text-decoration-none ms-3" to={"/politica-de-privacidade"}>
                <p className="titulo">Termos de Uso</p>
              </Link>
              <Link to={"/politica-de-privacidade"} class="text-decoration-none ms-3" href="#">
                <p className="titulo">Política de Privacidade</p>
              </Link>
              <a class=" ms-3" href="https://www.linkedin.com/company/sophia---solutions-on-planning-information-and-automation/">
                <i class="bi bi-linkedin social-media"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
