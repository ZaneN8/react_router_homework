import React from "react";
import { Header } from "semantic-ui-react";
import Place from "./Place";

class Zane extends React.Component {
  state = {
    locations: [
      { id: 1, name: "Kiitos", type: "Brewery", description: "Local Brewery" },
      {
        id: 2,
        name: "Oh Mai",
        type: "Restaurant",
        description: "Vietnamese food",
      },
      {
        id: 3,
        name: "Nicklecade",
        type: "Entertainment",
        description: "Cheap arcade for the night",
      },
    ],
  };

  renderPlace = () => {
    return this.state.locations.map((place) => (
      <Place key={place.id} {...place} />
    ));
  };

  render() {
    return (
      <div>
        <Header as="h1">Zane's places to go!</Header>
        <br />
        {this.renderPlace()}
      </div>
    );
  }
}

export default Zane;
