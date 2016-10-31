import React, { Component } from 'react';

export default class UserGuess extends Component {

  render() {
    const { lastGuess, messageHint, outsideRangeMessage } = this.props;

    return (
      <section className ='userGuessForm'>
        <span className = 'lastGuess'>
          Your last guess was... { lastGuess }.
        </span>
        <span className = 'messageHint'>
          { messageHint }
        </span>
        <span>
          { outsideRangeMessage }
        </span>

        
      </section>
    );
  }
}
