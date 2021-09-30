import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";

class CustomTabs extends Component {
  render() {
    return (
      <Tabs
        className="nav nav-pills nav-fill justify-content-center "
        defaultActiveKey="0"
      >
        {this.props.tabs.map((T) => (
          <Tab key={T} eventKey={this.props.tabs.indexOf(T)} title={[T.name]}>
            <T
              data={this.props.employeeInfo ? this.props.employeeInfo[0] : null}
            ></T>
          </Tab>
        ))}
      </Tabs>
    );
  }
}

export default CustomTabs;
