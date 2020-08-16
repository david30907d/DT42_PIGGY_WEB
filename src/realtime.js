import React from "react";
import { Image } from "semantic-ui-react";
import LablesOfRealtime from "./labelsOfRealtime.js";
const src =
  "https://cdn.shopify.com/s/files/1/1952/8341/products/SakuraCreditFrameA_2020@2x.jpg?v=1587461579";

const RealtimeImage = () => (
  <div>
    <center>
      <LablesOfRealtime />
      <Image src={src} size="massive" />
    </center>
  </div>
);

export default RealtimeImage;
