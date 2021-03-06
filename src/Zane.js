import React from "react";
import { Header } from "semantic-ui-react";
import Place from "./Place";
import PlaceForm from "./PlaceForm";

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

  addLocation = (location) => {
    const newLocations = { ...location, id: Math.random() };
    this.setState({
      locations: [...this.state.locations, newLocations],
    });
  };

  deletePlace = (placeId) => {
    const { locations } = this.state;
    const { filterLocations } = locations.filter((l) => l.id !== placeId);
    this.setState({
      locations: filterLocations,
    });
  };

  editPlace = (updateLocation) => {
    const { locations } = this.state;
    const newLocations = locations.map((location) => {
      if (location.id === updateLocation.id) {
        return updateLocation;
      }
      return location;
    });
    this.setState({
      locations: newLocations,
    });
  };

  renderPlace = () => {
    return this.state.locations.map((place) => (
      <Place
        key={place.id}
        {...place}
        deletePlaceProp={this.deletePlace}
        editPlaceProp={this.editPlace}
      />
    ));
  };

  render() {
    return (
      <div>
        <Header as="h1">Zane's places to go!</Header>
        <br />
        <PlaceForm addLocationProp={this.addLocation} />
        {this.renderPlace()}
      </div>
    );
  }
}

export default Zane;
