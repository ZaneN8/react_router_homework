import React from 'react';
import { Form, Button } from 'semantic-ui-react';


class NewQuote extends React.Component {
  state = { quote: "", source: "" };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.newQuote(this.state);
    this.setState({ quote: " ", source: " "});
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }


  render () {
    return(
      <Form onSubmit={this.handleSubmit}>
      <Form.Field>
        <label>Add Quote</label>
        <input
        placeholder='Because I got high...'
        onChange={this.handleChange}
        name='quote' 
        value={this.state.quote}
        />
      </Form.Field>
      <Form.Field>
        <label>Source</label>
        <input 
        placeholder='Afroman'
        value={this.state.source}
        onChange={this.handleChange}
        name="source"
         />
      </Form.Field>
      <Button color='purple' type='submit'>Submit</Button>
    </Form>

    )
  }
};


export default NewQuote;