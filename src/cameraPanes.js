import React, { Component } from "react";
import history from "history/browser";
import { Dropdown } from "semantic-ui-react";
export default class CameraPanes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownText: "請選擇相機",
    };
  }
  handleClick = (value) => {
    history.push({
      pathname: window.location.pathname,
      search: `?cameraId=${value}`,
    });
    this.setState({ dropdownText: value });
  };
  render() {
    return (
      <Dropdown text={this.state.dropdownText}>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => this.handleClick("camera1")}
            text="Camera 1"
            description="門口那台"
          />
          <Dropdown.Item
            onClick={() => this.handleClick("camera2")}
            text="Camera 2"
            description="柱子那台"
          />
          <Dropdown.Item
            onClick={() => this.handleClick("camera3")}
            text="Camera 3"
            description="剩下那台"
          />
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
