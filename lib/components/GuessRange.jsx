import React, { Component } from 'react';

export default class GuessRange extends Component {

  toggleButtonDisabled(userMinimum, userMaximum) {
    if(userMinimum.length > 0 && userMaximum > 0){
      return false;
    }else{
      return true;
    }
  }

  render() {
    const { userGuess, onMinimumChange, onMaximumChange, generateRandomNumber, userMinimum, userMaximum } = this.props;
    const toggleButtonDisabled = this.toggleButtonDisabled(userMinimum, userMaximum);

    return (
      <section className = 'guessRangeForm'>
        <span>Guess a number between:
        <input className = 'Minimum'
          placeholder = 'minimum number'
          onChange = {onMinimumChange}
          value = {userMinimum}
          type = 'number'
        />
        and
        <input className = 'Maximum'
          placeholder = 'maximum number'
          onChange = {onMaximumChange}
          value = {userMaximum}
          type = 'number'
        />
        </span>

        <button className = 'rangeBtn'
          disabled = {toggleButtonDisabled}
          onClick = {generateRandomNumber}
          >Set range</button>
      </section>
    );
  }
}
