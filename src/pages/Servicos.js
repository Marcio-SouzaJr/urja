import React from "react";
import image16 from "../assets/2 Original.png";
import image17 from "../assets/16.jpg";
import image18 from "../assets/17.jpg";

const Servicos = () => {
  return (
    <>
      <div className="p-5 page-bg">
        <h1 className="text-center pb-1">
          Serviços de transporte para sua organização
        </h1>
        <p className="col-md-10 col-12 m-auto fs-5 text-center">
          Somos especializados no atendimento de organizações públicas que
          oferecem a seus cidadãos a alternativa de um transporte especial de
          qualidade.
        </p>
        {/* new section */}
        <div className="d-flex flex-column flex-md-row justify-content-md-evenly align-items-md-center pt-5">
          {/* Card */}
          <div class="card col-6 col-md-3 border-0 card-bg align-self-center align-self-md-stretch mb-3">
            <a
              href="#"
              style={{ textDecoration: "none" }}
            >
              <img src={image16} class="card-img-top" />
              <div class="card-body ">
                <h5 class="card-title text-light text-center">
                  Transporte Especial
                </h5>
                <p class="card-text text-light text-center ">
                  Atendemos às pessoas que precisam de serviço de terapia e
                  reabilitação.
                </p>
              </div>
            </a>
          </div>

          {/* Text */}
          <div className="d-flex flex-column mt-5 col-md-6">
            <p className="fs-5">
              Uma alternativa de transporte essencial que transforma a vida das
              famílias de pessoas com dificuldade severa de locomoção.
            </p>

            <button
              type="button"
              id="hamburguer-menu"
              className="btn fw-bold fs-6 col-6 col-md-2 mx-auto my-3"
            >
              Saiba mais
            </button>
          </div>
        </div>
        <hr />
        {/* new section */}
        <div className="d-flex flex-column-reverse flex-md-row justify-content-md-evenly align-items-md-center pt-5">
          {/* Text */}
          <div className="d-flex flex-column mt-5 col-md-6">
            <p className="fs-5">
              Uma solução para quem dispõe de uma frota de pelo menos <span className="fw-bold text-danger">XX</span> vans e
              precisa focar no atendimento sem desmerecer a gestão e tecnologia
              operacionais necessários ao cumprimento dos seus SLAs e para a
              longevidade da frota.
            </p>

            <button
              type="button"
              id="hamburguer-menu"
              className="btn fw-bold fs-6 col-6 col-md-2 mx-auto my-3"
            >
              Saiba mais
            </button>
          </div>
          {/* Card */}
          <div class="card col-6 col-md-3 border-0 card-bg align-self-center align-self-md-stretch mb-3">
            <a
              href="#"
              style={{ textDecoration: "none" }}
            >
              <img src={image17} class="card-img-top" />
              <div class="card-body ">
                <h5 class="card-title text-light text-center">
                  Gestão de Frotas
                </h5>
                <p class="card-text text-light text-center ">
                  Atendemos às pessoas que precisam de serviço de hemodiálise.
                </p>
              </div>
            </a>
          </div>
        </div>
        <hr />
        {/* new section */}
        <div className="d-flex flex-column flex-md-row justify-content-md-evenly align-items-md-center pt-5">
          {/* Card */}
          <div class="card col-6 col-md-3 border-0 card-bg align-self-center align-self-md-stretch mb-3">
            <a
              href="#"
              style={{ textDecoration: "none" }}
            >
              <img src={image18} class="card-img-top" />
              <div class="card-body ">
                <h5 class="card-title text-light text-center">
                  Disponibilização de Vans
                </h5>
                <p class="card-text text-light text-center ">
                  Atendemos às pessoas que precisam assistir aulas diariamente.
                </p>
              </div>
            </a>
          </div>

          {/* Text */}
          <div className="d-flex flex-column mt-5 col-md-6">
            <p className="fs-5">
              Uma solução para quem precisa de uso temporário de veículos para
              execução de projetos específicos.
            </p>

            <button
              type="button"
              id="hamburguer-menu"
              className="btn fw-bold fs-6 col-6 col-md-2 mx-auto my-3"
            >
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicos;
