import React, { PureComponent } from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary
} from "../../../node_modules/@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

export default class DataCard extends PureComponent {
  render() {
    return (
      <ExpansionPanel style={this.props.style}>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <p>Retrieve in-depth data</p>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    );
  }
}
