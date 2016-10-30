import React, { Component } from 'react';

export default class GuessInputForm extends Component {

  toggleDisabledButton(userGuess){
    if(userGuess.length > 0){
      return false;
    }else{
      return true;
    }
  }

  render() {
    const { onGuessInputChange, userGuess, clearField, resetGame } = this.props;
    const toggleDisabledButton = this.toggleDisabledButton(userGuess);

    return (
      <section className ='InputForm'>
        <input className = 'guessInput'
          placeholder = 'Your best guess...'
          onChange = {onGuessInputChange}
          />

        <button className = 'guessBtn'
          disabled = {toggleDisabledButton}
          >Guess</button>

        <button className = 'clearBtn'
          disabled = {toggleDisabledButton}
          onClick = {clearField}>Clear</button>

        <button className = 'resetBtn'
          onClick = {resetGame}
          >Reset Game</button>
      </section>
    );
  }
}
