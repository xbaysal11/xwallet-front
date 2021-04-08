import React, { Component } from "react";
import PT from "prop-types";
import "../Carousel/styles.scss";

export default class CategoryCarouselItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level,
    };
  }
  static propTypes = {
    level: PT.string,
    id: PT.number,
    data: PT.any,
  };
  render() {
    const className = "item level" + this.props.level;
    return (
      <>
        <div className={className}>
          <p>{this.props.id}</p>
          <p>{this.props.data.type}</p>
        </div>
      </>
    );
  }
}
