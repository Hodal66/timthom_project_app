import React from "react";

function Welcome() {
  return (
    <div>
      <h1 className="primaryTitle2-white primaryTextOrangeColor">
        Please Apply.
      </h1>
      <p className="primaryTextWhiteColor mx-4 mx-md-2 selection">
        TIMTOM AVIATION is calling for the public whether from Rwanda or
        international students to apply for courses offered in Civil Aviation
        Management, Airline, Airport Management, and Travel & Tourism
        Management. These courses are professional and internationally
        recognized certificates and diplomas are awarded in partnership with
        IATA, ICAO, and SACCA Institute of Freight and Tourism. Registration is
        done all the time during working hours and working days from Monday to
        Friday; from 08:00 AM to 05:00 PM and we have intakes in March, June,
        September, and December every year.
        <div>
          <a
            href=" https://forms.gle/LkJz3w75ntLoeTyE6"
            nonce="true"
            alt="link"
            target="_blank"
          >
            <button className="btn mt-5 w-50 btnOrange ReadMore">
              {" "}
              Apply Now
            </button>
          </a>
        </div>
      </p>
    </div>
  );
}

export default Welcome;
