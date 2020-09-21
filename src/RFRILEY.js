import React, { useState } from 'react';

const RFRiley = () => {
  // cosnt [getter, setter] = useState(initValue)
  const [quotes, addQuote] = useState([
    {id: 1, quote:'"Go to Hell!"', source: "Me yelling at bad drivers"},
    {id: 2, quote:'"I would totally be a water bender"', source: "Harlan"},
    {id: 3, quote:'"No, take a closer look"', source: "Nick to me when I don't see a bug"},
  ]);

  const [showQuotes, setShowQuotes] = useState(true)
  function renderQuotes(){
    return quotes.map(quote => {
      return(
        <div>
        {quote.quote} credited to: {quote.source}
        </div> 
      );
    });
  }
  
  return(
    <div>
      <h1>Quotes for Scrotes</h1>
      {showQuotes && renderQuotes()}
      <button onClick={() => setShowQuotes(!showQuotes)}>SHow</button>
    </div>
  );
};

export default RFRiley;

