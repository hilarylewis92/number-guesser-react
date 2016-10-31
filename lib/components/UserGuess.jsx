import React, { Component } from 'react';

export default class UserGuess extends Component {
  render() {
    const { lastGuess } = this.props;

    return (
      <section className ='userGuessForm'>
        <p>
          Your last guess was... { lastGuess }.
        </p>
      </section>
    );
  }
}
