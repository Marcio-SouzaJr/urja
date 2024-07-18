import React from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide ">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} class="d-block w-100" alt="..." id="imagem" />
            <div id="image-filter"></div>
            <div class="carousel-caption d-block">
              <h3>Transporte Especializado</h3>
              <p className="">
                A Urja Social executa serviços de transporte especial que
                reduzem as dificuldades enfrentadas por famílias brasileiras com
                integrante que possui dificuldade de locomoção.
              </p>
              {/* <button
                type="button"
                className="btn fw-bold fs-6 col-md-2 btn-primary btn-sm "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Saiba mais
              </button> */}
            </div>
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100" alt="..." />
            <div id="image-filter"></div>
            <div class="carousel-caption d-block">
              <h3>Dados do IBGE</h3>
              <p>
                Segundo o IBGE, no Brasil há mais de 12 milhões de pessoas com
                algum tipo de deficiência...
              </p>
              {/* <button
                type="button"
                className="btn fw-bold fs-6 col-md-2 btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Saiba mais
              </button> */}
            </div>
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-100" alt="..." />
            <div id="image-filter"></div>
            <div class="carousel-caption d-block">
              <h3>Serviço Especializado</h3>
              <p>
                Nossas equipes são treinadas e capacitadas para oferecer um
                atendimento diferenciado, confortável e seguro.
              </p>
              {/* <button
                type="button"
                className="btn fw-bold fs-6 col-md-2 btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Saiba mais
              </button> */}
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
