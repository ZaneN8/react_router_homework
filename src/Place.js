import React from "react";
import { Grid, Button } from "semantic-ui-react";
import PlaceForm from "./PlaceForm";

class Place extends React.Component {
  state = { editing: false };

  toggleButton = () => {
    this.setState({
      editing: !this.state.editing,
    });
  };

  render() {
    const { id, name, type, description } = this.props;
    return (
      <Grid columns={3} divided>
        <Grid.Row as="h3">{name}</Grid.Row>

        {this.state.editing ? (
          <PlaceForm
            id={id}
            name={name}
            type={type}
            description={description}
            toggleButtonProp={this.toggleButton}
          />
        ) : (
          <Grid.Column>
            <Grid.Row>{type}</Grid.Row>
            <Grid.Row>{description}</Grid.Row>
          </Grid.Column>
        )}
        <Grid.Row>
          <Grid.Column>
            <Button color="teal" onClick={this.toggleButton}>
              Edit
            </Button>
            <Button color="red">DELETE</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Place;
