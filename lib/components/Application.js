import React, { Component } from 'react';

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
        <input id = 'test' type="button" name="name" placeholder="Hello" />
        {/* <span className = 'guessInput'>
          <GuessInput />
        </span>
        <span className = 'userGuess'>
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
