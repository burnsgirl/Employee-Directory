import React from "react";


function EmployeeCard(props) {
    return (
      <div className="card">
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {addEmployee.name}
            </li>
            <li>
              <strong>Occupation:</strong> {addEmployee.email}
            </li>
            <li>
              <strong>Location:</strong> {addEmployee.phone}
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default EmployeeCard;