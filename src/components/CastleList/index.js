import React, { Component } from "react";
import "./CastleList.scss";
import Castle from "./../Castle/Castle";
import { castlesData } from "../CastleList/castlesData";

export default class CastleList extends Component {
  state = {
    castles: castlesData
  };

  removeCastle = id => {
    const { castles } = this.state;
    const sortedCastles = castles.filter(castle => castle.id !== id);
    this.setState({
      castles: sortedCastles
    });
  };
  render() {
    const { castles } = this.state;
    console.log(this.state.castles);

    return (
      <section className="castleList">
        {castles.map(castle => {
          return (
            <Castle
              key={castle.id}
              castle={castle}
              removeCastle={this.removeCastle}
            />
          );
        })}
      </section>
    );
  }
}
