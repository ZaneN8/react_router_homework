import React from "react";
import { Form } from "semantic-ui-react";

class PlaceForm extends React.Component {
  state = {
    name: "",
    type: "",
    description: "",
  };

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Input placeholder="Name" label="Name" name="name" />
          <Form.Input placeholder="Type" label="Type" name="type" />
          <Form.Input
            placeholder="Description"
            label="Description"
            name="description"
          />
          <Form.Button color="green">Enter</Form.Button>
        </Form.Group>
      </Form>
    );
  }
}

export default PlaceForm;
