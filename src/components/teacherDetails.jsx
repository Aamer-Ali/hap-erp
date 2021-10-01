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
    isLoading: true,
    tabs: [
      { name: EmployeeInfoTab, title: "Employee Info" },
      { name: EmployeeDocumnetsTab, title: "Documnets" },
      { name: EmployeeAttendaceTab, title: "Attendance" },
      { name: EmployeePayrollTab, title: "Payroll" },
      { name: EmployeeAppAccessTab, title: "App Access" },
    ],
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
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
    this.setState({ employeeInfo: data, isLoading: false });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? null : (
          <div className="container">
            <h4>Employee</h4>
            {this.state.employeeInfo.lenght === 0 ? null : (
              <CustomTabs
                tabs={this.state.tabs}
                employeeInfo={this.state.employeeInfo}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default TeacherDetails;
