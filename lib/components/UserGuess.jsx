import React, { Component } from 'react';

export default class UserGuess extends Component {

  render() {
    const { lastGuess, messageHint } = this.props;

    return (
      <section className ='userGuessForm'>
        <p>
          Your last guess was... { lastGuess }.
        </p>
        <p>
          { messageHint }
        </p>
      </section>
    );
  }
}
