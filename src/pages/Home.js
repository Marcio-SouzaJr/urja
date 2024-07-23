import React, { useCallback } from "react";
import Carousel from "../components/Carousel";
import image4 from "../assets/4 -TRANSPORTE ESPECIAL.png";
import image5 from "../assets/5 - GESTÃO DE FROTAS.png";
import image6 from "../assets/6 -DISPONIBILIZAÇÃO DE VANS.png";
import image7 from "../assets/7.png";
import image8 from "../assets/8-Photoroom.png";
import image9 from "../assets/9-Photoroom.png";
import image10 from "../assets/10-Photoroom.png";
import image11 from "../assets/11-Photoroom.png";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const handleImpactos = useCallback(() => navigate('/impactos'));
  return (
    
    <>
      <Carousel />
      <hr />
      {/* Section */}
      <div className="d-flex flex-column text-center">
        <h3 className="my-3">SERVIÇOS DE TRANSPORTE</h3>
        <p className="fs-5 px-1 mb-4">
          Somos especializados no atendimento de{" "}
          <span className="fw-bold">pessoas com mobilidade reduzida </span>
          através de um conjunto de serviços de transporte especial{" "}
          <span className="fw-bold">do tipo porta a porta.</span>
        </p>
        <div className="d-flex flex-column flex-md-row justify-content-md-evenly mb-5">
          {/* Card01 */}
          <div class="card col-6 col-md-3 border-0 card-bg align-self-center align-self-md-stretch mb-3">
            <Link to="/servicos" style={{ textDecoration: "none" }}>
              <img src={image4} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-light">TRANSPORTE ESPECIAL</h5>
                <p class="card-text text-light">
                  serviço completo, porta a porta, com frota adaptada, gestão
                  tecnologia e equipe especializada
                </p>
              </div>
            </Link>
          </div>
          {/* Card02 */}
          <div class="card col-6 col-md-3 border-0 card-bg align-self-center align-self-md-stretch mb-3">
            <Link to="/servicos" style={{ textDecoration: "none" }}>
              <img src={image5} class="card-img-top" />
              <div class="card-body ">
                <h5 class="card-title text-light">GESTÃO DE FROTAS</h5>
                <p class="card-text text-light ">
                  gerenciamento e tecnologia para otimização do uso de frotas
                  adaptadas
                </p>
              </div>
            </Link>
          </div>
          {/* Card03 */}
          <div class="card col-6 col-md-3 border-0 card-bg align-self-center align-self-md-stretch mb-3">
            <Link to="/servicos" style={{ textDecoration: "none" }}>
              <img src={image6} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-light">DISPONIBILIZAÇÃO DE VANS</h5>
                <p class="card-text text-light">
                  fornecimento de veículos adaptados, manutenção e guarda
                </p>
              </div>
            </Link>
          </div>
        </div>
        <hr />
        {/* new section */}
        <h3 className="my-3">IMPACTO SOCIAL</h3>
        <p className="fs-5 px-1 mb-4">
          Procuramos resolver problemas massivos enfrentados pela sociedade.
          Nossos resultados só são possíveis graças ao uso integrado de
          inteligência computacional, otimização de processos e gestão
          operacional.
        </p>
        <div className="d-flex flex-column flex-md-row">
          <div className="col-md-5">
            <img src={image7} class="w-75 rounded" />
          </div>
          <div className="d-flex flex-column mt-5">
            <h4 className="titulo fw-bold mb-5">
              Percorremos mais de 2.700.000 de kilometros em 2023
            </h4>
            <p>
              Algumas pessoas possuem extrema dificuldade de locomoção e
              demandam tratamento constante de rehabilitação. Nosso objetivo é
              melhorar a rotina diária dessas pessoas e de suas famílias.
            </p>
            <p className="mb-2">
              Estamos há 10 anos realizando projetos que atendem milhares de
              pessoas. Entendemos que quanto mais pessoas conseguimos atender
              diariamente, um pouco menos difícil será a vida nos segmentos
              sociais mais vulneráveis.
            </p>
            <button
              type="button"
              id="hamburguer-menu"
              className="btn fw-bold fs-6 col-6 col-md-2 mx-auto my-3"
              onClick={handleImpactos}
              
            >
              Saiba mais
            </button>
          </div>
        </div>
        <hr />
        {/* new section */}
        <h3 className="my-3">RESULTADOS ALCANÇADOS</h3>
        <p className="fs-5 px-1 mb-4">
          Estamos disponíveis todos os turnos da semana, em todos os horários…
          números de 2023. (2.700.000+ kilometros)
        </p>
        <div className="d-flex flex-column flex-md-row justify-content-around">
          <div className="col-7 col-md-2 py-2 px-1 mx-auto my-4 d-flex justify-content-around align-items-center  fw-bold fs-5 titulo tag">
            <i class="bi bi-check-circle-fill icon fs-1"></i>
            300.000+ Viagens
          </div>
          <div className="col-7 col-md-2 py-2 px-1 mx-auto my-4 d-flex justify-content-around align-items-center  fw-bold fs-5 titulo tag">
            <i class="bi bi-truck icon fs-1"></i>
            2.500.000+ Km
          </div>
          <div className="col-7 col-md-2 py-2 px-1 mx-auto my-4 d-flex justify-content-around align-items-center  fw-bold fs-5 titulo tag">
            <i class="bi bi-people-fill icon fs-1"></i>
            95%+ Usuários Satisfeitos
          </div>
          <div className="col-7 col-md-2 py-2 px-1 mx-auto my-4 d-flex justify-content-around align-items-center  fw-bold fs-5 titulo tag">
            <i class="bi bi-geo-alt-fill icon fs-1"></i>
            31+ Cidades Atendidas
          </div>
        </div>
        {/* new section */}
        <hr />
        <h3 className="my-3">TECNOLOGIA ASSISTIVA</h3>
        <p className="fs-5 px-1 mb-4">
          Desenvolvemos novos produtos e serviços que combinam nossa expertise
          nas áreas de tecnologia, gestão e logística para resolver problemas
          que atingem a sociedade.
        </p>
        <div className="d-flex flex-column flex-md-row justify-content-evenly mb-5">
          <img src={image8} class="col-md-2" />
          <img src={image9} class="col-md-2 " />
          <img src={image10} class="col-md-2" />
          <img src={image11} class="col-md-2" />
        </div>
      </div>
    </>
  );
};

export default Home;
