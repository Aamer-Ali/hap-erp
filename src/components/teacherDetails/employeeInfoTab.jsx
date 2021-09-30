import React, { Component } from "react";
import avatar from "../../assets/avatar.jpeg";

import EmployeeDocumnetsTab from "./employeeDocumentsTab";
import EmployeeAttendaceTab from "./employeeAttendanceTab";
import EmployeePayrollTab from "./employeePayrollTab";
import EmployeeAppAccessTab from "./employeeAppAccessTab";
import CustomTabs from "../common/customTabs";

class EmployeeInfoTab extends Component {
  state = {
    tabs: [
      EmployeeDocumnetsTab,
      EmployeeAttendaceTab,
      EmployeePayrollTab,
      EmployeeAppAccessTab,
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
            <div className="largTitle text-primary">
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
