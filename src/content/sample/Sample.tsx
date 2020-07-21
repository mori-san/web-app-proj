import React, { Component } from "react";
import { observer } from "mobx-react";
import "./Sample.css";
import SampleState from "./SampleState";

//=======================================================
// Props that sample page is receiving.
//=======================================================
type SampleProps = {
  state: SampleState;
};

//=======================================================
// Sample page view.
//=======================================================
@observer
export default class Sample extends Component<SampleProps> {
  render() {
    return (
      <div className="Sample">
      </div>
    );
  }
}
