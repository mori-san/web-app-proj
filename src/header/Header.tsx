import React, { Component } from "react";
import { observer } from "mobx-react";
import { NavLink, withRouter, RouteComponentProps } from "react-router-dom";
import * as ROUTES from "../Route";
import "./Header.css";

//=======================================================
// The header.
//=======================================================
@observer
class Header extends Component<RouteComponentProps> {
  render() {
    return (
      <div className="Header">
        <div className="Header-box">
          <div className="Header-text-logo">morisan</div>

          <div className="Header-links-box">
            <NavLink
              exact
              className="Header-link"
              activeClassName="Header-link-selected"
              to={ROUTES.HOMEPAGE}
            >
              Home
            </NavLink>
            <NavLink
              exact
              className="Header-link"
              activeClassName="Header-link-selected"
              to={ROUTES.ABOUTME}
            >
              About Me
            </NavLink>
            <NavLink
              exact
              className="Header-link"
              activeClassName="Header-link-selected"
              to={ROUTES.SAMPLE}
            >
              Sample
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
