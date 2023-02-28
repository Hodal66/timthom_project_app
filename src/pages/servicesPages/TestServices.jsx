import React, { useEffect, useState } from "react";
import "./services__page.css";
import axios from "axios";

function TestServices() {
  const [allUpcammingCourses, setAllCourses] = useState();
  const [title, setTitle] = useState("");

  const hundleSearchValue = async () => {
    alert("Ypu Cliked Me!! ");
    const { data } = await axios
      .get(`/allUpcammingCourses`)
      .then((response) => {
        console.log(
          "All Data are::::: ",
          response.data[0].lesson.studentAvailable
        );
        setAllCourses(data);
        setTitle(response.data);
      });
  };

  hundleSearchValue();

  useEffect(() => {
    setAllCourses();
  }, []);

  return (
    <div>
      <div className="btn btn-primary" onClick={() => hundleSearchValue()}>
        Check
      </div>
      <div className="name"></div>
    </div>
  );
}

export default TestServices;
