import React from "react";
import { Image } from "semantic-ui-react";
import LablesOfRealtime from "./labelsOfRealtime.js";

const RealtimeImage = () => {
  const src = `http://127.0.0.1:8000/videofeed${window.location.search}`;
  return (
    <div>
      <center>
        <LablesOfRealtime />
        <Image src={src} size="massive" />
      </center>
    </div>
  );
};

export default RealtimeImage;
