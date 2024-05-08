/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import equipos from "../../data/sections/equipos";


const WorksThreeColumnWithFilter = ({ filterPosition }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000)
    }
  }, [pageLoaded]);
  return (

    <section className="portfolio section-padding pb-70">
      <div className="container">
              
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } smplx col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">
                Todos
              </span>
              <span data-filter=".A">Grupo A</span>
              <span data-filter=".B">Grupo B</span>
              <span data-filter=".C">Grupo C</span>
              <span data-filter=".D">Grupo D</span>
            </div>
          </div>

          <div className="gallery full-width">
          { 
          equipos ? equipos.map((equipo, id) => (
            <div key={id}>
          <div className={`col-lg-4 col-md-6 items ${equipo.grupo}`}>
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  
                    {equipo.foto === "" ? <img style={ { width: "auto", height: 150 } } src="/img/equipos/placeholder.png" alt="image" /> :
                    <img src={equipo.foto} alt="image" style={ { width: "auto", height: 150 } } />
                    }
              </div>
              <div className="cont">
                <h6>{equipo.equipo}</h6>
              </div>
            </div>
          </div>
          )): null }
          </div>
          </div>
        
        </div>
      </section>
        
        );
};

export default WorksThreeColumnWithFilter;