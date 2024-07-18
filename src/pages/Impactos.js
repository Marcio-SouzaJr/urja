import React from "react";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";

const Impactos = () => {
  return (
    <>
      <div className="p-5 page-bg">
        <h1 className="text-center pb-5">Impactos</h1>
        <h3 className="text-center pb-5">
          MAIS DE 30.000 PESSOAS COM DEFICIÊNCIA ATENDIDAS EM NOSSA JORNADA
        </h3>
        <p className="col-md-10 col-12 m-auto fs-5">
          Algumas pessoas possuem extrema dificuldade de locomoção e demandam
          tratamento constante de reabilitação. Nosso objetivo é melhorar um
          pouco a exigência diária sobre elas próprias e suas famílias.
        </p>
        <div className="d-flex justify-content-center">
          <img className="p-md-5 py-5 col-md-10 col-12" src={img14} />
        </div>
        {/* new Sextion */}
        <div className="d-md-flex container-fluid justify-content-center align-items-center">
          <div className="col-md-4">
            <img className="py-5 col-md-12 col-12" src={img15} />
          </div>
          <div className="col-md-8 container-fluid ms-2">
            <p className="titulo fs-3 fw-bold">
              Lidamos com problemas que se apresentam distribuídos nas cidades
              e/ou metrópoles, que demandam navegação rápida e eficiente entre
              os pontos, notadamente, nos serviços de transporte especial, que
              dependem dessa navegação em sua essência. Executamos essa
              navegação tanto por meio de nossa central de monitoramento quanto
              através de softwares especializados.
            </p>
          </div>
        </div>
        {/* new Section */}
        <p className="col-md-10 col-12 m-auto fs-5 py-3">
          Atualmente possuímos frota de veículos adaptados a partir dos melhores
          materiais disponíveis no mercado nacional e confeccionadas pelos mais
          experientes. Entendemos que a segurança é característica básica de
          nosso serviço e buscamos oferecer o que há de mais adequado ao
          usuário. Nossos veículos são novos e de fabricantes reconhecidos,
          possuem plataforma de embarque assistido, rápida e que não registra
          acidentes até o momento. Possuem espaço para 3 ou 4 usuários em suas
          cadeiras de roda, bem como seus respectivos acompanhantes.
        </p>
        <p className="col-md-10 col-12 m-auto fs-5 py-3">
          Na maioria dos casos há prioridade em serviços de reabilitação e na
          participação dos usuários de forma plena nesses serviços.
        </p>
        <p className="col-md-10 col-12 m-auto fs-5 py-3">
          Atualmente registramos mais de{" "}
          <span className="fw-bolder text-danger">XX.XXX</span> atendimentos e{" "}
          <span className="fw-bolder text-danger">XX.XXX</span> kms rodados.
        </p>
      </div>
    </>
  );
};

export default Impactos;
