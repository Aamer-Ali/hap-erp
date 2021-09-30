import React, { Component } from "react";
import avatar from "../../assets/avatar.jpeg";

import CustomTabs from "../common/customTabs";
import EmployeeAddress from "./employeeInfo/employeeAddress";
import EmployeeBankDetails from "./employeeInfo/employeeBankDetails";
import EmployeeBasicInformation from "./employeeInfo/employeeBasicInformation";
import EmployeeQualification from "./employeeInfo/employeeQualification";
import EmployeePreviousExperience from "./employeeInfo/employeePreviopusExpereince";
import EmployeeReference from "./employeeInfo/employeeReference";

class EmployeeInfoTab extends Component {
  state = {
    tabs: [
      { name: EmployeeBasicInformation, title: "Basic Information" },
      { name: EmployeeQualification, title: "Qualification" },
      { name: EmployeePreviousExperience, title: "Previous Experience" },
      { name: EmployeeReference, title: "Reference" },
      { name: EmployeeAddress, title: "Address Details" },
      { name: EmployeeBankDetails, title: "bank Deatils" },
    ],
  };

  render() {
    const { data } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-lg-3 col-12 col.sm-12,col-md-3">
            <img
              src={avatar}
              height="250px"
              width="250px"
              alt="Employee"
              className="mt-4"
            />
          </div>
          <div className="pt-5 align-middle mt-4 col-lg-9 col-12 col.sm-12,col-md-9">
            <div className="largTitle ">
              {data ? data.EmployeeName : ""} -
              <span> {data ? data.EmployeeId : ""}</span>
            </div>
            <span className="badge rounded-pill bg-secondary">
              {data ? data.DepartmentName : ""}
            </span>
            -
            <span className=" badge rounded-pill bg-secondary">
              {data ? data.DesignationName : ""}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <CustomTabs tabs={this.state.tabs} />
        </div>
      </div>
    );
  }
}

export default EmployeeInfoTab;
