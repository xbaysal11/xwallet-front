import React, { Component } from "react";
import PT from "prop-types";
import "./styles.scss";

export default class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level,
    };
  }
  static propTypes = {
    level: PT.string,
    id: PT.number,
  };
  render() {
    const className = "item level" + this.props.level;
    return (
      <>
        <div className={className}>{this.props.id}</div>
        {/* <p>safa</p> */}
      </>
    );
  }
}
