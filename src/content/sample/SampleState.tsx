import { observable, action } from "mobx";
import { WeatherForecast, WEATHERFORECAST_DEFAULT } from "../../types";

const axios = require("axios");

//=======================================================
// The state of the sample page
//=======================================================
export default class SampleState {
  @observable weatherData: WeatherForecast;

  constructor() {
    this.weatherData = WEATHERFORECAST_DEFAULT;
  }

  //=======================================================
  // API Calls.
  //=======================================================
  @action
  getWeatherForecast = async () => {
    try {
      const response: any = await axios.get(
        "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast"
      );
      console.log("Weather Forecast", response);
      response.data.items.forEach((data: any) => {
        data.periods.forEach((period: any, index: number) => {
          this.weatherData.periods.splice(index, 0, period);
        });
        this.weatherData.forecast = data.general.forecast;
        this.weatherData.relativeHumidity = data.general.relative_humidity;
        this.weatherData.temperature = data.general.temperature;
        this.weatherData.wind.direction = data.general.wind.direction;
        this.weatherData.wind.speed = data.general.wind.speed;
        this.weatherData.timestamp = data.timestamp;
        this.weatherData.updateTimestamp = data.update_timestamp;
        this.weatherData.validPeriod = data.valid_period;
      });
    } catch (error) {
      console.error(error);
    }
  };
}
