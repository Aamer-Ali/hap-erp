import React, { Component } from "react";
import avatar from "../../assets/avatar.jpeg";
import App from "../../App";
import { Tab, Tabs } from "react-bootstrap";
import EmployeeDocumnetsTab from "./employeeDocumentsTab";
import EmployeeAttendaceTab from "./employeeAttendanceTab";
import EmployeePayrollTab from "./employeePayrollTab";
import EmployeeAppAccessTab from "./employeeAppAccessTab";

class EmployeeInfoTab extends Component {
  render() {
    console.log(this.props.data);

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
            {/* <div className="badge rounded-pill bg-secondary"> */}
            <span className="badge rounded-pill bg-secondary">
              {data ? data.DepartmentName : ""}
            </span>
            -
            <span className="badge rounded-pill bg-secondary">
              {data ? data.DesignationName : ""}
            </span>
            {/* </div> */}
          </div>
        </div>

        <Tabs className="nav nav-pills nav-fill mt-5" defaultActiveKey="second">
          <Tab eventKey="second" title="Documents">
            <EmployeeDocumnetsTab></EmployeeDocumnetsTab>
          </Tab>
          <Tab eventKey="third" title="Attendance">
            <EmployeeAttendaceTab></EmployeeAttendaceTab>
          </Tab>
          <Tab eventKey="fourth" title="Payroll">
            <EmployeePayrollTab></EmployeePayrollTab>
          </Tab>
          <Tab eventKey="fifth" title="App Access">
            <EmployeeAppAccessTab></EmployeeAppAccessTab>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default EmployeeInfoTab;
