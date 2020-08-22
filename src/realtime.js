import React from "react";
import { Image } from "semantic-ui-react";
import LablesOfRealtime from "./labelsOfRealtime.js";
const src = "http://127.0.0.1:8000/videofeed";

const RealtimeImage = () => (
  <div>
    <center>
      <LablesOfRealtime />
      <Image src={src} size="massive" />
    </center>
  </div>
);

export default RealtimeImage;
