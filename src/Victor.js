//Author:Victor Gervacio 
//Sept 17 2020
import React from "react";
import VictorStickies from "./VictorStickies"
import { Header } from "semantic-ui-react";

class Victor extends React.Component {
  state = {
    comics: [
      {id:1, title: "The Beginning", body:"This is the begingin of the story"},
      {id:2, title: "The Middle", body:"This is the middle of the story"},
      {id:3, title: "The End", body:"This is the end"},

    ],
  };
  renderComics(){
    return this.state.posts.map((e)=>(
      <
    ))
  }

  render() {
    return(
      <>
   <Header as="h1" >Victor's Comics</Header>
   <VictorStickies />
   </>
    )
  }
}

export default Victor;
