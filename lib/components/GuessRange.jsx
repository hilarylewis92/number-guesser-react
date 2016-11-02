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
        <span className='setMinMax'>
          Min:<input className='Minimum'
            placeholder = '0'
            onChange = {onMinimumChange}
            value = {userMinimum}
            type = 'number'
          />

        Max:<input className='Maximum'
            placeholder = '100'
            type = 'number'
            onChange = {onMaximumChange}
            value = {userMaximum}
          />
        </span>

        <button className='rangeBtn'
          disabled = {toggleButtonDisabled}
          onClick = {setNewRange}
          >Set range</button>
      </section>
    );
  }
}
