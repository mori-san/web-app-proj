import React, { Component } from "react";
import { observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import "./Header.css";
import Nav from "react-bootstrap/Nav";

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

          <Nav className="justify-content-center" activeKey="/homepage">
            <Nav.Item>
              <Nav.Link href="/homepage">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/aboutme">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/sample">Sample</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
