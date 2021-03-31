import React, { Component } from "react";
import PT from "prop-types";
import { NavLink, withRouter } from "react-router-dom";

import "./styles.scss";

class NavItem extends Component {
  constructor() {
    super();
    this.getPathName = this.getPathName.bind(this);
  }
  static propTypes = {
    link: PT.string.isRequired,
    name: PT.string.isRequired,
    icon: PT.element.isRequired,
    exact: PT.bool,
    to: PT.any,
    location: PT.any,
  };
  getPathName() {
    return this.props.to?.includes(
      `/${this.props.location.pathname.split("/")[1]}`
    );
  }
  render() {
    const { name, icon, link, exact, to } = this.props;
    return (
      <NavLink
        exact={exact}
        to={link}
        activeClassName="active"
        isActive={to && this.getPathName}
      >
        <div className="nav_item">
          <div className="nav_item_inner">
            <div className="nav_item_icon">{icon}</div>
            <div className="nav_item_text">
              <p>{name}</p>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
}
export default withRouter(NavItem);
