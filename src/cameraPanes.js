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
  handleCreateCamera = () => {
    let storage = window.localStorage;
    let amountOfCamera = storage.length + 1;
    storage[`Camera ${amountOfCamera}`] = `camera${amountOfCamera}`;
    this.forceUpdate();
  };
  handleDeleteCamera = () => {
    let storage = window.localStorage;
    storage.removeItem(`Camera ${storage.length}`);
    this.forceUpdate();
  };

  render() {
    let storage = window.localStorage;
    return (
      <Dropdown text={this.state.dropdownText}>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={this.handleCreateCamera}
            text="新增 Camera"
            description="ID 會遞增"
          />
          <Dropdown.Item
            onClick={this.handleDeleteCamera}
            text="刪除 Camera"
            description="ID 會遞減"
          />
          {Object.entries(storage)
            .sort()
            .map((tuple, index) => {
              return (
                <Dropdown.Item
                  key={index}
                  onClick={() => this.handleClick(tuple[1])}
                  text={tuple[0]}
                />
              );
            })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
