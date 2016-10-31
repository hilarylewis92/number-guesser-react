import React, { Component } from 'react';

export default class UserGuess extends Component {

  render() {
    const { lastGuess, randomNumberGenerated, messageHint } = this.props;
    // const { messageHint } = this.messageHint(lastGuess, randomNumberGenerated);

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
