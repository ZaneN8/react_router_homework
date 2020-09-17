import React from "react";
import { Header } from 'semantic-ui-react';
import Quote from './Quote';
import NewQuote from "./NewQuote";

class Riley extends React.Component {
  state ={
    quotes: [
      {id: 1, source: "John Wayne", quote: "What’s the secret of success? Right decisions. How do you make right decisions? Experience. How do you get experience? Wrong decisions."},
      {id: 2, source: "Oscar Wilde", quote: "To live is the rarest thing in the world. Most people exist, that is all."},
      {id: 3, source: "Every Mom Ever", quote: "BECAUSE I SAID SO!"},
    ]
  };

  renderQuotes = () => {
    return this.state.quotes.map( quote => <Quote key={quote.id} {...quote} />)
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x1000)
    .toString(16)
    .substring(1);
  };

  addQuote = (quoteData) => {
    const { quotes, } = this.state;
    const quote = { id: this.getId(), ...quoteData, };
    this.setState({ quotes: [quote, ...quotes], });
  };

  render() {
    return (
    <>
    <Header color='purple' as='h1'>Quotes For All</Header>
    <NewQuote newQuote={this.addQuote} />
    { this.renderQuotes() }
    </>
    )
  }
}

export default Riley;
