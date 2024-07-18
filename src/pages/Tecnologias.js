import React from "react";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.png";

const Tecnologias = () => {
  return (
    <>
      <div className="p-5 page-bg">
        <h1 className="text-center pb-5">Tecnologias</h1>
        <h3 className="text-center pb-5">
          A URJA SOCIAL COMBINA EXPERTISE EM GESTÃO, TECNOLOGIA E OPERAÇÕES.
        </h3>
        <p className="col-md-10 col-12 m-auto fs-5">
          Para dar resposta a problemas massivos e complexos se faz necessário
          um conjunto de habilidades que, uma vez combinadas, são capazes de
          atender às pessoas impactadas em tempo adequado.
        </p>
        <div className="d-flex justify-content-center">
          <img className="p-md-5 py-5 col-md-10 col-12" src={img12} />
        </div>
        {/* new Sextion */}
        <div className="d-md-flex container-fluid justify-content-center align-items-center">
          <div className="col-md-8 container-fluid">
            <p className="titulo fs-3 fw-bold">
              Lidamos com problemas que se apresentam distribuídos nas cidades
              e/ou metrópoles, que demandam navegação rápida e eficiente entre
              os pontos, notadamente, nos serviços de transporte especial, que
              dependem dessa navegação em sua essência. Executamos essa
              navegação tanto por meio de nossa central de monitoramento quanto
              através de softwares especializados.
            </p>
          </div>
          <div className="col-md-4">
            <img className="py-5 col-md-12 col-12" src={img13} />
          </div>
        </div>
        {/* new Section */}
        <p className="col-md-10 col-12 m-auto fs-5 py-3">
          O atendimento de centenas / milhares de famílias diariamente nos
          obriga a resolver os problemas que surgem dentro de um ciclo de um dia
          de operação, o que exige processos, capacitação, softwares e uma
          engrenagem conectada entre os membros das equipes.
        </p>
        <p className="col-md-10 col-12 m-auto fs-5 py-3">
          Nossa frota precisa estar disponível todos os dias, não podemos deixar
          de realizar um atendimento ou efetuar apenas metade (ida ou volta, por
          exemplo). Um veículo pode atender várias famílias em um dia. Temos que
          monitorar todos os sinais apresentados por um veículo, possuir
          capacidade reserva e sermos capazes de realizar uma rápida manutenção.
        </p>
        <p className="col-md-10 col-12 m-auto fs-5 py-3">
          Todas essas necessidades exigem uma expertise acumulada de gestão,
          tecnologia e execução operacional. Sem essas experiências combinadas
          não é possível lidar com problemas sociais e urgentes.
        </p>
      </div>
    </>
  );
};

export default Tecnologias;
