import React, { Component } from "react";
import { Header, Icon, Image, Menu } from "semantic-ui-react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Dashboard from "./dashboard.js";
import FormForSettings from "./form.js";
import CameraPanes from "./cameraPanes.js";
import RealTimeImage from "./realtime.js";

export default class HeaderAndMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "輸入影像設定" };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Router>
        <Menu pointing secondary>
          <Menu.Item
            as={Link}
            to={{ pathname: "/", search: window.location.search }}
            name="輸入影像設定"
            active={activeItem === "輸入影像設定"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to={{ pathname: "/annotations", search: window.location.search }}
            name="訓練資料標注"
            active={activeItem === "訓練資料標注"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to={{ pathname: "/realtime", search: window.location.search }}
            name="即時影像辨識"
            active={activeItem === "即時影像辨識"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to={{ pathname: "/dashboard", search: window.location.search }}
            name="辨識結果分析"
            active={activeItem === "辨識結果分析"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              as={Link}
              to={{ pathname: "/logout", search: window.location.search }}
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        <CameraPanes />

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
            <FormForSettings />
          </Route>
          <Route exact path="/realtime">
            <RealTimeImage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    );
  }
}
