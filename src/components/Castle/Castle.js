import React, { Component } from "react";
import "./Castle.scss";

export default class Castle extends Component {
  state = {
    showInfo: false
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const { id, city, img, name, info } = this.props.castle;
    const { removeCastle } = this.props;

    return (
      <article className="castle">
        <div className="img-container">
          <img width="200" src={img} alt="" />
          <span
            className="close-btn"
            onClick={() => {
              removeCastle(id);
            }}
          >
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="castle-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
