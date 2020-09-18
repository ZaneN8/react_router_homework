import React from "react";
import { Form } from "semantic-ui-react";

class PlaceForm extends React.Component {
  state = {
    name: "",
    type: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    this.props.addLocationProp(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleChange}>
        <Form.Group>
          <Form.Input
            placeholder="Name"
            label="Name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <Form.Input
            placeholder="Type"
            label="Type"
            name="type"
            onChange={this.handleChange}
            value={this.state.type}
          />
          <Form.Input
            placeholder="Description"
            label="Description"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <Form.Button color="green">Enter</Form.Button>
        </Form.Group>
      </Form>
    );
  }
}

export default PlaceForm;
