import React, { useState } from "react";
import image1 from "../../assets/imageGallery/1.jpg";
import image3 from "../../assets/imageGallery/3.jpg";
import image4 from "../../assets/imageGallery/4.jpg";
import image5 from "../../assets/imageGallery/5.jpg";
import image6 from "../../assets/imageGallery/6.jpg";
import image7 from "../../assets/imageGallery/7.jpg";
import image8 from "../../assets/imageGallery/8.jpg";
import image9 from "../../assets/imageGallery/9.jpg";
import image10 from "../../assets/imageGallery/10.jpg";
import image11 from "../../assets/imageGallery/11.jpg";
import image12 from "../../assets/imageGallery/12.jpg";
import image13 from "../../assets/imageGallery/13.jpg";
import image14 from "../../assets/imageGallery/14.jpg";
import image15 from "../../assets/imageGallery/15.jpg";
import image16 from "../../assets/imageGallery/16.jpg";
import image17 from "../../assets/imageGallery/17.jpg";
import image18 from "../../assets/imageGallery/18.jpg";
import image19 from "../../assets/imageGallery/19.jpg";
import image20 from "../../assets/imageGallery/20.jpg";
import image21 from "../../assets/imageGallery/21.jpg";
import image22 from "../../assets/imageGallery/22.jpg";
import image23 from "../../assets/imageGallery/23.jpg";
import image24 from "../../assets/imageGallery/24.jpg";
import image25 from "../../assets/imageGallery/25.jpg";
import image26 from "../../assets/imageGallery/26.jpg";
import image28 from "../../assets/imageGallery/28.jpg";
import image29 from "../../assets/imageGallery/29.jpg";
import image30 from "../../assets/imageGallery/30.jpg";
import image31 from "../../assets/imageGallery/31.jpg";
import image32 from "../../assets/imageGallery/32.jpg";
import image33 from "../../assets/imageGallery/33.jpg";
import image34 from "../../assets/imageGallery/34.jpg";
import image35 from "../../assets/imageGallery/35.jpg";
import image36 from "../../assets/imageGallery/36.jpg";
import image37 from "../../assets/imageGallery/37.jpg";

import HeaderPageComponent from "../../components/headerPages/HeaderPageComponent";
import "./gallery.css";
import Footer from "../../components/footer/Footer";
const data = [
  {
    id: 1,
    imageSrc: image1,
  },

  {
    id: 3,
    imageSrc: image3,
  },

  {
    id: 4,
    imageSrc: image4,
  },
  {
    id: 5,
    imageSrc: image5,
  },
  {
    id: 6,
    imageSrc: image6,
  },
  {
    id: 7,
    imageSrc: image7,
  },
  {
    id: 8,
    imageSrc: image8,
  },

  {
    id: 9,
    imageSrc: image9,
  },
  {
    id: 10,
    imageSrc: image10,
  },
  {
    id: 11,
    imageSrc: image11,
  },
  {
    id: 12,
    imageSrc: image12,
  },
  {
    id: 13,
    imageSrc: image13,
  },

  {
    id: 14,
    imageSrc: image14,
  },
  {
    id: 15,
    imageSrc: image15,
  },
  {
    id: 16,
    imageSrc: image16,
  },
  {
    id: 17,
    imageSrc: image17,
  },
  {
    id: 18,
    imageSrc: image18,
  },

  {
    id: 19,
    imageSrc: image19,
  },
  {
    id: 20,
    imageSrc: image20,
  },
  {
    id: 21,
    imageSrc: image21,
  },
  {
    id: 22,
    imageSrc: image22,
  },
  {
    id: 23,
    imageSrc: image23,
  },

  {
    id: 24,
    imageSrc: image24,
  },
  {
    id: 25,
    imageSrc: image25,
  },
  {
    id: 26,
    imageSrc: image26,
  },
  {
    id: 28,
    imageSrc: image28,
  },
  {
    id: 29,
    imageSrc: image29,
  },

  {
    id: 30,
    imageSrc: image30,
  },
  {
    id: 31,
    imageSrc: image31,
  },
  {
    id: 32,
    imageSrc: image32,
  },
  {
    id: 33,
    imageSrc: image33,
  },
  {
    id: 34,
    imageSrc: image34,
  },

  {
    id: 35,
    imageSrc: image35,
  },
  {
    id: 36,
    imageSrc: image36,
  },
  {
    id: 37,
    imageSrc: image37,
  },
];

function Gallery() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImage = (imageSource) => {
    setTempImgSrc(imageSource);
    setModel(true);
  };
  return (
    <div id="" className="  overflow-hidden About__Us_main-container myGallery">
      <HeaderPageComponent
        title="Our Gallery"
        nextLink=""
        prevLink="/"
        prevLinkText="Home"
        nextLinkText="gallery"
      />
      <section className="container-fluid AllGalleryImageContainer">
        <div className={model ? "model open" : "model"}>
          <div className="PopupImageContainer" onClick={() => setModel(false)}>
            <img src={tempImgSrc} alt="clicked ImageId" />
            <span className="spanX">X</span>
          </div>
        </div>
        <div className="gallery">
          {data.map((item, id) => {
            return (
              <div
                className="pics"
                key={id}
                onClick={() => getImage(item.imageSrc)}
              >
                <img
                  src={item.imageSrc}
                  alt="imageContent"
                  style={{ width: "100%" }}
                  className="galleryImages"
                />
              </div>
            );
          })}
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Gallery;
