//Author:Victor Gervacio 
//Sept 17 2020
import React from "react";
import VictorStickies from "./VictorStickies"
import VictorForm from "./VictorForm"
import { Header } from "semantic-ui-react";

class Victor extends React.Component {
  state = {
    comics: [
      {id:1, title: "The Beginning", body:"This is the begingin of the story"},
      {id:2, title: "The Middle", body:"This is the middle of the story"},
      {id:3, title: "The End", body:"This is the end"},

    ],
  };
  renderComics = () =>{
    return this.state.comics.map((c)=>
      <VictorStickies key= {c.id} {...c} />)
  };

  addComics = (np) => {
    const nps = {...np, id: Math.random() + ''};
    this.setState({
      comics: [...this.state.comics, nps]
    })
  };

  

  render() {
    return(
      <>
   <Header as="h1" style={{ textAlign: "center",color: "green" }}>
     Victor's Comics
     </Header>
   <VictorForm addComics={this.addComics}/>
    {this.renderComics() }
   </>
    )
  }
}

export default Victor;
