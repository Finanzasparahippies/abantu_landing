import React from "react";
import Split from "../Split";
import Link from "next/link";

const Services1 = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="sec-head custom-font text-center">
          {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
            Best Features
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Services.
            </h3>
          </Split> */}
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 bg-img wow fadeInLeft"
            data-wow-delay=".3s"
            style={{ backgroundImage: "url(/img/logos/banner_services.jpg)", objectFit:"contain", backgroundPosition:"center", height:"300px"}}
          >
            {/* <h4 className="custom-font">
              Best Of <br /> Our Features
            </h4>
            <Link href="/about/about-dark">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>See All Services</span>
              </a>
            </Link> */}
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".5s"
          >
            {/* <span className="icon pe-7s-paint-bucket"></span> */}
            <img src="/img/logos/network.png" alt="icon" style={ { width:"100px"}}/>
            <h6>Colaboración Comunitaria</h6>
            <p>
            En ABANTU creemos que a través de la colaboración en comunidad nos podemos ayudar de manera genuina.            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".7s"
          >
            {/* <span className="icon pe-7s-phone"></span> */}
            <img src="/img/logos/hand.png" alt="icon" style={ { width:"100px"}}/>
            <h6>
              Ingresos Extras
            </h6>
            <p>La plataforma de ABANTU crea un ingreso extra para cada uno de sus usuarios.</p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".9s"
          >
            {/* <span className="icon pe-7s-display1"></span> */}
            <img src="/img/logos/financial-profit.png" alt="icon" style={ { width:"100px"}}/>
            <h6>
            Flujo de Efectivo
            </h6>
            <p>La comunidad ABANTU cuenta con un sistema que tiene el objetivo de crear un flujo de efectivo en la comunidad.</p>
          </div>
        </div>
      </div>
      <div className="half-bg bottom"></div>
    </section>
  );
};

export default Services1;
