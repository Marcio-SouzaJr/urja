import React from "react";

function Contact() {
  return (
    <>
      <div
        className="bg-secondary text-light d-flex py-5 px-1 p-md-5"
        id="contato"
      >
        <div className="col-6">
          <h2>Contato</h2>
          <p>
            Caso deseje receber um contato de nossa equipe, simplesmente informe
            seu e-mail e selecione enviar.
          </p>
        </div>
        <div className="col-6 d-flex flex-column justify-content-start">
          <div class="mb-3">
            <label for="email" class="form-label">
              Digite seu e-mail:
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="email@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="text" class="form-label">
              Digite a sua mensagel
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button
            type="button"
            id="hamburguer-menu"
            className="btn fw-bold fs-6 col-4  "

          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
