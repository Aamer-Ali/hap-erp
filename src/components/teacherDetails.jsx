import React, { Component } from "react";
import EmployeeInfoTab from "./teacherDetails/employeeInfoTab";
import EmployeeDocumnetsTab from "./teacherDetails/employeeDocumentsTab";
import EmployeeAttendaceTab from "./teacherDetails/employeeAttendanceTab";
import EmployeePayrollTab from "./teacherDetails/employeePayrollTab";
import EmployeeAppAccessTab from "./teacherDetails/employeeAppAccessTab";
import { Tab, Tabs } from "react-bootstrap";
import http from "../services/httpService";
import config from "../config.json";

class TeacherDetails extends Component {
  state = {
    employeeInfo: [],
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

  // handleTabClick = (tab) => {
  //   const selectedTabIndex = this.state.tabs.indexOf(tab);
  //   this.setState({ selectedTabIndex });
  //   this.renderTabs(selectedTabIndex);
  // };

  // renderTabs() {
  //   let component = <EmployeeInfoTab></EmployeeInfoTab>;
  //   if (this.state.selectedTabIndex === 0)
  //     component = <EmployeeInfoTab></EmployeeInfoTab>;
  //   else if (this.state.selectedTabIndex === 1)
  //     component = <EmployeeDocumnetsTab></EmployeeDocumnetsTab>;
  //   else if (this.state.selectedTabIndex === 2)
  //     component = <EmployeeAttendaceTab></EmployeeAttendaceTab>;
  //   else if (this.state.selectedTabIndex === 3)
  //     component = <EmployeePayrollTab></EmployeePayrollTab>;
  //   else if (this.state.selectedTabIndex === 4)
  //     component = <EmployeeAppAccessTab></EmployeeAppAccessTab>;
  //   return (
  //     <div className="tab-content">
  //       <div
  //         className="tab-pane active"
  //         id="home"
  //         role="tabpanel"
  //         aria-labelledby="home-tab"
  //       >
  //         {component}
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="container">
        <h4>Employee</h4>
        <Tabs
          className="nav nav-pills nav-fill justify-content-center "
          defaultActiveKey="first"
        >
          <Tab eventKey="first" title="Employee Info">
            <EmployeeInfoTab
              data={this.state.employeeInfo[0]}
            ></EmployeeInfoTab>
          </Tab>
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
  // render() {
  //   const [count, setCount] = useState;
  //   console.log(count);
  //   return (
  //     <div className="row">
  //       <ul className="nav nav-pills flex-column flex-sm-row" id="myTab">
  //         {this.state.tabs.map((tab) => (
  //           <li key={tab} className="nav-item" role="presentation">
  //             <button
  //               onClick={() => this.handleTabClick(tab)}
  //               className="nav-link" //Condition for active or not
  //               id={[tab]}
  //               data-bs-toggle="tab"
  //               data-bs-target="#home"
  //               type="button"
  //               role="tab"
  //               aria-controls="home"
  //               aria-selected="false" //Condition
  //             >
  //               {tab}
  //             </button>
  //           </li>
  //         ))}
  //       </ul>
  //       {this.renderTabs(this.selectedTabIndex)}
  //     </div>
  //   );
  // }
}

export default TeacherDetails;
