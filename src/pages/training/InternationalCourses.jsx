import React from "react";

function InternationalCourses() {
  return (
    <div>
      <h1 className="primaryTitle2-white text-center">IATA Trainings</h1>
      <table className="table primaryBackGroundWhiteColor table-responsive-lg table-striped table-bordered">
        <caption>List of IATA Trainings</caption>
        <thead className="thead-light">
          <tr>
            <th scope="col" style={{ fontSize: "1.2rem" }}>
              No
            </th>
            <th scope="col" style={{ fontSize: "1.2rem" }}>
              IATA COURSES WITHIN SIX MONTHS,
            </th>
            <th scope="col" style={{ fontSize: "1.2rem" }}>
              IATA FEES
            </th>
            <th scope="col" style={{ fontSize: "1.2rem" }}>
              TRAINING FEES
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>IATA Diploma in Airport Operations</td>
            <td>USD 455</td>
            <td>400,000 RWF</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>IATA Diploma in Foundation in Travel and Tourism</td>
            <td>USD 670</td>
            <td>400,000 RWF</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>IATA Diploma in Aviation Fundamentals </td>
            <td>USD 975</td>
            <td>400,000 RWF</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Air Cabin Crew</td>
            <td>USD 490</td>
            <td>400,000 RWF</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>IATA Diploma in Air Cargo Management</td>
            <td>USD 341</td>
            <td>400,000 RWF</td>
          </tr>
        </tbody>
      </table>

      <h1 className="primaryTitle2-white text-center">ICAO Trainings</h1>

      <table className="table primaryBackGroundWhiteColor table-responsive-lg table-striped table-bordered">
        <caption>List of ICAO Trainings</caption>
        <thead className="thead-light">
          <tr>
            <th scope="col" style={{ fontSize: "1.2rem" }}>
              No
            </th>
            <th scope="col" style={{ fontSize: "1.2rem" }}>
              ICAO COURSES WITHIN THREE MONTHS
            </th>
            <th scope="col" style={{ fontSize: "1.2rem" }}>
              ICAO FEES
            </th>
            <th scope="col" style={{ fontSize: "1.2rem" }}>
              TRAINING FEES
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td
              style={{ fontSize: "1.2rem" }}
              className="secondaryTextBlueColor fw-bold"
            >
              {" "}
              USOAP CMA Phase I
            </td>
            <td>USD 800 </td>
            <td>400,000 RWF</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>
              <span
                style={{ fontSize: "1.2rem" }}
                className="secondaryTextBlueColor fw-bold"
              >
                {" "}
                USOAP CMA Phase II: Specialization in
              </span>
              <ol>
                <li>
                  USOAP CMA Phase 2 - Personnel Licensing and Training (PEL EN)
                </li>
                <li>
                  USOAP CMA Phase 2 - Aircraft Operations including Dangerous
                  Goods (OPS EN)
                </li>
                <li>
                  USOAP CMA Phase 2 - Aircraft Accident and Incident
                  Investigation (AIG EN)
                </li>
                <li>USOAP CMA Phase 2 - Air Navigation Services (ANS EN)</li>
                <li>USOAP CMA Phase 2 - Aerodromes and Ground Aids (AGA EN)</li>
                <li>
                  USOAP CMA Phase 2 - Personnel Licensing and Training (PEL EN)
                </li>
                <li>
                  USOAP CMA Phase 2 - Aviation Legislation and Civil Aviation
                  Organization (LEG/ORG EN)
                </li>
              </ol>
            </td>
            <td>USD 670</td>
            <td>400,000 RWF</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InternationalCourses;
