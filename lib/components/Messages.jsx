import React, { Component } from 'react';

export default class UserGuess extends Component {

  // toggleMessage(outsideRangeMessage, messageHint){
  //   if( outsideRangeMessage.length > 0){
  //     return outsideRangeMessage;
  //   }else{
  //     return messageHint;
  //   }
  // }

  render() {
    const { lastGuess, outsideRangeMessage, messageHint } = this.props;
    // const toggleMessage = this.toggleMessage(outsideRangeMessage, messageHint);

    return (
      <section className ='userGuessForm'>
        <span className = 'lastGuess'>
          Your last guess was... { lastGuess }.
        </span>

        <span className = 'messageHint'>
          { messageHint }
        </span>

        <span>
          { outsideRangeMessage }
        </span>


        {/* <span>
          { toggleMessage }
        </span> */}


      </section>
    );
  }
}
