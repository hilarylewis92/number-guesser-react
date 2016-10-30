import React, { Component } from 'react';

export default class MessageHint extends Component {
  render() {
    const { userGuess } = this.props;

    return (
      <section className ='messageHintForm'>
        <p>
          That guess was too {}. Try again.
        </p>
      </section>
    );
  }
}
