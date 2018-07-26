import React, { PureComponent } from "react";
import {
  Card,
  AppBar,
  CardContent,
  Typography,
  Toolbar
} from "@material-ui/core";

export default class UserCard extends PureComponent {
  render() {
    return (
      <Card>
        <AppBar position="static" style={{ boxShadow: "none" }}>
          <Toolbar variant="dense">
            <Typography variant="title" color="inherit">
              Wexer Count 2.0
            </Typography>
          </Toolbar>
        </AppBar>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            voluptates?
          </p>
        </CardContent>
      </Card>
    );
  }
}
