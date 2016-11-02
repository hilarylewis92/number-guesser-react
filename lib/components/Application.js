import React, { Component } from 'react';

import GuessInputForm from './GuessInputForm';
import Messages from './Messages';
import GuessRange from './GuessRange';

export default class Application extends Component {
  constructor(){
    super();
    this.state = {
      userGuess: '',
      lastGuess: '',
      randomNumberGenerated: '',
      messageHint: '',
      outsideRangeMessage: '',
      defaultMinimum: 0,
      defaultMaximum: 100,
      userMinimum: '',
      userMaximum: ''
    };
  }

  componentDidMount() {
    this.generateRandomNumber();
  }

  outsideRangeMessage (userGuess, defaultMinimum, defaultMaximum){
    if( userGuess < defaultMinimum || userGuess > defaultMaximum ){
      this.setState({
        outsideRangeMessage: 'Erroe: please guess a number inside your set range.'
      });
    }else{
      this.setState({
        outsideRangeMessage: ''
      });
    }
  }

  generateRandomNumber() {
    const { defaultMinimum, defaultMaximum } = this.state;
    this.setState({
      randomNumberGenerated: Math.floor((Math.random() * defaultMaximum - defaultMinimum + 1) + defaultMinimum)
    });
  }

  setNewRange(){
    const { userMinimum, userMaximum } = this.state;
    this.setState({
      defaultMinimum: +userMinimum,
      defaultMaximum: +userMaximum
    },
    ()=>{this.generateRandomNumber();});
  }

  messageHint(){
    const { userGuess, randomNumberGenerated } = this.state
    if(userGuess < randomNumberGenerated){
      this.setState({
        messageHint: 'That guess was too low. Try again.'
      });
    }else if(userGuess > randomNumberGenerated){
      this.setState({
        messageHint: 'That guess was too high. Try again.'
      });
    }else{
      this.setState({
        messageHint: 'Correct. You win!',
        defaultMinimum: this.state.defaultMinimum - 10,
        defaultMaximum: this.state.defaultMaximum + 10,
        userMinimum: this.state.defaultMinimum - 10,
        userMaximum: this.state.defaultMaximum + 10
      });
    }
  }

  updateUserGuessState(e){
    this.setState({
      userGuess: e.target.value
    });
  }

  updateMinimumState(e){
    this.setState({
      userMinimum: e.target.value
    });
  }

  updateMaximumState(e){
    this.setState({
      userMaximum: e.target.value
    });
  }

  submitBtn(){
    const { userGuess, randomNumberGenerated, defaultMinimum, defaultMaximum} = this.state;
    this.setState({
      lastGuess: +userGuess,
    });
    this.messageHint(userGuess, randomNumberGenerated),
    this.outsideRangeMessage(userGuess, defaultMinimum, defaultMaximum),
    this.clearField();
  }

  clearField(){
    this.setState({
      userGuess: ''
    });
  }

  resetGame(){
    this.setState({
      userGuess: '',
      lastGuess: '',
      randomNumberGenerated: '',
      messageHint: '',
      outsideRangeMessage: '',
      defaultMinimum: 0,
      defaultMaximum: 100,
      userMinimum: '',
      userMaximum: ''
    });
  }

  render() {
    const { userGuess, lastGuess, randomNumberGenerated, messageHint, userMinimum, userMaximum, defaultMinimum, defaultMaximum, outsideRangeMessage } = this.state;

    return(
      <section className = 'Application'>
        <GuessRange
          className = 'guessRange'
          onMinimumChange = { this.updateMinimumState.bind(this) }
          onMaximumChange = { this.updateMaximumState.bind(this) }
          setNewRange = { this.setNewRange.bind(this) }
          userMinimum = { userMinimum }
          userMaximum = { userMaximum }
          defaultMinimum = { defaultMinimum }
          defaultMaximum = { defaultMaximum }
        />

        <Messages
          className = 'Messages'
          lastGuess = { lastGuess }
          messageHint = { messageHint }
          outsideRangeMessage = { outsideRangeMessage }
        />

        <GuessInputForm
          className = 'guessInputForm'
          userGuess = { userGuess }
          onGuessInputChange = { this.updateUserGuessState.bind(this) }
          clearField = { this.clearField.bind(this) }
          resetGame = { this.resetGame.bind(this) }
          submitBtn = { this.submitBtn.bind(this) }
        />
      </section>
    );
  }
}
