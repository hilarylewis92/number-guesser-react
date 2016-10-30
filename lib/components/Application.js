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
      defaultMinimum: 1,
      defaultMaximum: 100,
      userMinimum: '',
      userMaximum: ''
    };
  }
  //
  // componentDidMount(){
  //
  // }
  //
  // generateRandomNumber(){
  //
  // }
  //
  // getUserGuess(){
  //
  // }
  //
  // saveUserGuess(){
  //
  // }
  //
  // clearField(){
  //
  // }
  //
  // resetGame(){
  //
  // }

  render() {
    return(
      <section className = 'Application'>
        <span className = 'userGuess'>
        <UserGuess />
        </span>

        <span className = 'messageHint'>
        <MessageHint />
        </span>

        <span className = 'guessInputForm'>
          <GuessInputForm />
        </span>

        <span className = 'guessRange'>
          <GuessRange />
        </span>
      </section>
    );
  }
}
