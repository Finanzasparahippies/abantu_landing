import React from "react";
import Layout from "@components/layout";
import HeaderInner from "@components/header/header-inner";
import MobileNavInner from "@components/mobile-nav-inner";
import PageHeader from "@components/page-header";
import BlogPost from "@components/blog/blog-post";
import Footer from "@components/footer";
const Blog = () => {
  return (
    <Layout pageTitle="ABANTU Felices de Ayudar">
      <HeaderInner />
      <PageHeader title="Términos y Condiciones" crumbTitle="Términos y Condiciones" />
      <BlogPost />
      <Footer />
      <MobileNavInner />
    </Layout>
  );
};

export default Blog;