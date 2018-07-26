import React, { PureComponent } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  CardActions
} from "../../../node_modules/@material-ui/core";
import { Info } from "@material-ui/icons";

export default class SingleCard extends PureComponent {
  render() {
    return (
      <Card style={{ background: this.props.color }}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe">
              {this.props.title && this.props.title.substr(0, 1)}
            </Avatar>
          }
          action={<IconButton />}
          title={this.props.title}
          subheader={this.props.subheader}
        />
        <CardContent>
          <h1 className={`view-count ${this.props.className}`}>
            {this.props.views}
          </h1>
        </CardContent>
        <CardActions>
          <IconButton>
            <Info />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}
