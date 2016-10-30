import React, { Component } from 'react';

export default class GuessRange extends Component {
  render() {
    const { userGuess, onMinimumChange, onMaximumChange, generateRandomNumber } = this.props;

    return (
      <section className = 'guessRangeForm'>
        <p>Guess a number between:
        <input className = 'Minimum'
          onChange = {onMinimumChange}
        />
        and
        <input className = 'Maximum'
          onChange = {onMaximumChange}
        />
        </p>

        <button className = 'rangeBtn'
          onClick = {generateRandomNumber}
          >Set Range</button>
      </section>
    );
  }
}
