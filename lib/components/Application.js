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

  componentDidMount() {
    const { defaultMaximum, defaultMinimum } = this.state;
    this.setState(
      {randomNumberGenerated: Math.floor((Math.random() * defaultMaximum - defaultMinimum + 1) + defaultMinimum)
      });
  }

  getUserGuess() {

  }

  updateUserGuessState(e){
    this.setState({
      userGuess: e.target.value
    });
  }
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
          <GuessInputForm
            onGuessInputChange = {this.updateUserGuessState.bind(this)}/>
        </span>

        <span className = 'guessRange'>
          <GuessRange />
        </span>
      </section>
    );
  }
}
