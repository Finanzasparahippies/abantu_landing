/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="img rounded float-start w-80">
              <img
                className="thumparallax-down"
                src="/img/logo-master-oro.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  Nuestro Compromiso.
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Queremos que nuestros jugadores desempeñen un papel activo en la liga y en sus hogares, por lo que siempre estamos buscando formas de mejorar la experiencia de juego.
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Nuestra Mision
                  </h6>
                  <p>
                  Lograr que los jugadores de fútbol mayores de 50 años, sigan practicando este deporte de una manera bien organizada, brindandoles las mejores instalaciones para ello.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Nuestras Metas
                  </h6>
                  <p>
                  Por medio de la practica del fútbol, fomentar la constumbre de realizar ejercicio en beneficio de la salud y calidad de vida en los veteranos.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Porque jugar en la liga Master Oro?
                  </h6>
                  <p>
                  Por ser una liga bien organizada, buen nivel de juego en sus categorías, por la transparencia de finanzas.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
