import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Home from "./Home";
import Zane from "./Zane";
import Kyle from "./Kyle";
import Scott from "./Scott";
import Riley from "./Riley";
import Victor from "./Victor";
import NoMatch from "./NoMatch";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/zane" component={Zane}></Route>
          <Route exact path="/kyle" component={Kyle}></Route>
          <Route exact path="/scott" component={Scott}></Route>
          <Route exact path="/riley" component={Riley}></Route>
          <Route exact path="/victor" component={Victor}></Route>

          <Route component={NoMatch} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
