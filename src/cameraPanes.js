import React, { Component } from "react";
import history from "history/browser";
import { Dropdown } from "semantic-ui-react";
export default class CameraPanes extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = (value) => {
    history.push({
      pathname: window.location.pathname,
      search: `?cameraId=${value}`,
    });
  };
  render() {
    return (
      <Dropdown text="請選擇相機">
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => this.handleClick("1")}
            text="Camera 1"
            description="門口那台"
          />
          <Dropdown.Item
            onClick={() => this.handleClick("2")}
            text="Camera 2"
            description="柱子那台"
          />
          <Dropdown.Item
            onClick={() => this.handleClick("3")}
            text="Camera 3"
            description="剩下那台"
          />
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
