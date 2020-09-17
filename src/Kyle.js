import React from "react";
import BlockGame from "./BlockGame";
import {Container, Button} from "semantic-ui-react";

class Kyle extends React.Component {

  state={showGame:false};

  resetGame =() => {
    console.log('reset');
  }

  toggleGame = () => {
    this.setState({
      showGame: !this.state.showGame,
      
    })
    console.log('toggle');
    this.resetGame();
    // use this to pass reset through
  }
  


  render() {
    const {showGame} = this.state
    return (
      //button to play game starts BlockGame
    <>
    <Container>
    {showGame && <BlockGame/>}
      <Button onClick={this.toggleGame} color='brown'>
        {showGame ? 'end game' : 'start game'}
      </Button>
    </Container>
    </>
    );
  }
}

export default Kyle;
