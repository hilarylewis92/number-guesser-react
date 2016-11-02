import React, { Component } from 'react';

export default class UserGuess extends Component {

  render() {
    const { lastGuess, outsideRangeMessage, messageHint } = this.props;

    return (
      <section className='userGuessForm'>
        <span className='lastGuess'>
          <span className='lastGuessWas'>Your last guess was</span>
          <span className='lastNumberGuessed'>{lastGuess}</span>
        </span>

        <span className='messageHint'>
          {messageHint}
        </span>

        <span>
          {outsideRangeMessage}
        </span>
      </section>
    );
  }
}
