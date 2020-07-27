import React, { Component } from "react";
import { observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import "./Footer.css";

//=======================================================
// The footer.
//=======================================================
@observer
class Footer extends Component<RouteComponentProps> {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-box">
          <div className="Footer-left">morisan</div>
          <div className="Footer-center">
            I'm available for work, get in touch :)
          </div>
          <div className="Footer-right"></div>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
