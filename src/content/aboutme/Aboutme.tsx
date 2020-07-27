import React, { Component } from "react";
import { observer } from "mobx-react";
import "./Aboutme.css";
import AboutmeState from "./AboutmeState";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <div className="Aboutme">
        <div className="Aboutme-box">
          <Card className="text-center">
            <Card.Header as="h5">Header</Card.Header>
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card>

          <Button
            className="backtotop-button"
            variant="outline-secondary"
            onClick={this.scrollToTop}
          >
            ↑ Back to Top
          </Button>
        </div>
      </div>
    );
  }
}
