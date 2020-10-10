import React from "react";
import { Header, Table, Icon, Label } from "semantic-ui-react";
import DashboardConfig from "./config/dashboardConfig";
export default class TableExamplePadded extends React.Component {
  constructor(props) {
    super(props);
    this.dashboard_days = DashboardConfig["dashboard_days"];
    this.hours_per_day = DashboardConfig["hours_per_day"];
    this.step_of_hours_per_day = DashboardConfig["step_of_hours_per_day"];
    this.state = {
      inferences: [],
    };
    fetch(
      `http://127.0.0.1:8000/dashboard?day=${DashboardConfig["dashboard_days"]}`,
      {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${window.localStorage["jwt"]}`,
        }),
      }
    )
      .then((response) => response.json())
      .then((jsonData) => {
        this.updateStateAccording2API(jsonData);
      })
      .catch((err) => console.log("error:", err));
  }
  defaultdict(factory) {
    return new Proxy(
      {},
      {
        get(defaultdict, key) {
          if (!defaultdict.hasOwnProperty(key)) {
            defaultdict[key] = factory();
          }
          return defaultdict[key];
        },
      }
    );
  }

  updateStateAccording2API(jsonData) {
    const _transformDashboardResource = () => {
      const today = new Date().getDate();
      let _inferencesWithDatetime = this.defaultdict(Object);
      for (const inference of jsonData) {
        const datetimeObj = new Date(inference["TIMESTAMP"]);
        const keyOfInferenceHashTable = `${
          datetimeObj.getDate() - today + this.dashboard_days
        }_${
          Math.ceil(datetimeObj.getHours() / this.step_of_hours_per_day) *
          this.step_of_hours_per_day
        }`;
        if (
          _inferencesWithDatetime[keyOfInferenceHashTable][
            inference["ANNOTATIONS"]
          ] === undefined
        ) {
          _inferencesWithDatetime[keyOfInferenceHashTable][
            inference["ANNOTATIONS"]
          ] = 0;
        }
        _inferencesWithDatetime[keyOfInferenceHashTable][
          inference["ANNOTATIONS"]
        ] += 1;
      }
      return _inferencesWithDatetime;
    };
    const _calculateOccurencesOfAnnotations = () => {
      let _dashboardHashTable = this.defaultdict(Object);
      this.range(
        this.step_of_hours_per_day,
        this.hours_per_day + 1,
        this.step_of_hours_per_day
      ).map((hour) => {
        this.range(1, this.dashboard_days + 1, 1).map((day) => {
          const keyOfHashTable = `${day}_${hour}`;
          if (Object.keys(inferencesWithDatetime[keyOfHashTable]).length != 0) {
            for (const annotations of Object.keys(
              inferencesWithDatetime[keyOfHashTable]
            )) {
              _dashboardHashTable[keyOfHashTable][annotations] =
                inferencesWithDatetime[keyOfHashTable][annotations];
            }
          }
        });
      });
      return _dashboardHashTable;
    };
    const inferencesWithDatetime = _transformDashboardResource();
    const dashboardHashTable = _calculateOccurencesOfAnnotations();
    this.setState({ inferences: dashboardHashTable });
  }
  render() {
    return (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            {Array.from(Array(this.dashboard_days + 1).keys()).map((value) => (
              <Table.HeaderCell singleLine key={value}>
                {value}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.range(
            this.step_of_hours_per_day,
            this.hours_per_day + 1,
            this.step_of_hours_per_day
          ).map((hour) => {
            return (
              <Table.Row key={hour}>
                <Table.Cell key={hour}>
                  <Header as="h2" textAlign="center" key={hour}>
                    {hour}:00
                  </Header>
                </Table.Cell>
                {this.range(1, this.dashboard_days + 1, 1).map((day) => {
                  return (
                    <Table.Cell key={`${day}_${hour}`}>
                      {DashboardConfig.icons.map((iconObject) => {
                        return (
                          iconObject["condition"](
                            this.state.inferences[`${day}_${hour}`]
                          ) && (
                            <Label key={`${day}_${iconObject["icon"]}`}>
                              <Icon
                                name={iconObject["icon"]}
                                color={iconObject["color"]}
                              />
                              {
                                this.state.inferences[`${day}_${hour}`][
                                  iconObject["label"]
                                ]
                              }
                            </Label>
                          )
                        );
                      })}
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
