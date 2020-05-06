import React, { Component } from "react";
import Quotes from "./components/Quotes/Quotes";
import CircularProgress from "@material-ui/core/CircularProgress";
import { fetchQuotes } from "./api";

import styles from "./App.module.css";

export default class App extends Component {
  state = {
    quotes: [],
    randomQuote: {},
    isLoading: true,
    isQuoteLoading: true,
  };

  async componentDidMount() {
    const quotes = await fetchQuotes();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    this.setState({ quotes, randomQuote, isLoading: false });

    setTimeout(() => {
      this.setState({ isQuoteLoading: false });
    }, 500);
  }

  changQuote = () => {
    this.setState({ isQuoteLoading: true });

    setTimeout(() => {
      this.setState(({ quotes }) => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        return { randomQuote, isQuoteLoading: false };
      });
    }, 500);
  };

  render() {
    return (
      <div className={styles.container}>
        {this.state.isLoading ? (
          <CircularProgress color="secondary" />
        ) : (
          <Quotes
            quotes={this.state.randomQuote}
            changeQuote={this.changQuote}
            isQuoteLoading={this.state.isQuoteLoading}
          />
        )}
      </div>
    );
  }
}
