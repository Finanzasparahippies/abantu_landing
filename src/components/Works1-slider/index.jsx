import React from "react";
import works1SliderData from "../../data/sections/works1Slider.json";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Works1Slider = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <section className="work-carousel section-padding pt-0 metro position-re" style={{ zIndex: 0 }}>
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-12 no-padding">
            <h1 style={ { textAlign:"center"}}>Conoce nuestras Redes de Contribución</h1>
            <div className="swiper-container">
              <Swiper
                className="swiper-wrapper"
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                onSwiper={(swiper) => {
                  setTimeout(() => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;

                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                speed={2000}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  767: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    centeredSlides: false,
                  },
                  991: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    centeredSlides: true,
                  },
                  1100: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                    centeredSlides: true,
                  },
                }}
              >
                {works1SliderData.map((slide) => (
                  <SwiperSlide key={slide.id} className="swiper-slide" style={ {  justifyContent:"center", alignItems:"center", paddingBottom:"150px"}}>
                    <div
                      className="content wow noraidus fadeInUp"
                      data-wow-delay=".3s"
                    >
                    
                      <div
                        className="item-img bg-img wow imago animate__fadeIn"
                        style={{
                          width: "350px",
                          height: "680px",
                          backgroundColor:"#05e09c",
                          // backgroundImage: `url(${slide.img})`,
                          // objectFit:"contain",
                          paddingBottom:"750px",
                          borderRadius:"50px",
                          position: "relative",
                          textAlign: "center", 
                        }}
                      >
                          <div className="cont" 
                        style={{ backgroundColor: "#FFFFFF", color:"#019D85", width:"300px", height:"180px", position:"absolute", top:"15%", left:"50%",transform: "translate(-50%, -50%)", textAlign:"center", borderWidth:"6px !important", border:"solid #019D85", borderRadius:"50px"}}
                      >
                        <h5 style={ { position:"absolute", top:"10%", fontSize:"32px", textAlign:"center" } } className="color-font"
                        >
                          <Link href="https://comunidad.abantu.mx/inicio/redes">{slide.title}</Link>
                        </h5>
                        {/* <svg style={ { position:"absolute", width:"50px", height:"50px", left:"20%", top:"65%"}} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-premium-rights" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75" />
                        <path d="M12 7v2" />
                        <path d="M12 15v2" />
                        </svg> */}
                        <h2 style={{ position:"absolute", top:"60%", left:"37%"}}>
                          <Link href="https://comunidad.abantu.mx/inicio/redes"
                          >
                            {slide.secTex}
                          </Link>
                        </h2>
                        <div>
                          <h3 style={ { 
                            position: "absolute",
                            marginTop: "-20px",
                            marginBottom: "20px", 
                            top: "130%",
                            left: "0%",
                            width: "300px",
                            backgroundColor: "#019D85",
                            color: "#FFFFFF",
                            textAlign: "center",
                            margin: "0",
                            fontSize: "20px",
                            fontWeight: "bold",
                            whiteSpace: "wrap",
                            padding: "30px",
                            borderRadius:"50px",
                            
                          }}>{slide.description} </h3>
                        </div>
                        <Link href={slide.button.link}>
                            <a className="btn-curve btn mt-1" style={ { position:"absolute", top:"360%", left:"15%", alignSelf:"center", textAlign:"center",  color:"#019D85", backgroundColor:"#FFFFFF"}}>
                              <span style={ { fontSize: "18px", fontWeight:"bolder"}}>{slide.button.text}</span>
                            </a>
                          </Link>
                          </div>
                        </div>
                      </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div
                ref={navigationNextRef}
                className="swiper-button-next swiper-nav-ctrl simp-next cursor-pointer"
              >
                <span className="simple-btn right">Siguiente</span>
              </div>
              <div
                ref={navigationPrevRef}
                className="swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer"
              >
                <span className="simple-btn" style={{ marginLeft: "auto"}}>Anterior</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works1Slider;
