import React from "react";

function TableAirline() {
  return (
    <div>
      <table className="table primaryBackGroundWhiteColor table-responsive-lg table-striped table-bordered">
        <caption>List of AirLine Trainings</caption>
        <thead className="thead-light">
          <tr>
            <th scope="col" style={{ fontSize: "1.2rem" }}>
              No
            </th>
            <th scope="col" style={{ fontSize: "1.2rem" }}>
              Courses
            </th>
            <th scope="col" style={{ fontSize: "1.2rem" }}>
              Period
            </th>
            <th scope="col" style={{ fontSize: "1.2rem" }}>
              Fees
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Airport Operations</td>
            <td>1 month</td>
            <td>200,000 RWF</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Airport Ground Handling</td>
            <td>1 month</td>
            <td>200,000 RWF</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Airline Marketing </td>
            <td>1 month</td>
            <td>200,000 RWF</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Air Cabin Crew</td>
            <td>1 month</td>
            <td>200,000 RWF</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Dangerous Goods</td>
            <td>1 month</td>
            <td>200,000 RWF</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Air fares and ticketing with Amadeus </td>
            <td>1 month</td>
            <td>200,000 RWF</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableAirline;
