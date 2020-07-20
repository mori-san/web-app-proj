import React, { Component } from "react";
import { observer } from "mobx-react";
import AboutmeState from "./AboutmeState";

//=======================================================
// Props that about me page is receiving.
//=======================================================
type AboutmeProps = {
  state: AboutmeState;
};

//=======================================================
// Aboutme view.
//=======================================================
@observer
export default class Aboutme extends Component<AboutmeProps> {
  render() {
    return <div>Aboutme</div>;
  }
}
