import React, { useEffect, useState } from "react";
import Link from "next/link";
import API from "../../common/API";

const BlogStanderd = () => {


  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    API.get('/blog/posts')
      .then((response) => {
        setNoticias(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    console.log(noticias),
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              {noticias.map((noticia) => {
                return (
              <div className="item mb-80">
                <div className="img">
                  <Link href={{ pathname: "/detalle-noticia", query: { id: noticia.id } }}>
                    <a>
                      <img src={noticia.main_image ? noticia.main_image : ""} alt="blog" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <div className="row">
                    <div className="col-10">
                      <a href="#0" className="date">
                        <span>{noticia.created_at.split("T")[0]}</span>
                      </a>
                      <h4 className="title">
                        <Link href={{ pathname: "/detalle-noticia", query: { id: noticia.id } }}>
                          <a>{noticia.title}</a>
                        </Link>
                      </h4>
                      <p>
                        {noticia.excerpt}
                      </p>
                      <Link href={{ pathname: "/detalle-noticia", query: { id: noticia.id } }}>
                        <a className="simple-btn mt-30">Leer Mas</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
                );
              })}
              <div className="pagination">
                <span className="active">
                  <a href="#0">1</a>
                </span>
                <span>
                  <a href="#0">2</a>
                </span>
                <span>
                  <a href="#0">
                    <i className="fas fa-angle-right"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;
