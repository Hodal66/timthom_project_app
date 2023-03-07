import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import myVideo from "../../../assets/videos/NewVideo.mp4";
function VideoComponent() {
  let posterLink =
    "http://e.huawei.com/-/mediae/EBG/Images/case-study/airport/airport-banner-wap2.jpg";
  return (
    <div>
      <Video
        autoPlay
        loop
        poster={posterLink}
        muted
        style={{ height: "30rem" }}
      >
        <source src={myVideo} type="video/mp4" />
      </Video>
    </div>
  );
}

export default VideoComponent;
