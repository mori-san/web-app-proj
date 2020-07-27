import React, { Component } from "react";
import { observer } from "mobx-react";
import "./Sample.css";
import SampleState from "./SampleState";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
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
    this.props.state.refreshData();
    this.props.state.getCurrencies();
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
            <Card.Header>Currency Conversion</Card.Header>
            <Card.Body>
              <Form>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                      as="input"
                      value={this.props.state.amount}
                      onChange={({ target }) =>
                        this.props.state.setAmount(parseFloat(target.value))
                      }
                      type="number"
                      min="0"
                      isValid={this.props.state.amount !== 0}
                      isInvalid={this.props.state.amount === 0}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>From</Form.Label>
                    <Form.Control
                      as="select"
                      custom
                      value={this.props.state.fromCurrencyCode}
                      onChange={({ target }) =>
                        this.props.state.selectFromCurrencyCode(
                          String(target.value)
                        )
                      }
                      isValid={
                        this.props.state.fromCurrencyCode !==
                        this.props.state.toCurrencyCode
                      }
                      isInvalid={this.props.state.currencyCodeError}
                    >
                      {this.props.state.currencyList.map((option, index) => {
                        return (
                          <option key={index} value={option.code}>
                            {option.currency}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>To</Form.Label>
                    <Form.Control
                      as="select"
                      custom
                      value={this.props.state.toCurrencyCode}
                      onChange={({ target }) =>
                        this.props.state.selectToCurrencyCode(
                          String(target.value)
                        )
                      }
                      isValid={
                        this.props.state.toCurrencyCode !==
                        this.props.state.fromCurrencyCode
                      }
                      isInvalid={this.props.state.currencyCodeError}
                    >
                      {this.props.state.currencyList.map((option, index) => {
                        return (
                          <option key={index} value={option.code}>
                            {option.currency}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
              </Form>
              {this.props.state.conversionResult.toAmount > 0 ? (
                <React.Fragment>
                  <Card.Title>
                    {this.props.state.conversionResult.fromAmount}{" "}
                    {this.props.state.conversionResult.fromCurrency} =
                  </Card.Title>
                  <Card.Text>
                    {this.props.state.conversionResult.toAmount}{" "}
                    {this.props.state.conversionResult.toCurrency}
                  </Card.Text>
                </React.Fragment>
              ) : null}
              <Button
                variant="primary"
                onClick={this.props.state.getExchangeRate}
              >
                Convert
              </Button>
            </Card.Body>
          </Card>

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
