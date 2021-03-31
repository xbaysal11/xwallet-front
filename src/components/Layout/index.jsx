import React, { Component } from "react";
import PT from "prop-types";

import { Sidebar } from "..";
import "./styles.scss";

export default class Layout extends Component {
  static propTypes = {
    children: PT.any,
  };
  render() {
    return (
      <div className="layout">
        <div className="layout__sidebar">
          <Sidebar />
        </div>
        <div className="layout__content">{this.props.children}</div>
      </div>
    );
  }
}
