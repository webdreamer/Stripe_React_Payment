import React from 'react';
import logo from './logo.svg';
import './App.css';
const stripe = window.Stripe('pk_test_NFX8EBZy5ZyCpxW1gwmUPJLU00FS9UuhhX');

class App extends React.Component {
  
  componentDidMount() {
    document.title = 'Tourmed'
    //stripe.setPublishableKey(); // set your test public key
  }

  toStripe(){
    stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: 'cs_test_wq4kbOqVqvvVJOlB6GNe4fGMbaPLax4HxxJZjX8qFUjHW8PaQuYp8iQR'
    }).then(function (result) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    });
  }

  render(){
      return (
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <button onClick={this.toStripe}>Redirect to Stripe</button>
          </header>
        </div>
      );
  }
}

export default App;
