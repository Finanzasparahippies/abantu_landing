import React from "react";
import Link from "next/link";

const BlogDetails = ({ noticia }) => {
 
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src={noticia.main_image ? noticia.main_image : ""} alt="blog" />
              </div>
              <div className="content pt-20">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p>
                        </p>
                      </div>
                      <p>
                        {noticia?.content}
                      </p>

                      <h6 style={{ marginTop: 20, marginBottom: 20 }}>
                        Galería
                      </h6>

                     
                      <div className="row">
                        
                        <div className="col-md-6">
                          <div className="mb-10">
                            {noticia?.images?.map((image, index) => (
                              <img key={index} src={image.image} alt="image" style={{ width: "100%", height: "auto" }} />
                            ))}
                          </div>
                        </div>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
};

export default BlogDetails;
