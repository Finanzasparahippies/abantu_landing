import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { VIDEO_DATA } from "@data/index";

const Video = () => {

  const [open, setOpen] = useState({
    isOpen: false
  });

  const openModal = (e) => {
    e.preventDefault();
    setOpen({
      isOpen: true
    });
  };

  const { title, image, videoID } = VIDEO_DATA;
  
  return (
    <section className="video-one" id="video" style={{paddingTop: "80px"}}>
      <div className="video-title">
          <h2>{title}</h2>
        </div>
      <div className="container" style={{ backgroundImage: `url(${image})` }}>
        <a href="#" onClick={openModal} className="video-one__btn video-popup">
          <i className="fa fa-play"></i>
        </a>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={open.isOpen}
        videoId={videoID}
        onClose={() => setOpen({ isOpen: false })}
      />
    </section>
  );
};

export default Video;
