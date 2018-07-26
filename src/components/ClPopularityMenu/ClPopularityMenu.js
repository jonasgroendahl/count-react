import React, { PureComponent } from "react";
import { DatePicker } from "material-ui-pickers";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Card, CardContent } from "../../../node_modules/@material-ui/core";

export default class ClPopularityMenu extends PureComponent {
  state = {
    date: format(new Date(), "YYYY-MM-DD")
  };

  changeDate = date => {
    this.setState({ date });
  };

  render() {
    return (
      <Card>
        <CardContent>
          <h1>Class Popularity</h1>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              label="Choose a date"
              format="YYYY-MM-DD"
              disableOpenOnEnter
              animateYearScrolling={false}
              value={this.state.date}
              onChange={this.changeDate}
              rightArrowIcon={<ChevronRight />}
              leftArrowIcon={<ChevronLeft />}
            />
          </MuiPickersUtilsProvider>
        </CardContent>
      </Card>
    );
  }
}
