import React, { Component } from "react";
import { observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import "./Footer.css";

//=======================================================
// The footer.
//=======================================================
@observer
class Footer extends Component<RouteComponentProps> {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-left">morisan</div>
        <div className="Footer-center">Thanks for visiting! Stay safe! :)</div>
        <div className="Footer-right"></div>
      </div>
    );
  }
}

export default withRouter(Footer);
