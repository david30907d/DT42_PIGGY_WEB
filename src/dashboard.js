import React from "react";
import { Header, Table, Rating } from "semantic-ui-react";

export default class TableExamplePadded extends React.Component {
  constructor(props) {
    super(props);
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
            <Table.HeaderCell singleLine>TimeStamp</Table.HeaderCell>
            <Table.HeaderCell>Channel</Table.HeaderCell>
            <Table.HeaderCell>Annotations</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.state.inferences.map((value, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell singleLine>{value["TIMESTAMP"]}</Table.Cell>
                <Table.Cell singleLine>{value["CHANNEL"]}</Table.Cell>
                <Table.Cell singleLine>{value["ANNOTATIONS"]}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}
