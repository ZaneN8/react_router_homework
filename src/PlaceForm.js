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
    if (this.props.id) {
      this.props.editPlaceProp({ ...this.state, id: this.props.id });
      this.props.toggleButtonProp();
    } else {
      this.props.addLocationProp(this.state);
      this.setState({ name: "", type: "", description: "" });
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group width="equals">
          <Form.Input
            placeholder="Name"
            label="Name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            required
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
