import React, { Component } from 'react';

export default class UserGuess extends Component {

  render() {
    const { lastGuess, messageHint } = this.props;

    return (
      <section className ='userGuessForm'>
        <p className = 'lastGuess'>
          Your last guess was... { lastGuess }.
        </p>
        <p className = 'messageHint'>
          { messageHint }
        </p>
      </section>
    );
  }
}
