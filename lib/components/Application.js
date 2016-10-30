import React, { Component } from 'react';
import GuessInputForm from './GuessInputForm';

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
        <span className = 'guessInputForm'>
          <GuessInputForm />
        </span>
        {/* <span className = 'userGuess'>
          <UserGuess />
        </span>
        <span className = 'guessRange'>
          <GuessRange />
        </span>
        <span className = 'messageHint'>
          <MessageHint />
        </span> */}
      </section>
    );
  }
}
