import React from "react";
import { Header, Table, Icon, Label } from "semantic-ui-react";
export default class TableExamplePadded extends React.Component {
  constructor(props) {
    super(props);
    this.dashboard_days = 7 + 1;
    this.hours_per_day = 24 + 1;
    this.step_of_hours_per_day = 3;
    this.state = {
      inferences: [],
    };
    fetch("http://127.0.0.1:8000/dashboard", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonData) => {
        this.setState({ inferences: jsonData });
      })
      .catch((err) => console.log("error:", err));
  }
  render() {
    return (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            {Array.from(Array(this.dashboard_days).keys()).map((value) => (
              <Table.HeaderCell singleLine key={value}>
                {value}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.range(
            this.step_of_hours_per_day,
            this.hours_per_day,
            this.step_of_hours_per_day
          ).map((hour) => {
            return (
              <Table.Row key={hour}>
                <Table.Cell key={hour}>
                  <Header as="h2" textAlign="center" key={hour}>
                    {hour}:00
                  </Header>
                </Table.Cell>
                {this.range(1, this.dashboard_days, 1).map((day) => {
                  return (
                    <Table.Cell key={`${day}_${hour}`}>
                      {hour % 1 === 0 && (
                        <Label key={`${day}_heart`}>
                          <Icon name="heart" color="red" />
                          {hour}
                        </Label>
                      )}
                      {hour % 2 === 0 && (
                        <Label key={`${day}_frown`}>
                          <Icon name="frown" color="purple" />
                          {hour}
                        </Label>
                      )}
                      {hour % 3 === 0 && (
                        <Label key={`${day}_hospital`}>
                          <Icon name="hospital" color="blue" />
                          {hour}
                        </Label>
                      )}
                      {hour % 4 === 0 && (
                        <Label key={`${day}_woman`}>
                          <Icon name="woman" color="teal" />
                          {hour}
                        </Label>
                      )}
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
  range = (start, end, step) => {
    return Array.from(
      Array.from(Array(Math.ceil((end - start) / step)).keys()),
      (x) => start + x * step
    );
  };
}
