/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Split from "../Split";
import API from "../../common/API";

const BlogsThreeColumn2 = ({ subBG }) => {

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const getNoticias = async () => {
      const response = await API.get('/blog/posts/home');
      setNoticias(response.data);
    }
    getNoticias();
  }, []);



  return (
    console.log(noticias),
    <section className={`blog-grid section-padding ${subBG ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s" style={{ color:"#FFFFFF"}}>
            Mantente al tanto
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Ultimas Noticias.
            </h3>
          </Split>
          <span className="tbg">Noticias</span>
        </div>
        <div className="row">
      { noticias ? noticias.map (( noticia, id) => (
          <div className="col-lg-4" key={id}>
            <Link href={{ pathname: "/detalle-noticia", query: { id: noticia.id } }}>
              <div
                className="item list md-mb50 wow fadeInUp"
                data-wow-delay=".3s"
              >
                  
                <div key={id} className="img" style={{ }}>
                  <img style={ { width: "auto", height: 150 } } src={noticia.main_image} alt="image" />
                </div>
                <div className="cont">
                    <a className="date custom-font">
                      <span>
                        {noticia.created_at.split('T')[0] }
                      </span>
                    </a>
                    <h6>
                        {noticia.title}
                    </h6>
                    <p style={{ marginBottom: 20 }}>
                        {noticia.excerpt}
                    </p>
                    <div className="btn-more custom-font">
                        <a className="simple-btn">Leer Más</a>
                    </div>
                </div>
              </div>
            </Link>
          </div>
            )) : null
          }
              </div>
            </div>
    </section>
  );
};

export default BlogsThreeColumn2;
