import React, { Component } from 'react';
import GuessInputForm from './GuessInputForm';
import UserGuess from './UserGuess';
import MessageHint from './MessageHint';
import GuessRange from './GuessRange';

export default class Application extends Component {
  constructor(){
    super();
    this.state = {
      userGuess: '',
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
    this.setState(
      {randomNumberGenerated: Math.floor((Math.random() * userMaximum - userMinimum + 1) + userMinimum)
    });
  }

  getUserGuess() {

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

  clearField(){
    this.setState({
      userGuess: ''
    });
  }
  //
  // resetGame(){
  //
  // }

  render() {
    return(
      <section className = 'Application'>
        <span className = 'guessRange'>
          <GuessRange
          onMinimumChange = {this.updateMinimumState.bind(this)}
          onMaximumChange = {this.updateMaximumState.bind(this)}
          generateRandomNumber = {this.generateRandomNumber.bind(this)}
          />
        </span>

        <span className = 'userGuess'>
        <UserGuess />
        </span>

        <span className = 'messageHint'>
        <MessageHint />
        </span>

        <span className = 'guessInputForm'>
          <GuessInputForm
            userGuess = {this.state.userGuess}
            onGuessInputChange = {this.updateUserGuessState.bind(this)}
            clearField = {this.clearField.bind(this)}
            />
        </span>
      </section>
    );
  }
}
