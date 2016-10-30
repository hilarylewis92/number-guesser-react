import React, { Component } from 'react';

export default class GuessInputForm extends Component {
  render() {
    return (
      <section className ='InputForm'>
        <input className = 'guessInput'
          placeholder = 'Your best guess...'
          />
        <button className = 'guessBtn'
          disabled = 'true'>Guess</button>
        <button className = 'clearBtn'
          disabled = 'true'>Clear</button>
        <button className = 'resetBtn'
          disabled = 'true'>Reset Game</button>
      </section>
    );
  }
}
