/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Split from "../Split";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import API from "../../common/API";

const VideoInicio = () => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        console.clear();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    // const [videos, setVideos] = useState([]);

    // useEffect(() => {
    //   const getVideos = async () => {
    //     const response = await API.get('/galeria/videos');
    //     setVideos(response.data);
    //   }
    //   getVideos();
    // }
    // , []);

    const videos = [
        {
            id: 1,
            texto: "Así se forman las Redes de Contribución ABANTU",
            url: "https://www.youtube.com/watch?v=_89SJbL1dek",
            image: "/img/logos/coingrow.jpg",
        },
    ];

    return (
      console.log(videos),
        <section className="block-sec">
            <div
                className="background bg-img section-padding pb-3"
                style={{
                    backgroundImage: `url(${videos[0]?.image})`,
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",  }}
                data-overlay-dark="8"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="vid-area">
                                <div className="vid-icon" style={ { position:"relative" }}>
                                    {typeof window !== "undefined" && (
                                        <ModalVideo
                                            channel="youtube"
                                            autoplay
                                            isOpen={isOpen}
                                            videoId={videos[0]?.url.split("v=")[1]}
                                            onClose={() => setOpen(false)}
                                            style={{ zIndex: 1 }}
                                        />
                                    )}
                                    <a
                                        className="vid"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setOpen(true);
                                        }}
                                        href="https://www.youtube.com/watch?v=u2KXu6RQ2Ys"
                                    >
                                        <div className="vid-butn">
                                            <span className="icon">
                                                <i className="fas fa-play" style={ { color: "#05e09c"}} ></i>
                                            </span>
                                        </div>
                                    </a>
                                </div>

                                <div className="cont">
                                    <Split>
                                      <div >
                                        <h3 className="wow" data-splitting style={{ textAlign:"center", alignContent:"center", position:"relative" }}>
                                            {videos[0]?.texto}
                                        </h3>
                                      </div>
                                    </Split>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoInicio;
