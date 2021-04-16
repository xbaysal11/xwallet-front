import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import CardCarouselItem from "../CardCarouselItem";
import CategoryCarouselItem from "../CategoryCarouselItem";
import PT from "prop-types";
import { Link } from "react-router-dom";

import "./styles.scss";
import { Right, Left, CardLogo, Logo24, PlusIcon } from "../icons/";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      // items: this.props.items.length ? this.props.items : [{ id: 1, name: "" }],
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
    this.props.onChange(
      this.state.items[this.state.active] &&
        this.state.items[this.state.active].id
    );

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
            id={this.state.items[index] && this.state.items[index].name}
            level={level}
            data={this.state.items[index]}
          />
        );
      } else if (this.props.type === "wallets") {
        items.push(
          <CardCarouselItem
            key={index}
            id={this.state.items[index] ? this.state.items[index].name : 0}
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
          {this.state.items.length > 0 ? (
            <ReactCSSTransitionGroup transitionName={this.state.direction}>
              {this.generateItems()}
            </ReactCSSTransitionGroup>
          ) : (
            <ReactCSSTransitionGroup transitionName={this.state.direction}>
              <Link to="/wallets/create-wallet">
                <div className="wallets-item">
                  <div className="wallet">
                    <div className="wallet-inner">
                      <div className="wallet-header">
                        <div className="wallet-label">
                          <Logo24 />
                          <span>xWallet</span>
                        </div>
                        <div className="wallet-logo">
                          <CardLogo />
                        </div>
                      </div>
                      <div className="wallet-body">
                        <div className="plus-container">
                          <PlusIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ReactCSSTransitionGroup>
          )}
        </div>
        <div className="arrow arrow-right" onClick={this.rightClick}>
          <Right />
        </div>
      </div>
    );
  }
}
