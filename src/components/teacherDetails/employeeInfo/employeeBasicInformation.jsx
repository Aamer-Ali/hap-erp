// import React from "react";
// import TableHead from "../../common/tableHead";
// const EmployeeBasicInformation = (props) => {
//
//   const tableHeading = [
//     "Department",
//     "Designation",
//     "Employee Name",
//     "Contact No",
//     "Email",
//     "DOB",
//     "DOJ",
//   ];
//   columns = [...props.data];

//   const data = columns[0];

//   // return (
//   //   <table className="table table-customised">
//   //     <TableHead tableHeading={tableHeading} />
//   //     <tbody>
//   //       {columns.map((col) => (
//   //         <tr key={tableHeading}>
//   //           {/* {columns.map((col) => (
//   //             <td>{col.MobileNo}</td>
//   //           ))} */}
//   //         </tr>
//   //       ))}

//   //       {/* <tr>
//   //         <th scope="row"></th>
//   //         <td>Larry the Bird</td>
//   //         <td>@twitter</td>
//   //       </tr> */}
//   //     </tbody>
//   //   </table>
//   // );
// };

// export default EmployeeBasicInformation;

// // DateOfBirth: "1990-01-02"
// // DepartmentId: 2
// // DepartmentName: "Non Teaching "
// // Description: "NA"
// // DesignationId: 3
// // DesignationName: "Teacher"
// // Email: "jyotipathare1990@gmail.com"
// // EmployeeId: 2
// // EmployeeName: "JYOTI KISHOR PATHARE"
// // InstituteId: 1
// // IsActive: true
// // JobTimingId: 1
// // JoiningDate: "2016-06-23"
// // MobileNo: "8380025772"

import React, { Component } from "react";

class EmployeeBasicInformation extends Component {
  state = {
    columns: [],
  };

  getKeys = () => {
    return Object.keys(this.state.columns[0]);
  };

  getHeader = () => {
    var keys = this.getKeys();
    return keys.map((key, index) => {
      return <th key={key}>{key.toUpperCase()}</th>;
    });
  };

  RenderRow = (props) => {
    return props.keys.map((key, index) => {
      return <td key={props.data[key]}>{props.data[key]}</td>;
    });
  };

  getRowsData = () => {
    var items = this.state.columns;
    var keys = this.getKeys();
    return items.map((row, index) => {
      return (
        <tr key={index}>
          <this.RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };

  componentDidMount() {
    const { data } = this.props;
    const columns = data;
    this.setState({ columns });
  }

  render() {
    return (
      <div>
        {/* <table>
          <thead>
            <tr>{this.getHeader()}</tr>
          </thead>
          <tbody>{this.getRowsData()}</tbody>
        </table> */}
      </div>
    );
  }
}

export default EmployeeBasicInformation;
