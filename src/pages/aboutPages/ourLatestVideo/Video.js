import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
function VideoComponent({ VideoContent }) {
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
        <source src={VideoContent} type="video/mp4" />
      </Video>
    </div>
  );
}

export default VideoComponent;
