import React from "react";
import { Header, Container } from 'semantic-ui-react';
import Quote from './Quote';
import NewQuote from "./NewQuote";
import RFRiley from "./RFRILEY";

class Riley extends React.Component {
  state ={
    quotes: [
      {id: 1, source: "John Wayne", quote: "What’s the secret of success? Right decisions. How do you make right decisions? Experience. How do you get experience? Wrong decisions."},
      {id: 2, source: "Oscar Wilde", quote: "To live is the rarest thing in the world. Most people exist, that is all."},
      {id: 3, source: "Every Mom Ever", quote: "BECAUSE I SAID SO!"},
      {id: 4, source: "J Daddy", quote: "Yo"},
    ]
  };

  
  editQuote = (quoteData) => {
    const editQuotes = this.state.quotes.map( (quote) => {
      if (quote.id === quoteData.id)
        return quoteData;
      return quote
    });
    this.setState({quotes: editQuotes});
  }

  deleteQuote = (quoteId) => {
    const filteredQuotes = this.state.quotes.filter((q) => q.id !== quoteId);
    this.setState({
      quotes: filteredQuotes,
    });
  };

  renderQuotes = () => {
    return this.state.quotes.map( quote => 
      <Quote key={quote.id}
            {...quote}
            edit={this.editQuote} 
            deleteQuote={this.deleteQuote} 
      />)
      
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
       <Container>
        <Header color='purple' as='h1'>Quotes For All</Header>
        <NewQuote newQuote={this.addQuote} />
        { this.renderQuotes() }
       
        <RFRiley />
        </Container>
       
      </>
    );
  };
}

export default Riley;
