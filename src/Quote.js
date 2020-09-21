import React from 'react';

import { Header, Segment, Button, Icon } from "semantic-ui-react";
import NewQuote from './NewQuote';

class Quote extends React.Component {
  state = { editing: false, };

  toggleEdit = () => this.setState({editing: !this.state.editing, });

  render() {
    const {id, quote, source, deleteQuote} = this.props
    return (
      <Segment>
        
          {
            this.state.editing ? 
            <NewQuote {...this.props} toggleEdit={this.toggleEdit}
            id={id}
            quote={quote}
            source={source}

            />
            :
          <div>
            <Header as='h2'>{ this.props.quote }</Header>
            <b>{ this.props.source }</b>
          </div>
          }
          <div>
          <Button onClick={this.toggleEdit} animated >
            <Button.Content onClick={this.toggleEdit} visible>Edit</Button.Content>
            <Button.Content onClick={this.toggleEdit} hidden>
              <Icon name='pencil' />
            </Button.Content>
          </Button>
          <Button onClick={() => deleteQuote(id)} animated >
            <Button.Content  visible>Delete</Button.Content>
            <Button.Content  hidden>
              <Icon color='red' name='trash' />
            </Button.Content>
          </Button>
          </div>

      </Segment>
    )
  }
}

export default Quote;