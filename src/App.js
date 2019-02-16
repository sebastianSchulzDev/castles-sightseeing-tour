import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import CastleList from "./components/CastleList";

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <CastleList />
      </main>
    );
  }
}

export default App;
