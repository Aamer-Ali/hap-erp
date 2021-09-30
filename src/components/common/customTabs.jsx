import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";

class CustomTabs extends Component {
  render() {
    // this.props.tabs.map((tab) => console.log(tab.title));

    return (
      <Tabs
        // className="nav nav-pills nav-fill nav-justify justify-content-center "
        className="nav nav-pills nav-fill"
        // className="nav nav-fill tabData"
        defaultActiveKey="0"
        // activeKey="0"
      >
        {this.props.tabs.map((tab) => (
          <Tab
            key={tab.name}
            eventKey={this.props.tabs.indexOf(tab)}
            title={[tab.title]}
          >
            <tab.name
              data={this.props.employeeInfo ? this.props.employeeInfo[0] : null}
            />
          </Tab>
        ))}
      </Tabs>
    );
  }
}

export default CustomTabs;
