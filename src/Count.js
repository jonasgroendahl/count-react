import React, { PureComponent } from "react";
import UserCard from "./components/UserCard/UserCard";
import DataCard from "./components/DataCard/DataCard";
import SingleCard from "./components/SingleCard/SingleCard";
import ClPopularityMenu from "./components/ClPopularityMenu/ClPopularityMenu";
import ClPopulairtyList from "./components/ClPopularityList/ClPopularityList";

class Count extends PureComponent {
  render() {
    return (
      <div>
        <div className="container-grid">
          <UserCard />
          <SingleCard
            title="Visitors right now"
            subheader="This will update every min"
            views="3"
            color="#69F0AE"
            className="view-count-animate"
          />
          <ClPopularityMenu />
          <ClPopulairtyList
            style={{
              gridColumn: 3,
              gridRow: "2/5"
            }}
          />
          <DataCard style={{ alignSelf: "flex-start" }} />
          <SingleCard title="Visitors this week" views="50" color="#E6EE9C" />
          <div />
          <SingleCard title="Visitors today" views="10" color="#E6EE9C" />
        </div>
      </div>
    );
  }
}

export default Count;
