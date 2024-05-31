import React from "react";
import Layout from "@components/layout";
import HeaderInner from "@components/header/header-inner";
import MobileNavInner from "@components/mobile-nav-inner";
import PageHeader from "@components/page-header";
import BlogPost2 from "@components/blog/blog-post2";
import Footer from "@components/footer";
const Blog = () => {
  return (
    <Layout pageTitle="ABANTU Felices de Ayudar">
      <HeaderInner />
      <PageHeader title="Aviso de Privacidad" crumbTitle="Aviso de Privacidad" />
      <BlogPost2 />
      <Footer />
      <MobileNavInner />
    </Layout>
  );
};

export default Blog;