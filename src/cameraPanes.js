import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
export default class CameraPanes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let storage = window.localStorage;
    return (
      <Dropdown text="請選擇相機">
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={this.props.createCamera}
            text="新增 Camera"
            description="ID 會遞增"
          />
          <Dropdown.Item
            onClick={this.props.deleteCamera}
            text="刪除 Camera"
            description="ID 會遞減"
          />
          {Object.entries(storage)
            .sort()
            .map((tuple, index) => {
              return (
                <Dropdown.Item
                  key={index}
                  onClick={() => this.props.cameraClick(tuple[1])}
                  text={tuple[0]}
                />
              );
            })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
