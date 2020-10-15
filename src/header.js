import React, { Component } from "react";
import { Header, Icon, Image, Menu } from "semantic-ui-react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Dashboard from "./dashboard.js";
import history from "history/browser";

import FormForSettings from "./form.js";
import CameraPanes from "./cameraPanes.js";
import RealTimeImage from "./realtime.js";
import Login from "./login.js";

export default class HeaderAndMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "輸入影像設定", search: window.location.search };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  handleCameraClick = (value) => {
    history.push({
      pathname: window.location.pathname,
      search: `?cameraId=${value}`,
    });
    this.setState({ search: window.location.search });
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
    return (
      <Router>
        <Menu pointing secondary>
          <Menu.Item
            as={Link}
            to={{ pathname: "/", search: this.state.search }}
            name="輸入影像設定"
            active={this.state.activeItem === "輸入影像設定"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to={{ pathname: "/annotations", search: this.state.search }}
            name="訓練資料標注"
            active={this.state.activeItem === "訓練資料標注"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to={{ pathname: "/realtime", search: this.state.search }}
            name="即時影像辨識"
            active={this.state.activeItem === "即時影像辨識"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to={{ pathname: "/dashboard", search: this.state.search }}
            name="辨識結果分析"
            active={this.state.activeItem === "辨識結果分析"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              as={Link}
              to={{ pathname: "/login", search: this.state.search }}
              name="login"
              active={this.state.activeItem === "login"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        <CameraPanes
          cameraClick={this.handleCameraClick}
          createCamera={this.handleCreateCamera}
          deleteCamera={this.handleDeleteCamera}
        />

        <Header as="h2" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>母豬分娩/發情影像識別系統</Header.Content>
        </Header>
        <Image
          centered
          size="large"
          src="https://www.mbatalk.com.tw/uploads/public/uploads//sMPyEllrBS7R8RBqZ8vLmh1K6J1CSXLGlKKj8V2n.jpeg"
        />

        <Switch>
          <Route exact path="/">
            <FormForSettings search={this.state.search} />
          </Route>
          <Route exact path="/realtime">
            <RealTimeImage search={this.state.search} />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    );
  }
}
