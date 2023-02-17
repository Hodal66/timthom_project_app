import React from "react";
import {
  MdAccessTime,
  MdOutlineGroup,
  MdOutlinePlayLesson,
} from "react-icons/md";
function LessonTips({ studentAvailable, courseTime, numberOfLessons }) {
  return (
    <div className=" row">
      <div className="student__attend lesson___container col-12 col-md-2 d-flex text-start">
        <div>
          <MdOutlineGroup className=" iconLesson primaryTextOrangeColor" />
        </div>
        <span>{studentAvailable}</span>
      </div>
      <div className="course__time-taken  lesson___container col-12 col-md-5 d-flex flex-row text-center">
        <div>
          <MdAccessTime className=" iconLesson primaryTextOrangeColor" />
        </div>
        <span>{courseTime}</span>
      </div>
      <div className="number__of-lessons lesson___container col-12 col-md-5 d-flex text-end">
        <div>
          {" "}
          <MdOutlinePlayLesson className=" iconLesson primaryTextOrangeColor" />
        </div>
        <span>{numberOfLessons}</span> Lessons
      </div>
    </div>
  );
}

export default LessonTips;
