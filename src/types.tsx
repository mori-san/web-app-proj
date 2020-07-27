//=======================================================
// Currency conversion data.
//=======================================================
export type CurrencyConversion = {
  fromAmount: number;
  fromCurrency: string;
  toAmount: number;
  toCurrency: string;
};

//=======================================================
// Default of currency conversion.
//=======================================================
export const CURRENCYCONVERSION_DEFAULT: CurrencyConversion = {
  fromAmount: 0,
  fromCurrency: "",
  toAmount: 0,
  toCurrency: "",
};

//=======================================================
// Weather forecast data.
//=======================================================
export type WeatherForecast = {
  forecast: string;
  relativeHumidity: { high: number; low: number };
  temperature: { high: number; low: number };
  wind: { direction: string; speed: { high: number; low: number } };
  periods: [
    {
      regions: {
        central: string;
        east: string;
        north: string;
        south: string;
        west: string;
      };
      time: { end: Date; start: Date };
    }
  ];
  timestamp: Date;
  updateTimestamp: Date;
  validPeriod: { end: Date; start: Date };
};

//=======================================================
// Default of weather forecast.
//=======================================================
export const WEATHERFORECAST_DEFAULT: WeatherForecast = {
  forecast: "",
  relativeHumidity: { high: 0, low: 0 },
  temperature: { high: 0, low: 0 },
  wind: { direction: "", speed: { high: 0, low: 0 } },
  periods: [
    {
      regions: {
        central: "",
        east: "",
        north: "",
        south: "",
        west: "",
      },
      time: { end: new Date(), start: new Date() },
    },
  ],
  timestamp: new Date(),
  updateTimestamp: new Date(),
  validPeriod: { end: new Date(), start: new Date() },
};
