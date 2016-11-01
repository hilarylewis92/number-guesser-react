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
    const { userGuess, onMinimumChange, onMaximumChange, setNewRange, userMinimum, userMaximum, defaultMinimum, defaultMaximum } = this.props;

    const toggleButtonDisabled = this.toggleButtonDisabled(userMinimum, userMaximum);

    return (
      <section className='guessRangeForm'>
        <span>Guess a number between:
        <input className='Minimum'
          placeholder = 'min'
          onChange = {onMinimumChange}
          value = {userMinimum}
          type = 'number'
        />
        and
        <input className='Maximum'
          placeholder = 'max'
          type = 'number'
          onChange = {onMaximumChange}
          value = {userMaximum}
        />
        </span>

        <span className='defaultMin'>
          Minimum: {defaultMinimum}
        </span>
        <span className='defaultMax'>
          Maximum: {defaultMaximum}
        </span>

        <button className='rangeBtn'
          disabled = {toggleButtonDisabled}
          onClick = {setNewRange}
          >Set range</button>
      </section>
    );
  }
}
