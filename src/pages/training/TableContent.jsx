import React from "react";

function TableContent() {
  return (
    <div>
      <table className="table primaryBackGroundWhiteColor table-responsive-lg table-striped table-bordered">
        <caption>List of courses</caption>
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
            <td>Personnel Licensing</td>
            <td>1 month</td>
            <td>300,000 RWF</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Airport Operations</td>
            <td>1 month</td>
            <td>300,000 RWF</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Auditing Techniques in Civil Aviation</td>
            <td>1 month </td>
            <td>300,000 RWF</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Safety Management System </td>
            <td>1 month</td>
            <td>300,000 RWF</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>USOAP CMA AUDIT</td>
            <td>1 month </td>
            <td>400,000 RWF</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Aviation Management</td>
            <td>2 months</td>
            <td>400,000 RWF</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableContent;
