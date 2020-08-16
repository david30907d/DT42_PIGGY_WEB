import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import HeaderAndMenu from "./header.js";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="game">
        <HeaderAndMenu />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Index />, document.getElementById("root"));
