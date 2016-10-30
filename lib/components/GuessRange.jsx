import React, { Component } from 'react';

export default class GuessRange extends Component {
  render() {
    const { userGuess } = this.props;

    return (
      <section className = 'guessRangeForm'>
        <p>Guess a number between:
        <input className = 'Minimum'
        />
        and
        <input className = 'Maximum'
        />
        </p>
      </section>
    );
  }
}
