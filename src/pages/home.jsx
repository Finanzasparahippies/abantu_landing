import React, { useEffect, useState, useRef } from "react";
import BlogsThreeColumn2 from "../components/Blogs-three-column2";
import Footer from "../components/Footer";
import IntroWithSlider1 from "../components/Intro-with-slider2";
import Navbar from "../components/Navbar";
import DarkTheme from "../layouts/Green";
import VideoInicio from "../components/VideoInicio";
import ShowcasesFullScreen from "../components/Showcases-full-screen";
import ShowcasesFullScreenCircleSlide from "../components/Showcases-full-screen-circle-slide";
import Works1Slider from "../components/Works1-slider";
import Services1 from "../components/Services1";
import AboutUs from "../components/About-us1";


const Homepage4 = () => {
  const fixedSlider = useRef(null);
  const MainContent = useRef(null);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.scrollY > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300){
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider1 sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        {/* <BlogsThreeColumn2 subBG/> */}
        <AboutUs/>
        <VideoInicio />
        <Works1Slider/>
        <Services1/>
        <Footer id = "footer-half"/>
      </div>
    </DarkTheme>
  );
};

export default Homepage4;
