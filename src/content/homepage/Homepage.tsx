import React, { Component } from "react";
import { observer } from "mobx-react";
import "./Homepage.css";
import HomepageState from "./HomepageState";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import heart from "../../image/heart.svg";
import timeline from "../../image/timeline.svg";
import tick from "../../image/tick.svg";

//=======================================================
// Props that homepage is receiving.
//=======================================================
type HomepageProps = {
  state: HomepageState;
};

//=======================================================
// Homepage view.
//=======================================================
@observer
export default class Homepage extends Component<HomepageProps> {
  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <div className="Homepage">
        <div className="Homepage-title">
          <p>
            “A self-taught person looks at the big picture with an open mind,
            they explore everything.
          </p>
          <p>
            They investigate themselves uncovering what is no longer taught, and
            experience supports it.”
          </p>
          <p style={{ fontSize: "12px" }}>― Efrat Cybulkiewicz</p>
        </div>

        <CardDeck>
          <Card>
            <Card.Img variant="top" src={heart} />
            <Card.Body>
              <Card.Title>"Give your best everyday!"</Card.Title>
              <Card.Text>「毎日頑張っています！」</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">21 July 2020</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={timeline} />
            <Card.Body>
              <Card.Title>
                "The only time you should look back, is to see how far you've
                come."
              </Card.Title>
              <Card.Text>
                「人生で過去を振り返るべき唯一の時は、自分がどれだけ成長したかを確かめる時だ。」
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">21 July 2020</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={tick} />
            <Card.Body>
              <Card.Title>"I will persist until I succeed."</Card.Title>
              <Card.Text>
                「成功するまでやり続けるからいつかきっと成功する。」
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">21 July 2020</small>
            </Card.Footer>
          </Card>
        </CardDeck>

        <Button
          className="Homepage-backtotop"
          variant="outline-secondary"
          onClick={this.scrollToTop}
        >
          ↑ Back to Top
        </Button>
      </div>
    );
  }
}
