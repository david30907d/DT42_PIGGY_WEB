import React from "react";
import { Image } from "semantic-ui-react";
import LablesOfRealtime from "./labelsOfRealtime.js";

export default class RealtimeImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const src = `http://127.0.0.1:8000/videofeed${this.props.search}`;
    return (
      <div>
        <center>
          <LablesOfRealtime />
          <Image src={src} size="massive" />
        </center>
      </div>
    );
  }
}
