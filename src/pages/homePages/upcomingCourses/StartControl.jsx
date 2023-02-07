import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
function StartControl() {
  const [star, setStar] = useState(false);
  return (
    <div className=" btn-group primaryTextOrangeColor">
      <span>
        <FaStar />
      </span>
      <span>
        <FaStar />
      </span>
      <span>
        <FaStar />
      </span>
      <span>
        <FaStar />
      </span>
      <span onClick={() => setStar(!star)}>
        {star ? <FaStar /> : <FaRegStar />}
      </span>
    </div>
  );
}

export default StartControl;
