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
    const employeeData = data[0];
    // console.log("------> Employee Info Tab", employeeData);

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
              {employeeData ? employeeData.EmployeeName : ""} -
              <span className="badge rounded-pill bg-info">
                {employeeData ? employeeData.EmployeeId : ""}
              </span>
            </div>
            <span className="badge rounded-pill bg-secondary">
              {employeeData ? employeeData.DepartmentName : ""}
            </span>
            -
            <span className="badge rounded-pill bg-secondary">
              {employeeData ? employeeData.DesignationName : ""}
            </span>
            <div className="col-12 col-sm-5 col-lg-5 col-md-5 mt-2">
              <span>
                <button
                  onClick={this.handelClick}
                  className="btn btn-primary rounded-pill btn-sm me-1"
                >
                  Change Picture
                </button>
                <button
                  onClick={this.handelClick}
                  className="btn btn-success rounded-pill  btn-sm me-1"
                >
                  Edit Profile
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <CustomTabs employeeInfo={[employeeData]} tabs={this.state.tabs} />
        </div>
      </div>
    );
  }
}

export default EmployeeInfoTab;
