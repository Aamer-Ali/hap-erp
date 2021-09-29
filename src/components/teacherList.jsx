import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "../services/httpService";
import config from "../config.json";
import avatar from "../assets/avatar.jpeg";
// import { EmployeeModel } from "../models/employeeModel";

class TeacherList extends Component {
  state = {
    // allTeachers: (EmployeeModel = []),
    allTeachers: [],
    searchText: "",
    dropDownValue: 0,
  };

  async componentDidMount() {
    const body = {
      Action: 1,
      InstituteId: 1,
      EmployeeId: 0,
      DepartmentId: 0,
      EmployeeName: "",
      LookUpId: 0,
    };
    const response = await http.post(
      config.endPoint + "hr/Employee/GetEmployee",
      body
    );
    const { data } = response;
    this.setState({ allTeachers: data, filterTeacher: data });
  }

  onChange = (e) => {
    let searchText = this.state.searchText;
    searchText = e.currentTarget.value;
    this.setState({ searchText });
  };

  handelClick = async () => {
    const body = {
      Action: 1,
      InstituteId: 1,
      EmployeeId: 0,
      DepartmentId: this.state.dropDownValue,
      EmployeeName: "",
      LookUpId: 0,
    };

    const response = await http.post(
      config.endPoint + "hr/Employee/GetEmployee",
      body
    );
    const { data } = response;
    this.setState({ allTeachers: data, filterTeacher: data });
  };

  handleDropDownSelect = (e) => {
    this.setState({ dropDownValue: e.currentTarget.value });
  };

  // searchData = (searchText) => {
  //   // const origianlTeachersList = [...this.state.allTeachers];
  //   // console.log(origianlTeachersList);
  //   // let filterTeacher = [...this.state.allTeachers];
  //   if (searchText) {
  //     console.log("Seraching");
  //     const teachers = this.state.allTeachers.filter((teacher) =>
  //       teacher.EmployeeName.toLowerCase().startsWith(searchText.toLowerCase())
  //     );
  //     this.setState({ allTfileachers: teachers });
  //   } else {
  //     console.log("Clear");
  //     console.log(origianlTeachersList);
  //     this.setState({ allTeachers: origianlTeachersList });
  //   }
  // };

  render() {
    const { searchText, allTeachers } = this.state;
    const lowerCasedFilter = searchText.toLowerCase();
    const filterdData = allTeachers.filter((item) => {
      return item.EmployeeName.toLowerCase().includes(lowerCasedFilter);
    });

    return (
      <div className="container mt-4">
        <div className="form-group">
          <div className="row">
            <div className="col-12 col-sm-1 col-lg-3 col-md-3 mb-3">
              <select
                onChange={this.handleDropDownSelect}
                className="cform-control form-select"
              >
                <option default value="0">
                  Select Departmetnt
                </option>
                <option value="1">Teaching</option>
                <option value="2">Non Teacheing</option>
                <option value="3">Vice Pricipal</option>
              </select>
            </div>
            <div className="col-12 col-sm-1 col-lg-3 col-md-3 mb-3">
              <input
                onChange={this.onChange}
                name="search"
                id="serach"
                placeholder="Search By Name"
                value={this.state.searchText}
                className="form-control"
              />
            </div>
            <div className="col-12 col-sm-1 col-lg-1 col-md-1">
              <button onClick={this.handelClick} className="btn btn-primary">
                Serach
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-12">
            <div className="mt-10">
              <div className="row">
                {filterdData.map((teacher) => (
                  <div
                    key={teacher.EmployeeId}
                    className="card text-center col-sm-6 col-12 col-md-6 col-lg-3"
                  >
                    <Link
                      className="text-link"
                      to={`teacherDetails/${teacher.EmployeeId}`}
                    >
                      <div className="mx-auto text-center">
                        <img
                          src={avatar}
                          height="50px"
                          width="50px"
                          alt="Employee"
                          className="rounded-circle mt-4"
                        />
                      </div>
                      <div className="titleText">{teacher.EmployeeName}</div>
                      <div>{teacher.MobileNo}</div>
                      <div className="emploeeDetailsBadge">
                        <span className="employeeDetailsBadge">
                          {teacher.DepartmentName}
                        </span>

                        <span className="employeeDetailsBadge">
                          {teacher.DesignationName}
                        </span>

                        <span className="employeeDetailsBadge">
                          {teacher.EmployeeCode}
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherList;

// class EmployeeModel {
//   constructor(
//     EmployeeId,
//     DepartmentId,
//     DepartmentName,
//     DesignationId,
//     DesignationName,
//     EmployeeCode,
//     InstituteId,
//     EmployeeName,
//     MobileNo,
//     Email,
//     DateOfBirth,
//     JoiningDate,
//     PhotoUrl,
//     Description,
//     JobTimingId
//   ) {
//     this.EmployeeId = EmployeeId;
//     this.DepartmentId = DepartmentId;
//     this.DepartmentName = DepartmentName;
//     this.DesignationId = DesignationId;
//     this.DesignationName = DesignationName;
//     this.EmployeeCode = EmployeeCode;
//     this.InstituteId = InstituteId;
//     this.EmployeeName = EmployeeName;
//     this.MobileNo = MobileNo;
//     this.Email = Email;
//     this.DateOfBirth = DateOfBirth;
//     this.JoiningDate = JoiningDate;
//     this.PhotoUrl = PhotoUrl;
//     this.Description = Description;
//     this.JobTimingId = JobTimingId;
//   }
// }
