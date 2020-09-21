import React from "react";
import { Form, Container } from "semantic-ui-react";

export default class VictorForm extends React.Component{
 state = { title:"" , body: "" };

submit = (e) => {
   
    this.props.addComics(this.state);
    this.setState({ title: "", body: "", });
  }
    

render(){
    return(
        <Container >
        <Form onSubmit={this.submit}>
        <Form.Group widths="equal">
          <Form.Input 
            label="Title" 
            placeholder="Title" 
            name="title"   
            //value={this.state.body}     
          />
          <Form.Input 
            label="Body" 
            placeholder="Body" 
            name="body" 
            //value={this.state.body}
          />
          <Form.Button style={{ justifyContent: "align" }}>Submit</Form.Button>
        </Form.Group>
      </Form>
      </Container>
    )
  }
}