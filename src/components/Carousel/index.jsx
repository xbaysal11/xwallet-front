import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import CardCarouselItem from "../CardCarouselItem";
import CategoryCarouselItem from "../CategoryCarouselItem";
import PT from "prop-types";
import "./styles.scss";

import { Right, Left } from "../icons/";

export default class Carousel extends Component {
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
    type: PT.string,
    setActive: PT.func,
    onChange: PT.func,
  };

  generateItems() {
    let items = [];
    let level;
    console.log(this.state.active + 1);
    console.log(this.state.items[this.state.active].id);
    this.props.onChange(this.state.items[this.state.active].id);

    for (let i = this.state.active - 1; i < this.state.active + 2; i++) {
      let index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      if (this.props.type === "categories") {
        items.push(
          <CategoryCarouselItem
            key={index}
            id={this.state.items[index].name}
            level={level}
            data={this.state.items[index]}
          />
        );
      } else if (this.props.type === "wallets") {
        items.push(
          <CardCarouselItem
            key={index}
            id={this.state.items[index].name}
            level={level}
            data={this.state.items[index]}
          />
        );
      }
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
          <Left />
        </div>
        <div id="carousel-inner">
          <ReactCSSTransitionGroup transitionName={this.state.direction}>
            {this.generateItems()}
          </ReactCSSTransitionGroup>
        </div>
        <div className="arrow arrow-right" onClick={this.rightClick}>
          <Right />
        </div>
      </div>
    );
  }
}
