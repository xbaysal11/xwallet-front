import React, { Component } from "react";
import PT from "prop-types";
import { withRouter } from "react-router-dom";

import { GoBackIcon } from "../icons";
import "./styles.scss";

class PageTitle extends Component {
  constructor() {
    super();
    this.redirectBack = this.redirectBack.bind(this);
  }
  static propTypes = {
    title: PT.string,
    description: PT.string,
    goBack: PT.bool,
    history: PT.any,
  };
  redirectBack() {
    this.props.history.goBack();
  }
  render() {
    const { goBack, title, description } = this.props;
    return (
      <div className="page-title">
        <div className="page-title__inner">
          <div className="page-title__go-back">
            {goBack && (
              <button onClick={this.redirectBack}>
                <GoBackIcon />
              </button>
            )}
          </div>
          <div className="page-title__text">
            <p className="page-title__title">{title}</p>
            {description && (
              <p className="page-title__description">{description}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(PageTitle);
