import React from "react";
import { Grid } from "semantic-ui-react";

class Place extends React.Component {
  render() {
    const { id, name, type, description } = this.props;
    return (
      <Grid columns={3} divided>
        <Grid.Column>
          {" "}
          <Grid.Row as="h3">{name}</Grid.Row>
          <Grid.Row>{type}</Grid.Row>
          <Grid.Row>{description}</Grid.Row>
        </Grid.Column>
        <Grid.Row>
          <Grid.Column>BUTTON</Grid.Column>
          <Grid.Column>BUTTON</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Place;
