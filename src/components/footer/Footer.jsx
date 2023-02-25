import React, { useEffect, useState } from "react";
import "./footer.css";
import LogoImage from "../../assets/images/11780708.png";
import SocialMedia from "./socialMedia/SocialMedia";
import { Link } from "react-router-dom";
import NewsLetter from "./newsLetter/NewsLetter";
import axios from "axios";
function Footer() {
  const [state, setstate] = useState([]);
  const [allDataContent, setAllDataContent] = useState([]);
  const hundleDataCourses = async () => {
    const { data } = await axios.get(
      "http://localhost:3004/allUpcammingCourses"
    );
    setAllDataContent(data);
  };

  useEffect(() => {
    hundleDataCourses();
  }, [state]);
  return (
    <div className="py-5 thirdTextWhiteColor footerContainer">
      <footer className="container w-100 px-5 px-sm-3 px-md-0">
        <div className="topContent  thirdTextWhiteColor  row">
          <div className="left_content logoAndSocialMedia col-12 col-sm-6 col-md-4 py-2">
            <img src={LogoImage} alt="LogoImage" style={{ width: "250px" }} />
            <p className="py-2">
              Aviation is the operation of aircraft to provide transportation of
              people, goods, or services. It has revolutionized the way we
              travel and has connected people and places around the world.
            </p>
            <div className="socialMedia">
              <SocialMedia />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 py-2">
            <h5 className="py-2">Latest Courses</h5>
            {allDataContent &&
              allDataContent.map((item) => {
                return (
                  <div className="latestContent row px-2 py-1" key={item.id}>
                    <Link to={`/service_details/${item.id}`}>
                      <span className="footerCourse border border-0 border-bottom-2 border-primary">
                        {item.titleInShortName}
                      </span>
                    </Link>
                  </div>
                );
              })}
          </div>
          <div className="right_content newsLetter col-12 col-sm-6 col-md-4  py-2">
            <NewsLetter />
          </div>
        </div>
        <hr className="thirdBackGroundWhiteColor" />
        <div className="bottomContent text-center pt-2">
          Lorem ipsum, magnam laborum repellat excepturi, eum nobis? Optio.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
