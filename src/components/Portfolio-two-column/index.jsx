/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
import API from "../../common/API";
import initIsotope from "../../common/initIsotope";
import { Modal, ModalContent } from "../../common/Modal";


const PortfolioTwoColumn = () => {

  const [isOpen, setIsopen] = useState(false);
  const showModal = () => setIsopen((prev) => !prev);
  const [imageUrl, setImageUrl] = useState("");

  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000)
    }
  }, [pageLoaded]);

  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {

    const getNoticias = async () => {
      const response = await API.get('/galeria/images');
      setImagenes(response.data);
    }
    getNoticias();
  }, []);
  

  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="gallery full-width">
          {imagenes.map((imagen) => (
            <>
            <Modal key={imagen.id} onOpen={showModal}>
              <div className="col-md-6 items graphic" onClick={() => setImageUrl(imagen.image)}>
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <img src={imagen.image} alt={imagen.id} />
                </div>
              </div>
            </Modal>
            {isOpen && (
              <ModalContent onClose={() => setIsopen(false)} >
                <img src={imageUrl} alt='modal' />
              </ModalContent>
            )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTwoColumn;
