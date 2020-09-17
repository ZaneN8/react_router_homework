import React from 'react';

import { Header, Segment, } from "semantic-ui-react";

class Quote extends React.Component {
  render() {
    return (
      <Segment>
        <Header as='h2'>{ this.props.quote }</Header>
          <b>{ this.props.source }</b>
      </Segment>
    )
  }
}

export default Quote;