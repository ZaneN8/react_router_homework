import React from 'react';

import { Header, Segment, Button, Icon } from "semantic-ui-react";
import NewQuote from './NewQuote';

class Quote extends React.Component {
  state = { editing: false, };

  toggleEdit = () => this.setState({ediing: !this.state.editing,});

  render() {
    const {id, quote, source} = this.props
    return (
      <Segment>
        
          {
            this.state.editing ? 
            <NewQuote {...this.props} 
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
          <Button animated >
            <Button.Content onClick={this.toggleEdit} visible>Edit</Button.Content>
            <Button.Content hidden>
              <Icon name='pencil' />
            </Button.Content>
          </Button>
          </div>

      </Segment>
    )
  }
}

export default Quote;