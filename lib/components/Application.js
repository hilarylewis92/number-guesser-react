import React, { Component } from 'react';
import GuessInputForm from './GuessInputForm';
import UserGuess from './UserGuess';
import GuessRange from './GuessRange';

export default class Application extends Component {
  constructor(){
    super();
    this.state = {
      userGuess: '',
      lastGuess: '',
      randomNumberGenerated: '',
      messageHint: '',
      userMinimum: '',
      userMaximum: ''
    };
  }

  // componentDidMount() {
  //   this.generateRandomNumber();
  // }

  generateRandomNumber() {
    const { userMaximum, userMinimum } = this.state;
    this.setState({
      randomNumberGenerated: Math.floor((Math.random() * userMaximum - userMinimum + 1) + userMinimum)
    });
  }

  messageHint(userGuess, randomNumberGenerated){
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
        messageHint: 'Correct. You win!'
      });
    }
  }

  // rangeMessage(){
  //   const { userMaximum, userMinimum } = this.state;
  //   if(userMaximum < 1 || userMaximum > 100){
  //     return 'Not a value input, ple'
  //   }
  // }

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
    const { userGuess, randomNumberGenerated } = this.state;
    this.setState({
      lastGuess: userGuess
    });
    this.messageHint(userGuess, randomNumberGenerated);
  }

  clearField(){
    this.setState({
      userGuess: ''
    });
  }

  resetGame(){
    this.setState({
      userGuess: '',
      randomNumberGenerated: '',
      messageHint: '',
      userMinimum: '',
      userMaximum: ''
    });
  }

  render() {
    const { userGuess, lastGuess, randomNumberGenerated, messageHint, userMinimum, userMaximum } = this.state;

    return(
      <section className = 'Application'>
        <span className = 'guessRange'>
          <GuessRange
            onMinimumChange = { this.updateMinimumState.bind(this) }
            onMaximumChange = { this.updateMaximumState.bind(this) }
            generateRandomNumber = { this.generateRandomNumber.bind(this) }
            userMinimum = { userMinimum }
            userMaximum = { userMaximum }
          />
        </span>

        <span className = 'userGuess'>
          <UserGuess
            lastGuess = { lastGuess }
            messageHint = { messageHint }
          />
        </span>

        <span className = 'guessInputForm'>
          <GuessInputForm
            userGuess = { userGuess }
            onGuessInputChange = { this.updateUserGuessState.bind(this) }
            clearField = { this.clearField.bind(this) }
            resetGame = { this.resetGame.bind(this) }
            submitBtn = { this.submitBtn.bind(this) }
          />
        </span>
      </section>
    );
  }
}
