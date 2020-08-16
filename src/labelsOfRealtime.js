import React from "react";
import { Label, List } from "semantic-ui-react";

const LablesOfRealtime = () => (
  <List divided selection>
    <List.Item>
      <Label color="red" horizontal>
        拱背動作
      </Label>
      分娩前徵兆
    </List.Item>
    <List.Item>
      <Label color="purple" horizontal>
        甩尾動作
      </Label>
      分娩前徵兆
    </List.Item>
    <List.Item>
      <Label color="violet" horizontal>
        新生仔豬狀態
      </Label>
      活胎或死胎
    </List.Item>
    <List.Item>
      <Label color="orange" horizontal>
        分娩動作
      </Label>
    </List.Item>
    <List.Item>
      <Label color="brown" horizontal>
        新生仔豬計數
      </Label>
    </List.Item>
  </List>
);

export default LablesOfRealtime;
