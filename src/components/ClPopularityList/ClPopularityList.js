import React, { PureComponent } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Avatar
} from "../../../node_modules/@material-ui/core";
import axios from "axios";
import { PlayArrow } from "@material-ui/icons";

export default class ClPopulairtyList extends PureComponent {
  state = {
    items: []
  };

  async componentDidMount() {
    const token = await axios.post(
      `https://api-wexer.herokuapp.com/v1/sensors/vc`
    );
    console.log(token);
    const result = await axios.post(
      `https://api-wexer.herokuapp.com/v1/calendars/4740/exportdata?token=${
        token.data.access_token
      }&data=5970&data_output=count_in&period_step=30min&period=today&start=2018-07-26&player_id=4431&end=2018-07-26`
    );
    result.data.sort((x, y) => (x.startdate > y.startdate ? 1 : -1));
    this.setState({ items: result.data });
  }
  render() {
    return (
      <List style={this.props.style}>
        {this.state.items.map(item => (
          <ListItem>
            <Avatar>{item.views ? item.views : "0"}</Avatar>
            <ListItemText
              primary={item.content_name}
              secondary={item.startdate.substr(11, 5)}
            />
          </ListItem>
        ))}
      </List>
    );
  }
}
