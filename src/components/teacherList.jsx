import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "../services/httpService";
import config from "../config.json";
import avatar from "../assets/avatar.jpeg";
import Input from "./common/input";
import DropDwon from "./common/dropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

class TeacherList extends Component {
  state = {
    allTeachers: [],
    searchText: "",
    dropDownValue: 0,
    ddOptions: [{}],
    loadingData: true,
  };

  async componentDidMount() {
    this.setState({ loadingData: true });
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

    const dropDownPostBody = {
      Action: 7,
      LookupType: 0,
      LookupId: 1,
      SelectionType: 1,
    };
    const ddResponse = await http.post(
      config.endPoint + "common/common/GetDropDownList",
      dropDownPostBody
    );
    const { data: dropDownData } = ddResponse;
    this.setState({
      allTeachers: data,
      ddOptions: dropDownData,
      loadingData: false,
    });
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
    this.setState({ allTeachers: data });
  };

  handleDropDownSelect = (e) => {
    this.setState({ dropDownValue: e.currentTarget.value });
  };

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
            {!this.state.loadingData ? (
              <div className="col-12 col-sm-1 col-lg-3 col-md-3 mb-3">
                <DropDwon
                  options={this.state.ddOptions}
                  onChange={this.handleDropDownSelect}
                  label="Select Department"
                />
              </div>
            ) : null}

            <div className="col-12 col-sm-1 col-lg-3 col-md-3 mb-3">
              <Input
                name="serach"
                id="serach"
                placeholder="Serach By Name"
                onChange={this.onChange}
              />
            </div>
            <div className="col-12 col-sm-2 col-lg-2 col-md-2">
              <button onClick={this.handelClick} className="btn btn-primary">
                Serach <FontAwesomeIcon icon="search" />
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
