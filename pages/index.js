import React from "react";
import Layout from "@components/layout";
import Header from "@components/header/header";
import Banner from "@components/banner";
import Video from "@components/video";
import AppFeature from "@components/app-feature";
import PriceHome from "@components/price/price-home";
import ServicesHome from "@components/services/services-home";
import FAQ from "@components/faq";
import Footer from "@components/footer";
import MobileNav from "@components/mobile-nav";

const HomeOne = () => {
  return (
    <Layout pageTitle="ABANTU Felices de Ayudar">
      <Header />
      <Banner />
      <AppFeature />
      <PriceHome />
      <Video />
      <ServicesHome />
      <FAQ />
      <Footer />
      <MobileNav />
    </Layout>
  );
};

export default HomeOne;
