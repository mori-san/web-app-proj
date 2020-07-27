import { observable, action, computed } from "mobx";
import {
  CurrencyConversion,
  CURRENCYCONVERSION_DEFAULT,
  WeatherForecast,
  WEATHERFORECAST_DEFAULT,
} from "../../types";

const axios = require("axios");

//=======================================================
// The state of the sample page
//=======================================================
export default class SampleState {
  @observable currencyList: any[];
  @observable amount: number;
  @observable fromCurrencyCode: string;
  @observable toCurrencyCode: string;
  @observable conversionResult: CurrencyConversion;
  @observable showCurrencyCodeError: boolean;

  @observable weatherData: WeatherForecast;

  constructor() {
    this.currencyList = [];
    this.amount = 1;
    this.fromCurrencyCode = "AUD";
    this.toCurrencyCode = "AUD";
    this.conversionResult = CURRENCYCONVERSION_DEFAULT;
    this.showCurrencyCodeError = false;

    this.weatherData = WEATHERFORECAST_DEFAULT;
  }

  @action
  refreshData = () => {
    this.currencyList = [];
    this.amount = 1;
    this.fromCurrencyCode = "AUD";
    this.toCurrencyCode = "AUD";
    this.conversionResult = CURRENCYCONVERSION_DEFAULT;
    this.showCurrencyCodeError = false;
  };

  @action
  setAmount = (amount: number) => {
    if (amount) {
      this.amount = amount;
    } else {
      this.amount = 0;
    }
  };

  @action
  selectFromCurrencyCode = (code: string) => {
    this.fromCurrencyCode = code;
  };

  @action
  selectToCurrencyCode = (code: string) => {
    this.toCurrencyCode = code;
  };

  @computed
  get currencyCodeError(): boolean {
    return (
      this.showCurrencyCodeError &&
      this.fromCurrencyCode === this.toCurrencyCode
    );
  }

  //=======================================================
  // API Calls.
  //=======================================================
  @action
  getCurrencies = async () => {
    try {
      const response: any = await axios.get(
        "https://api.frankfurter.app/currencies"
      );
      console.log("Currencies", response);
      Object.entries(response.data).forEach((data: any, index: number) => {
        this.currencyList.splice(index, 0, {
          code: data[0],
          currency: data[1],
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  @action
  getExchangeRate = async () => {
    if (this.fromCurrencyCode === this.toCurrencyCode) {
      this.showCurrencyCodeError = true;
      return;
    }
    this.showCurrencyCodeError = false;
    try {
      axios
        .get("https://api.frankfurter.app/latest", {
          params: {
            amount: this.amount,
            from: this.fromCurrencyCode,
            to: this.toCurrencyCode,
          },
        })
        .then((response: any) => {
          console.log("Exchange Rate", response);
          this.conversionResult.fromAmount = response.data.amount;
          this.conversionResult.fromCurrency = response.data.base;
          Object.entries(response.data.rates).forEach((rates: any) => {
            this.conversionResult.toCurrency = rates[0];
            this.conversionResult.toAmount = rates[1];
          });
        });
    } catch (error) {
      console.error(error);
    }
  };

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
