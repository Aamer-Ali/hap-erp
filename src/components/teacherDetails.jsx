import React, { Component } from "react";
import EmployeeInfoTab from "./teacherDetails/employeeInfoTab";
import EmployeeDocumnetsTab from "./teacherDetails/employeeDocumentsTab";
import EmployeeAttendaceTab from "./teacherDetails/employeeAttendanceTab";
import EmployeePayrollTab from "./teacherDetails/employeePayrollTab";
import EmployeeAppAccessTab from "./teacherDetails/employeeAppAccessTab";
import http from "../services/httpService";
import config from "../config.json";
import CustomTabs from "./common/customTabs";

class TeacherDetails extends Component {
  state = {
    employeeInfo: [],
    tabs: [
      EmployeeInfoTab,
      EmployeeDocumnetsTab,
      EmployeeAttendaceTab,
      EmployeePayrollTab,
      EmployeeAppAccessTab,
    ],
  };

  async componentDidMount() {
    const getEmployeeInformation = "hr/Employee/GetEmployee";
    const body = {
      Action: 2,
      InstituteId: 1,
      EmployeeId: this.props.match.params.id,
      DepartmentId: 0,
      EmployeeName: "",
      LookUpId: 0,
    };
    const response = await http.post(
      config.endPoint + getEmployeeInformation,
      body
    );
    const { data } = response;
    this.setState({ employeeInfo: data });
  }

  render() {
    return (
      <div className="container">
        <h4>Employee</h4>
        <CustomTabs
          tabs={this.state.tabs}
          employeeInfo={this.state.employeeInfo}
        />
      </div>
    );
  }
}

export default TeacherDetails;
