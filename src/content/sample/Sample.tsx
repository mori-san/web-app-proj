import React, { Component } from "react";
import { observer } from "mobx-react";
import "./Sample.css";
import SampleState from "./SampleState";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
  componentDidMount() {
    this.props.state.getWeatherForecast();
  }

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <div className="Sample">
        <div className="Sample-box">
          <div className="Sample-title">RESTful API Integration</div>

          <Card className="text-center">
            <Card.Header>24-hour Weather Forecast</Card.Header>
            <Card.Body>
              <Card.Title>Singapore</Card.Title>
              <Card.Text>
                <b>{this.props.state.weatherData.forecast}</b>
              </Card.Text>
              <Card.Text>
                Temperature:{" "}
                <b>
                  {this.props.state.weatherData.temperature.low} -{" "}
                  {this.props.state.weatherData.temperature.high}°C
                </b>
              </Card.Text>
              <Card.Text>
                Wind:{" "}
                <b>
                  {this.props.state.weatherData.wind.direction}{" "}
                  {this.props.state.weatherData.wind.speed.low} -{" "}
                  {this.props.state.weatherData.wind.speed.high} km/h
                </b>
              </Card.Text>
              <Card.Text>
                Humidity:{" "}
                <b>
                  {this.props.state.weatherData.relativeHumidity.low} -{" "}
                  {this.props.state.weatherData.relativeHumidity.high} %
                </b>
              </Card.Text>
              <Card.Text>
                <b>GET </b>
                https://api.data.gov.sg/v1/environment/24-hour-weather-forecast
              </Card.Text>
              <Card.Text>
                Retrieve the latest 24 hour weather forecast
              </Card.Text>
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
