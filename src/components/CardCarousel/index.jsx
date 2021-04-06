import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import CardItem from "./CardItem";
import PT from "prop-types";
import "./styles.scss";

export default class CardCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      active: this.props.active,
      direction: "",
    };
    this.rightClick = this.moveRight.bind(this);
    this.leftClick = this.moveLeft.bind(this);
  }
  static propTypes = {
    items: PT.any,
    active: PT.number,
    setActive: PT.func,
  };

  generateItems() {
    let items = [];
    let level;
    console.log(this.state.active + 1);
    for (let i = this.state.active - 1; i < this.state.active + 2; i++) {
      let index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      items.push(
        <CardItem key={index} id={this.state.items[index].name} level={level} />
      );
    }
    return items;
  }

  moveLeft() {
    let newActive = this.state.active;
    newActive--;
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: "left",
    });
  }

  moveRight() {
    let newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: "right",
    });
  }

  render() {
    return (
      <div id="carousel" className="noselect">
        <div className="arrow arrow-left" onClick={this.leftClick}>
          <i className="fi-arrow-left">{"<"}</i>
        </div>
        <ReactCSSTransitionGroup transitionName={this.state.direction}>
          {this.generateItems()}
        </ReactCSSTransitionGroup>
        <div className="arrow arrow-right" onClick={this.rightClick}>
          <i className="fi-arrow-right">{">"}</i>
        </div>
      </div>
    );
  }
}
