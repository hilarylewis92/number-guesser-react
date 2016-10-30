import React, { Component } from 'react';

export default class UserGuess extends Component {
  render() {
    const { userGuess } = this.props;

    return (
      <section className ='userGuessForm'>
        <p>
          Your last guess was... {userGuess}.
        </p>
      </section>
    );
  }
}
